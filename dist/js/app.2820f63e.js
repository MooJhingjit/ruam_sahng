(function(e){function t(t){for(var a,r,s=t[0],i=t[1],u=t[2],f=0,l=[];f<s.length;f++)r=s[f],c[r]&&l.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-011a":"b7f5594c","chunk-3d53":"4dec27a5","chunk-028b":"1cb32438","chunk-725b":"c926bfc1","chunk-4556":"2671e9e8","chunk-6c02":"a21ba438","chunk-af58":"c8053cd0","chunk-df6c":"f2e3cd5b","chunk-e369":"2d3b1e6d"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-011a":1,"chunk-3d53":1,"chunk-028b":1,"chunk-725b":1,"chunk-4556":1,"chunk-6c02":1,"chunk-af58":1,"chunk-df6c":1,"chunk-e369":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-011a":"c866de3f","chunk-3d53":"2291dc45","chunk-028b":"41473d69","chunk-725b":"f3c4ec9f","chunk-4556":"60d85385","chunk-6c02":"14ca7e88","chunk-af58":"25d849f5","chunk-df6c":"87f7c6c8","chunk-e369":"c492e5f3"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var s=c[o],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===r))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){s=f[o],u=s.getAttribute("data-href");if(u===a||u===r)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,n(c)},l.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){r[e]=0}));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=c[e]=[t,n]});t.push(a[2]=o);var u,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}c[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,f.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=f;o.push([1,"chunk-vendors"]),n()})({"021d":function(e,t,n){"use strict";var a=n("80cd"),r=n.n(a);r.a},"0f1e":function(e,t,n){"use strict";var a=n("9822"),r=function(e,t){return localStorage.setItem(e,JSON.stringify(t)),!0},c=function(e){var t=null;return localStorage.getItem(e)&&(t=localStorage.getItem(e)),t},o=function(e){return localStorage.removeItem(e)},s=function(e){return JSON.parse(JSON.stringify(e))},i=function(e,t){var n="",r=a["a"].api.apiEndPoint;return void 0!==t&&null!==t&&(n="?"+t),r.concat(e)+n},u=function(e){var t="",n="",a="",r=new Date,c=["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];return"now"!==e&&(r=new Date(e)),t=r.getDate(),n=c[r.getMonth()+1],a=r.getFullYear()+543,"".concat(t," ").concat(n," ").concat(a)};t["a"]={SET_STORAGEITEM:r,GET_STORAGEITEM:c,REMOVE_STORAGEITEM:o,GET_FULLAPI:i,GET_DATETHAI:u,COPY_OBJECT:s}},1:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},4:function(e,t){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.normalPages&&e.CHECK_AUTH()?n("div",{staticClass:"pages"},[n("div",{staticClass:"header-wrapper"},[n("header-wrapper")],1),n("div",{staticClass:"body-wrapper"},[n("router-view")],1),n("div",{staticClass:"footer-wrapper"},[n("footer-wrapper")],1)]):n("div",[n("router-view")],1)])},c=[],o=(n("7f7f"),n("96cf"),n("3040")),s=n("c93e"),i=n("2f62"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!==e.local.notification?n("section",{staticClass:"container centered  bg-gray"},[n("header",{staticClass:"columns"},[n("section",{staticClass:"menu-lists navbar-section column col-xs-12 col-8"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column col-3 col-xs-6 text-center"},[n("router-link",{attrs:{to:{name:"Product"}}},[n("i",{staticClass:"fa fa-tasks"}),e._v(" สินค้า\n            "),0!==e.local.notification.productReview?n("span",{staticClass:"badge text-success",attrs:{title:"รอตรวจสอบ "+e.local.notification.productReview+" รายการ","data-badge":e.local.notification.productReview}}):e._e()])],1),n("div",{staticClass:"column col-3 col-xs-6 text-center"},[n("router-link",{attrs:{to:{name:"Schedule"}}},[n("i",{staticClass:"fa fa-table",attrs:{"aria-hidden":"true"}}),e._v(" ตารางงาน")])],1),e.ISADMIN?n("div",{staticClass:"column col-3 col-xs-6 text-center"},[n("router-link",{attrs:{to:{name:"User"}}},[n("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),e._v(" ผู้ใช้งาน")])],1):e._e(),e.ISADMIN?n("div",{staticClass:"column col-3 col-xs-6 text-center"},[n("router-link",{attrs:{to:{name:"Summary"}}},[n("i",{staticClass:"fa fa-pie-chart",attrs:{"aria-hidden":"true"}}),e._v(" ภาพรวม")])],1):e._e()])]),n("section",{staticClass:"profile navbar-section column col-xs-12 col-4"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column col-12 text-right"},[n("div",{staticClass:"tile"},[n("div",{staticClass:"tile-content"},[n("span",{staticClass:"tile-title text-bold c-hand text-nowrap",on:{click:function(t){e.GO_TOPAGE("UserEdit",{key:e.USER._id})}}},[e._v(e._s(e.USER.username))]),n("i",{staticClass:"fa fa-power-off text-error c-hand",attrs:{"aria-hidden":"true"},on:{click:function(t){e.logout()}}})])])])])])])]):e._e()},f=[],l=n("9822"),d=n("8671"),h={props:{},components:{},name:"PageName",data:function(){return{local:{notification:null}}},computed:{},created:function(){K.$on("reloadNotification",this.fetchData),this.fetchData()},methods:{fetchData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(l["a"].api.app.notification),e.prev=1,e.next=4,d["a"].getResource({resourceName:t,queryString:[]});case 4:n=e.sent,this.local.notification=n.data.data,e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](1);case 10:case"end":return e.stop()}},e,this,[[1,8]])}));return function(){return e.apply(this,arguments)}}(),logout:function(){this.LOGOUT()}},beforeDestroy:function(){K.$off("reloadNotification",this.fetchData)}},p=h,m=(n("021d"),n("2877")),b=Object(m["a"])(p,u,f,!1,null,"0a5e11d8",null);b.options.__file="index.vue";var j=b.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container centered"},[n("div",{staticClass:"columns"})])}],g={props:{},components:{},name:"",data:function(){return{property:"Blank"}},computed:{},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{}},T=g,E=(n("dc5e"),Object(m["a"])(T,v,k,!1,null,"783cf737",null));E.options.__file="index.vue";var y=E.exports,_=n("8055"),O=n.n(_),S={components:{headerWrapper:j,footerWrapper:y},name:"App",computed:Object(s["a"])({},Object(i["c"])([])),data:function(){return{normalPages:!0,socket:O()(l["a"].api.host)}},created:function(){K.$on("emitSocket",this.emitSocket),this.fetchData()},mounted:function(){this.socket.on("UPDATE_PRODUCT",function(e){K.$emit("reloadSchedule")}),this.socket.on("UPDATE_NOTIFICATION",function(e){K.$emit("reloadNotification")})},methods:Object(s["a"])({},Object(i["b"])(["SET_APP_STORE"]),{fetchData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("Login"!==this.$route.name){e.next=2;break}return e.abrupt("return");case 2:return t=l["a"].api.app.resource,e.prev=3,e.next=6,d["a"].getResource({resourceName:t,queryString:[]});case 6:n=e.sent,this.setAppData(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),this.LOGOUT();case 13:case"end":return e.stop()}},e,this,[[3,10]])}));return function(){return e.apply(this,arguments)}}(),setAppData:function(e){this.SET_APP_STORE(e)},emitSocket:function(e){this.socket.emit(e.key,e.data)}}),watch:{$route:function(e,t){this.normalPages=!("Login"===e.name||"Schedule"===e.name),this.CHECK_AUTH()?"Login"!==e.name&&this.HAS_PRIVILEGE(e.name)||this.REDIRECT_TOHOMEPAGE():"Login"!==e.name&&this.GO_TOPAGE("Login")}}},A=S,P=(n("5c0b"),Object(m["a"])(A,r,c,!1,null,null,null));P.options.__file="App.vue";var w=P.exports,x=n("8c4f");a["a"].use(x["a"]);var R=new x["a"]({mode:"history",routes:[{path:"/product",name:"Product",component:function(){return Promise.all([n.e("chunk-3d53"),n.e("chunk-028b")]).then(n.bind(null,"2036"))}},{path:"/product/:key",name:"ProductUpdate",component:function(){return n.e("chunk-011a").then(n.bind(null,"9cd5"))}},{path:"/creation",name:"Creation",component:function(){return n.e("chunk-df6c").then(n.bind(null,"9537"))}},{path:"/schedule",name:"Schedule",component:function(){return n.e("chunk-e369").then(n.bind(null,"040d"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-af58").then(n.bind(null,"2564"))}},{path:"/users/",name:"User",component:function(){return Promise.all([n.e("chunk-3d53"),n.e("chunk-725b")]).then(n.bind(null,"3624"))}},{path:"/users/:key",name:"UserEdit",component:function(){return n.e("chunk-6c02").then(n.bind(null,"0509"))}},{path:"/summary",name:"Summary",component:function(){return n.e("chunk-4556").then(n.bind(null,"6213"))}}]}),C={app:{}},D={SET_APPDATA:function(e,t){e.app=t}},I={SET_APP_STORE:function(e,t){var n=e.commit;n("SET_APPDATA",t.data)}},G={GET_USERDATA_STORE:function(e){return e.app.user},GET_APPDATA_STORE:function(e){return e.app.appData}},U={state:C,getters:G,mutations:D,actions:I};a["a"].use(i["a"]);var N=!1,L=new i["a"].Store({modules:{App:U},strict:N}),M=n("9483");Object(M["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("6b54"),n("ac6a"),n("456d");var z=n("c1df"),F=n.n(z),$=n("0f1e"),Y={computed:Object(s["a"])({},Object(i["c"])(["GET_USERDATA_STORE","GET_APPDATA_STORE"]),{USER:function(){return this.GET_USERDATA_STORE},APPDATA:function(){return this.GET_APPDATA_STORE},ISADMIN:function(){return"admin"===this.USER.department},JOBSTATUS:function(){return l["a"].variable.jobStatus},TASKSTATUS:function(){return l["a"].variable.taskStatus}}),filters:{},methods:Object(s["a"])({},Object(i["b"])(["SET_APP_STORE"]),{TODAY:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"DD/MM/YYYY";return F()().format(e)},HAS_PRIVILEGE:function(e){var t="user";this.ISADMIN&&(t="admin");var n=l["a"].variable.privilege[t];return"*"===n||n.indexOf(e)>=0},GO_TOPAGE:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$router.push({name:e,params:{key:t.key}})},CHECK_AUTH:function(){var e=!1;return"1"===$["a"].GET_STORAGEITEM(l["a"].variable.authStorage)&&(e=!0),e},BUILDPARAM:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t="";if(Object.keys(e).length)return Object.keys(e).forEach(function(n){t+=n+"="+e[n]+"&"}),t.slice(0,-1)},NOTIFY:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;arguments.length>2&&void 0!==arguments[2]&&arguments[2];switch(e){case"success":null===t&&(t="ทำรายการเสร็จสิ้น"),this.$notify(t,"success");break;case"error":null===t&&(t="เกิดข้อผิดพลาด โปรดลองอีกครั้ง"),this.$notify(t,"error");break}},REDIRECT_TOHOMEPAGE:function(){this.GO_TOPAGE("Product")},LOGOUT:function(){$["a"].REMOVE_STORAGEITEM(l["a"].variable.tokenStorage),$["a"].REMOVE_STORAGEITEM(l["a"].variable.authStorage),this.SET_APP_STORE({data:{}}),this.GO_TOPAGE("Login")},GET_DATE:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD/MM/YYYY";if(""!==e&&null!==e)return F()(e).format(t)},IS_LATE:function(e){var t=F()();e=F()(e);var n=e.diff(t,"days");return n<0},ISROLE:function(e){return this.USER.role.indexOf(e)>=0},UPDATE_NOTIFICATION:function(){var e={key:"UPDATE_NOTIFICATION",data:{}};K.$emit("emitSocket",e)},GET_VALUEFROMCONFIG:function(e,t,n){if(e){var a=[],r="";return"accessory"===t?(n.map(function(t){e.indexOf(t.key)>=0&&(r+="".concat(t.name,", "))}),r.slice(0,-2)):(a=n.filter(function(t){return t.key&&t.key.toString()===e.toString()}),a.length>0?a[0].name:"")}}})},H=n("7bb1"),q=(n("4543"),n("1310"),n("958a"),n("f196")),B=n("af52"),J=n.n(B);n.d(t,"bus",function(){return K}),a["a"].use(J.a);var V={glossary:{title:"การแจ้งเตือน",ok:"ยืนยัน",cancel:"ยกเลิก"}},K=new a["a"];a["a"].use(q["a"],V),a["a"].use(H["a"],{fieldsBagName:"formFields"}),a["a"].config.productionTip=!1,a["a"].mixin(Y),new a["a"]({router:R,store:L,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("2856"),r=n.n(a);r.a},"80cd":function(e,t,n){},8671:function(e,t,n){"use strict";n("a481");var a=n("bc3a"),r=n.n(a),c=n("0f1e"),o=n("9822"),s=function(){var e=c["a"].GET_STORAGEITEM(o["a"].variable.tokenStorage),t={"Content-Type":"application/json"};e&&(t.Authorization=e.replace(/['"]+/g,""));var n=r.a.create({headers:t});return n},i=function(e,t){var n=s();return new Promise(function(t,a){n.get(c["a"].GET_FULLAPI(e.resourceName,e.queryString)).then(function(e){t(e)}).catch(function(e){a(e)})})},u=function(e,t){var n=s();return new Promise(function(t,a){n.post(c["a"].GET_FULLAPI(e.resourceName),{data:e.data}).then(function(e){t(e)}).catch(function(e){a(e)})})},f=function(e,t){var n=s();return new Promise(function(t,a){n.put(c["a"].GET_FULLAPI(e.resourceName),{data:e.data}).then(function(e){t(e)}).catch(function(e){a(e)})})},l=function(e,t){var n=s();return new Promise(function(t,a){n.delete(c["a"].GET_FULLAPI(e.resourceName,e.queryString)).then(function(e){t(e)}).catch(function(e){a(e)})})};t["a"]={getResource:i,postResource:u,putResource:f,deleteResource:l}},9822:function(e,t,n){"use strict";var a={host:"".concat(window.location.protocol,"//").concat(window.location.hostname,":3000"),apiEndPoint:"".concat(window.location.protocol,"//").concat(window.location.hostname,":3000/api"),app:{resource:"/app/resource",notification:"/app/notification"},login:"/login",job:{index:"/job"},product:{index:"/products",status:"/products/update-status"},schedule:{index:"/schedule"},user:{index:"/users"},summary:{index:"/summary",filter:"/summary-filter"}},r={tokenStorage:"ruamsahng_token",authStorage:"ruamsahng_auth",jobStatus:{ip:"กำลังดำเนินงาน",review:"รอตรวจสอบ",done:"รอส่ง",send:"ส่งงานแล้ว"},taskStatus:{ip:"กำลังดำเนินงาน",wait:"รอ",done:"เสร็จสิ้น"},productType:[{key:1,name:"ตู้เปล่า"},{key:2,name:"วายริ่ง"}],productDepartment:[{key:1,name:"สเปคงาน",nextTask:null},{key:2,name:"แบบ",nextTask:3},{key:3,name:"ตัด",nextTask:4},{key:4,name:"พันท์",nextTask:5},{key:5,name:"พับ",nextTask:6},{key:6,name:"เชื่อมประกอบ",nextTask:7},{key:7,name:"พ่นสี",nextTask:8},{key:8,name:"ประกอบสำเร็จรูป",nextTask:null},{key:9,name:"อุปกรณ์",nextTask:null},{key:10,name:"วายริ่ง",nextTask:null}],equipment:[{key:1,name:"เหล็ก"},{key:2,name:"สแตนเลส"},{key:3,name:"สังกะสี"}],colorType:[{key:1,name:"ชุบ"},{key:2,name:"พ่น"}],accessory:[{key:1,name:"ใส่กระจก"},{key:2,name:"ใส่ยาง"},{key:3,name:"อะคริลิค"}],privilege:{admin:"*",user:["Product","ProductUpdate","Schedule","UserEdit","Login"]}};t["a"]={api:a,variable:r}},"9b73":function(e,t,n){},dc5e:function(e,t,n){"use strict";var a=n("9b73"),r=n.n(a);r.a}});
//# sourceMappingURL=app.2820f63e.js.map