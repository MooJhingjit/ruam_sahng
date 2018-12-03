import { mapGetters, mapActions } from 'vuex'
// import Helper from '@Libraries/common.helpers'
// import service from '@Services/app-service'
import config from '@Config/app.config'
import moment from 'moment'
// import nodeSnackbar from 'node-snackbar'
import Helper from '@Libraries/common.helpers'
export default {
  computed: {
    ...mapGetters([
      'GET_USERDATA_STORE'
    ]),
    USER () {
      return this.GET_USERDATA_STORE
    },
    // PRODUCTDEPARTMENT () {
    //   return config.variable.productDepartment
    // },
    // EQUIPMENT () {
    //   return config.variable.equipment
    // },
    // COLORTYPE () {
    //   return config.variable.colorType
    // },
    ISADMIN () {
      return (this.USER.department === 'admin')
    },
    JOBSTATUS () {
      return config.variable.jobStatus
    },
    TASKSTATUS () {
      return config.variable.taskStatus
    }
  },
  filters: {},
  methods: {
    ...mapActions([
      'SET_APP_STORE'
    ]),
    // GET_DATEDIFF (dateStart, dateEnd) { // this for buefy
    //   var startDate = moment(dateStart, 'YYYY/MM/DD')
    //   var endDate = moment(dateEnd, 'YYYY/MM/DD')
    //   return endDate.diff(startDate, 'days')
    // },
    // ADDCOMMAS (number, digit = 0) {

    // },
    GO_TOPAGE (pageName, options = {}) {
      this.$router.push({
        name: pageName,
        params: { key: options.key }
      })
    },
    CHECK_AUTH () {
      let hasAuth = false
      // console.log(Helper.GET_STORAGEITEM(config.variable.authStorage))
      if (Helper.GET_STORAGEITEM(config.variable.authStorage) === '1') {
        hasAuth = true
      }
      return hasAuth
    },
    BUILDPARAM (params = []) {
      let queryString = ''
      if (Object.keys(params).length) {
        Object.keys(params).forEach(function (key) {
          queryString += key + '=' + params[key] + '&'
        })
        return queryString.slice(0, -1)
      }
    },
    NOTIFY (type, msg = null, options = {}) {
      switch (type) {
        case 'success':
          if (msg === null) {
            msg = 'ทำรายการเสร็จสิ้น'
          }
          this.$notify(msg, 'success')
          break
        case 'error':
          if (msg === null) {
            msg = 'เกิดข้อผิดพลาด โปรดลองอีกครั้ง'
          }
          this.$notify(msg, 'error')
          break
      }
    },
    REDIRECT_TOHOMEPAGE () {
      this.GO_TOPAGE('Product')
    },
    LOGOUT () {
      Helper.REMOVE_STORAGEITEM(config.variable.tokenStorage)
      Helper.REMOVE_STORAGEITEM(config.variable.authStorage)
      this.SET_APP_STORE({data: {}})
      this.GO_TOPAGE('Login')
    },
    GET_DATE (date = '', format = 'DD/MM/YYYY') {
      if (date === '' || date === null) return
      return moment(date).format(format)
    },
    IS_LATE (dateEnd) {
      // console.log(dateEnd)
      let today = moment()
      dateEnd = moment(dateEnd)
      let dataDiff = dateEnd.diff(today, 'days')
      // console.log(dataDiff)
      return (dataDiff <= 0)
    },
    ISROLE (taskId) {
      return this.USER.role.indexOf(taskId) >= 0;
    }
    // LOGOUT () {
    //   Helper.REMOVE_STORAGEITEM('isAuth')
    //   Helper.REMOVE_STORAGEITEM('app_token')
    //   Helper.REMOVE_STORAGEITEM('userData')
    //   this.GO_TOPAGE('Login')
    // },
    // SETAUTH (token) {
    //   Helper.SET_STORAGEITEM('isAuth', 1)
    //   Helper.SET_STORAGEITEM('app_token', token)
    //   this.setAuth(true)
    // },
    // SERUSERDATA (userData) {
    //   Helper.SET_STORAGEITEM('userData', userData)
    // },
    // HASAUTH () {
    //   let isAuth = Helper.GET_STORAGEITEM('isAuth')
    //   let token = Helper.GET_STORAGEITEM('app_token')
    //   if (!isAuth || !token) {
    //     this.setAuth(false)
    //     return false
    //   }
    //   this.setAuth(true)
    //   return true
    // },
    // REMOVEDUPLICATES (originalArray, prop) {
    //   let newArray = []
    //   let lookupObject = {}
    //   for (let i in originalArray) {
    //     lookupObject[originalArray[i][prop]] = originalArray[i]
    //   }
    //   for (let i in lookupObject) {
    //     newArray.push(lookupObject[i])
    //   }
    //   return newArray
    // }
  }
}
