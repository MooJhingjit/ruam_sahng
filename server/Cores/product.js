
// only this level can call database directly
// const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Product = require('../Models/product');
const TaskCore = require('./task.js');
const JobCore = require('./job.js');
const CustomerCore = require('./customer.js');
const config = require('../Config/app.js')
moment = require('moment')

const get = async (obj) => {
  let products = {}
  let condition = {}

  if (obj.type == 'schedule') {
    condition.status = { $nin: ['done', 'send'] }
  }
  if (obj.searchStatusType && obj.searchStatusType  !== 'all') {
    condition.status = obj.searchStatusType
  }
  if (!obj.perPage) {
    obj.perPage = 0
  }
  let sort = {}
  if (obj.sort) {
    let sortArr = obj.sort.split(',')
    sortArr.forEach(sortItem => {
      let str = sortItem.split('|')
      sort[str[0]] = str[1]
    })
  } else {
    sort.createdAt = 'desc'
  }

  if (obj.mainSearch) {
    switch (obj.searchType) {
      case 'jobCode':
      case 'cusName':
        let jobs = []
        if (obj.searchType === 'cusName') {
          let customers = await CustomerCore.findByName(obj.mainSearch)
          // if (customers.length) {
          let cusArr = []
          customers.map((item) => {
            cusArr.push(item._id)
          })
          // }
          jobs = await JobCore.findInArr('searchByCusId', cusArr)
        } else if (obj.searchType === 'jobCode') {
          jobs = await JobCore.findByCode(obj.mainSearch)
        }
        let jobsArr = []
        jobs.map((item) => {
          jobsArr.push(item._id)
        })
        condition.jobId = { "$in" : jobsArr}
        products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
        break
      // case 'cusName':
        
      //     let jobsArr = []
      //     jobs.map((item) => {
      //       jobsArr.push(item._id)
      //     })
      //     condition.jobId = { "$in" : jobsArr}
      //     products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
      //   break
      default: // productName
        condition.name = { '$regex' : obj.mainSearch, '$options' : 'i' }
        products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
        break
    }
  } else {
    products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
  }
  
  let result = {}
  if (obj.type == 'table' || obj.type == 'schedule') {
    result.total = await Product.find(condition).count()
    result.data = await getFullData(products)
  }
  
  return result
}

const getFullData = async (data) => {
  let newData = []
  // let myObject = new Map()
  if (data.length) {
        for (let p = 0; p < data.length; p++){
          let item = {}
          let product = data[p]
          item.product = product
          try {
            item.job = await JobCore.get(product.jobId)
            item.customer = await CustomerCore.get(item.job.cusId)
            item.tasks = await TaskCore.getByProduct(product._id)
            // myObject.set(item)
            newData.push(item)
          } catch (error) {
            console.log(error)
            return false
          }
        }
    return newData
  }
}

const store = async (jobObj, cusId, products) => {
  if (products.length) {
    // await Promise.all(
      // products.map( async (product) => {
    for (let p = 0; p < products.length; p++){
      let product = products[p]
      try {
        const newProduct = new Product({
          _id: new  mongoose.Types.ObjectId(),
          jobId: jobObj._id,
          cusId: cusId,
          name: product.name,
          amount: product.amount,
          thickness: product.thickness,
          note: product.note,
          dateEnd: product.dateEnd,
          type: product.type,
          departmentSelected: product.departmentSelected,
          equipment: (Array.isArray(product.equipment)) ? null : product.equipment,
          colorType: (Array.isArray(product.colorType)) ? null : product.colorType,
          accessory: product.accessory,
          surface: (product.options.surface)? product.options.surface : null,
          colorName: (product.options.colorName)? product.options.colorName :  null,
          status: 'ip'
        });
        let newProductObj = await newProduct.save()
        await TaskCore.store(newProductObj, product)
      } catch (error) {
        console.log(error)
        return false
      }
    }
      // })
    // )
  }
}

const edit = async (productId) => {
  let result = {}
  try {
    result.product = await Product.findById(productId)
    result.job = await JobCore.get(result.product.jobId)
    result.customer = await CustomerCore.get(result.job.cusId)
    result.tasks = await TaskCore.getByProduct(productId)
    result.config = {
      productType: config.appConfig.productType,
      equipment: config.appConfig.equipment,
      colorType: config.appConfig.colorType,
      accessory: config.appConfig.accessory
    }
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

const update = async (productId, product) => {
  let result = {}
  try {
    let tasks = await TaskCore.update(productId, product.tasks)
    // check product completed
    let productCompleted = true
    tasks.map((task, index) => {
      if (!task.isDisable && task.status !== 'done') {
        productCompleted = false
      }
    })
    if (productCompleted) {
      await Product.findOneAndUpdate({_id: productId}, {
        status: 'review'
      })
    }
    return {
      isReview: productCompleted
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

const updateStatus = async (productId, status) => {
  let result = {}
  try {
    let objUpdate = {
      status: status
    }
    if (status === 'send') {
      console.log('do')
      objUpdate.sendAt = new Date()
    }
    await Product.findOneAndUpdate({_id: productId}, objUpdate)
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

const remove = async (productId) => {
  try {
    await Product.findByIdAndRemove({_id: productId})
    await TaskCore.remove(productId)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const getYearsAvailable = async () => {
  return Product.aggregate([
    {$group : {_id : { year: { $year: "$createdAt" } }}},
    {$sort:{"_id.year":-1}}
  ]
 )
}

const getMonthsAvailable = async (yearSelected) => {
  return Product.aggregate([
      {$project:{month: { $month: "$createdAt" }, year: { $year: "$createdAt" }}},
      {$match : { "year":  { "$in": yearSelected } } },
      {$group : {_id: {month:  "$month"}}},
      {$sort:{"_id.month":-1}}
  ])
}

const countProduct = async (productStatus) => {
  try {
    let total = await Product.find({status: productStatus}).count()
    // console.log(total)
    return total
  } catch (error) {
    console.log(error)
    return 0
  }
}

const filterByDate = async (years, months) => { // from summary page
  // let match = {}
  // match.year = { "$in": years }
  // match.months = { "$in": years }
  // match.sendAt = { "$in": years }
  return Product.aggregate([
    {
   $lookup:
     {
       from: 'customers',
       localField: 'cusId',
       foreignField: '_id',
       as: 'customer_docs'
     }
},
  {
    $project:{
      month: { $month: "$createdAt" },
      year: { $year: "$createdAt" },
    //   customer: { $arrayElemAt: [ "$customer_docs", 0 ] },
      customer: "$customer_docs",
      sendAt: 1,
      cusId: 1,
      inTime:
      {
         $cond: { if: { $lte: [ "$sendAt", "$dateEnd" ] }, then: 1, else: 0 }
      },
      late:
      {
         $cond: { if: { $lte: [ "$sendAt", "$dateEnd" ] }, then: 0, else: 1 }
      },
      
    }
  },
  {$match : { "year":  { "$in": years }, "month":  { "$in": months }, "sendAt": { "$exists": true } } },
  {
      $group: { 
        _id: "$cusId", 
        total: { $sum: 1 },
        inTime:{ $sum: "$inTime" },
        late:{ $sum: "$late" },
        customer:{ $addToSet: "$customer" },
    }
      
  },
  {$sort:{"_id.month":-1}}
])
}

module.exports.get = get
module.exports.store = store
module.exports.edit = edit
module.exports.update = update
module.exports.remove = remove
module.exports.filterByDate = filterByDate
module.exports.updateStatus = updateStatus
module.exports.countProduct = countProduct
module.exports.getYearsAvailable = getYearsAvailable
module.exports.getMonthsAvailable = getMonthsAvailable

