(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc39"],{"0c92":function(t,a,e){"use strict";var n=e("34ef"),s=e.n(n);s.a},2036:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"column col-12 col-xs-12"},[e("page-title",{attrs:{side:"right"}},[e("template",{slot:"left-slot"}),e("div",{staticClass:"has-icon-left",attrs:{slot:"right-slot"},slot:"right-slot"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column col-1 col-md-1 col-xs-12 text-right"},[t.ISADMIN?e("button",{staticClass:"btn btn-success",on:{click:function(a){t.GO_TOPAGE("JobEdit",{key:"create"})}}},[e("i",{staticClass:"fa fa-plus"})]):t._e()]),e("div",{staticClass:"column col-3 col-md-3 col-xs-12"},[e("my-option",{attrs:{config:{type:"text",key:"searchType",rules:"",validator:t.$validator,hasTextDefault:!1,selection:[{key:"all",name:"สถานะทั้งหมด"},{key:"ip",name:"กำลังดำเนินงาน"},{key:"done",name:"รอส่ง"},{key:"send",name:"ส่งงานแล้ว"}]},value:this.local.searchStatusType},on:{input:function(a){t.local.searchStatusType=a}}})],1),e("div",{staticClass:"column col-3 col-md-3 col-xs-12"},[e("my-option",{attrs:{config:{type:"text",key:"searchType",rules:"",validator:t.$validator,hasTextDefault:!1,selection:[{key:"productName",name:"รายการผลิต"},{key:"jobCode",name:"เลขที่จ๊อบ"},{key:"cusName",name:"ลูกค้า"}]},value:this.local.searchType},on:{input:function(a){return t.setSearchType(a)}}})],1),e("div",{staticClass:"column col-5 col-md-5 col-xs-12"},[e("div",{staticClass:"input-group"},[e("my-input",{attrs:{config:{type:"text",key:"keyword",placeholder:"",rules:null}},on:{input:function(a){t.inputSearch=a}}}),e("my-button",{attrs:{config:{icon:null,btnClass:"btn btn-primary input-group-btn",doConfirm:!1,text:"ค้นหา"}},on:{submit:function(a){t.search()}}})],1)])])])],2)],1),e("div",{staticClass:"column col-12 col-xs-12"},[e("div",{staticClass:"card bg-gray"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column col-12"},[e("vuetable",{ref:"vuetable",attrs:{css:{tableClass:"table table-striped table-hover text-center"},"row-class":t.onRowClass,"http-options":t.httpOptions,fields:t.local.fields,"pagination-path":"","per-page":t.perPage,"append-params":t.params,"sort-order":t.local.sortOrder},on:{"vuetable:pagination-data":t.onPaginationData},scopedSlots:t._u([{key:"productName",fn:function(a){return[t.ISADMIN?[e("span",{staticClass:"c-hand text-bold job-id",on:{click:function(e){t.GO_TOPAGE("JobEdit",{key:a.rowData.job._id})}}},[t._v(t._s(a.rowData.job.code))]),t._v(" / "+t._s(a.rowData.product.name)+"\n                ")]:[t._v("\n                  "+t._s(a.rowData.job.code)+" / "+t._s(a.rowData.product.name)+"\n                ")]]}},{key:"status",fn:function(a){return[e("span",{class:t.getStatusClass(a.rowData.product.status)},[t._v(t._s(t.JOBSTATUS[a.rowData.product.status]))])]}},{key:"actions",fn:function(a){return[e("my-button",{attrs:{config:{icon:"fa fa-chevron-circle-right",btnClass:"btn btn-primary",doConfirm:!1,text:"รายละเอียด"}},on:{submit:function(e){t.goToDetail(a.rowData)}}})]}}])}),e("div",{staticClass:"columns"},[e("div",{staticClass:"column col-6 flex-item-center"},[e("vuetable-pagination-info",{ref:"paginationInfo"})],1),e("div",{staticClass:"column col-6"},[e("vuetable-pagination",{ref:"pagination",attrs:{css:{wrapperClass:"pagination flex-item-right",activeClass:"btn btn-primary active",disabledClass:"disabled",pageClass:"btn page-item",linkClass:"page-item",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"angle double left icon",prev:"left chevron icon",next:"right chevron icon",last:"angle double right icon"}}},on:{"vuetable-pagination:change-page":t.onChangePage}})],1)])],1)])])])])])},s=[],o=(e("a481"),e("cadf"),e("551c"),e("097d"),e("0f1e")),i=e("7599"),c=e("a908"),l=e("deaf"),r=e("e925"),u=e("9822"),d=(e("8671"),e("c3d0")),p=e("3568"),f=e("127e"),h={props:{},components:{Vuetable:d["a"],VuetablePagination:p["a"],VuetablePaginationInfo:f["a"],PageTitle:i["a"],MyButton:c["a"],MyInput:l["a"],MyOption:r["a"]},name:"Product",data:function(){return{perPage:10,inputSearch:"",local:{searchStatusType:"all",searchType:"productName",fields:[{name:"__slot:productName",title:"เลขที่จ๊อบ / รายการผลิต"},{name:"customer.name",title:"ลูกค้า"},{name:"job.createDate",sortField:"createdAt",title:"วันที่เริ่มผลิต",callback:"GET_DATE"},{name:"product.dateEnd",sortField:"dateEnd",title:"กำหนดส่ง",callback:"GET_DATE"},{name:"__slot:status",title:"สถานะ"},{name:"__slot:actions",title:""}],sortOrder:[{field:"createdAt",direction:"asc"}],products:[]}}},computed:{httpOptions:function(){var t="";return{baseURL:o["a"].GET_FULLAPI(u["a"].api.product.index,t),headers:{Authorization:o["a"].GET_STORAGEITEM(u["a"].variable.tokenStorage).replace(/['"]+/g,"")}}},params:function(){return{mainSearch:this.inputSearch,searchType:this.local.searchType,searchStatusType:this.local.searchStatusType}}},created:function(){},methods:{goToDetail:function(t){this.GO_TOPAGE("ProductUpdate",{key:t.product._id})},getStatusClass:function(t){return[{"":"ip"===t},{"label label-success mr-1":"done"===t},{"label label-secondary mr-1":"send"===t}]},onPaginationData:function(t){this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},getStatus:function(t){return this.JOBSTATUS[t]},search:function(){this.$refs.vuetable.refresh()},setSearchType:function(t){this.local.searchType=t},onRowClass:function(t,a){return[{"text-error":this.IS_LATE(t.product.dateEnd)&&("ip"===t.product.status||"done"===t.product.status)},{"text-warning":this.IS_SAMEDATE(t.product.dateEnd)&&("ip"===t.product.status||"done"===t.product.status)}]}},watch:{}},m=h,g=(e("0c92"),e("2877")),b=Object(g["a"])(m,n,s,!1,null,"26dd0895",null);b.options.__file="index.vue";a["default"]=b.exports},"34ef":function(t,a,e){}}]);
//# sourceMappingURL=chunk-bc39.c412fb79.js.map