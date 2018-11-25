
// only this level can call database directly
const Customer = require('../Models/customer');
const mongoose = require('mongoose');

const get = async (cusId) => {
  // console.log(`jobId => ${jobId}`)
  try {
    let cus = await Customer.findById(cusId)
    return cus
  } catch (error) {
    return {}
  }
}

const store = async (customerObj) => {
  // const customer = new Customer
  let cus = await Customer.findOne({name: customerObj.name})
  if (cus === null) {
    const customer = new Customer({
      _id: new  mongoose.Types.ObjectId(),
      name: customerObj.name,
    });
    try {
      let res = await customer.save()
      return res
    } catch (error) {
      return false
    }
  }
  return cus._id // already have this customer
}

module.exports.get = get
module.exports.store = store