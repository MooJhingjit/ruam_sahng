(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-725b"],{3624:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"column col-12 col-xs-12"},[e("page-title",[e("template",{slot:"left-slot"}),e("div",{staticClass:"has-icon-left",attrs:{slot:"right-slot"},slot:"right-slot"},[e("div",{staticClass:"input-group"},[e("button",{staticClass:"btn btn-success",on:{click:function(a){t.add()}}},[e("i",{staticClass:"fa fa-plus"})]),t._v("\n           \n          "),e("my-input",{attrs:{config:{type:"text",key:"keyword",placeholder:"ค้นหาชื่อ",rules:null}},on:{input:function(a){t.inputSearch=a}}}),e("my-button",{attrs:{config:{icon:null,btnClass:"btn btn-primary input-group-btn",doConfirm:!1,text:"ค้นหา"}},on:{submit:function(a){t.search()}}})],1)])],2)],1),e("div",{staticClass:"column col-12 col-xs-12"},[e("div",{staticClass:"card bg-gray"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column col-12"},[e("vuetable",{ref:"vuetable",attrs:{css:{tableClass:"table table-striped table-hover text-center"},"http-options":t.httpOptions,fields:t.local.fields,"pagination-path":"","per-page":t.perPage,"append-params":t.params,"sort-order":t.local.sortOrder},on:{"vuetable:pagination-data":t.onPaginationData},scopedSlots:t._u([{key:"actions",fn:function(a){return[e("my-button",{attrs:{config:{icon:"fa fa-chevron-circle-right",btnClass:"btn btn-primary",doConfirm:!1,text:"รายละเอียด"}},on:{submit:function(e){t.goToDetail(a.rowData)}}})]}}])}),e("div",{staticClass:"columns"},[e("div",{staticClass:"column col-6 flex-item-center"},[e("vuetable-pagination-info",{ref:"paginationInfo"})],1),e("div",{staticClass:"column col-6"},[e("vuetable-pagination",{ref:"pagination",attrs:{css:{wrapperClass:"pagination flex-item-right",activeClass:"btn btn-primary active",disabledClass:"disabled",pageClass:"btn page-item",linkClass:"page-item",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"angle double left icon",prev:"left chevron icon",next:"right chevron icon",last:"angle double right icon"}}},on:{"vuetable-pagination:change-page":t.onChangePage}})],1)])],1)])])])])])},i=[],s=(e("a481"),e("0f1e")),o=e("7599"),l=e("a908"),c=e("deaf"),r=e("e925"),u=e("9822"),p=(e("8671"),e("c3d0")),d=e("3568"),f=e("127e"),g={props:{},components:{Vuetable:p["a"],VuetablePagination:d["a"],VuetablePaginationInfo:f["a"],PageTitle:o["a"],MyButton:l["a"],MyInput:c["a"],MyOption:r["a"]},name:"Product",data:function(){return{perPage:10,inputSearch:"",local:{fields:[{name:"username",title:"ชื่อเข้าใช้"},{name:"name",title:"ชื่อ"},{name:"department",title:"แผนก"},{name:"createdAt",sortField:"createdAt",title:"วันที่ลงทะเบียน",callback:"GET_DATE"},{name:"__slot:actions",title:""}],sortOrder:[{field:"createdAt",direction:"desc"}],products:[]}}},computed:{httpOptions:function(){var t="";return{baseURL:s["a"].GET_FULLAPI(u["a"].api.user.index,t),headers:{Authorization:s["a"].GET_STORAGEITEM(u["a"].variable.tokenStorage).replace(/['"]+/g,"")}}},params:function(){return{mainSearch:this.inputSearch,searchType:this.local.searchType}}},created:function(){},methods:{add:function(){this.GO_TOPAGE("UserEdit",{key:"new"})},goToDetail:function(t){this.GO_TOPAGE("UserEdit",{key:t._id})},onPaginationData:function(t){this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},search:function(){this.$refs.vuetable.refresh()}},watch:{}},b=g,h=(e("b976"),e("2877")),m=Object(h["a"])(b,n,i,!1,null,"e9fcc484",null);m.options.__file="index.vue";a["default"]=m.exports},b976:function(t,a,e){"use strict";var n=e("e0c7"),i=e.n(n);i.a},e0c7:function(t,a,e){}}]);
//# sourceMappingURL=chunk-725b.c926bfc1.js.map