(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activity"],{"159b":function(t,a,e){var i=e("da84"),c=e("fdbc"),s=e("17c2"),r=e("9112");for(var n in c){var l=i[n],o=l&&l.prototype;if(o&&o.forEach!==s)try{r(o,"forEach",s)}catch(u){o.forEach=s}}},"17c2":function(t,a,e){"use strict";var i=e("b727").forEach,c=e("a640"),s=c("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"5dbd":function(t,a,e){},8418:function(t,a,e){"use strict";var i=e("c04e"),c=e("9bf2"),s=e("5c6c");t.exports=function(t,a,e){var r=i(a);r in t?c.f(t,r,s(0,e)):t[r]=e}},"99af":function(t,a,e){"use strict";var i=e("23e7"),c=e("d039"),s=e("e8b5"),r=e("861d"),n=e("7b0b"),l=e("50c4"),o=e("8418"),u=e("65f0"),d=e("1dde"),v=e("b622"),y=e("2d00"),f=v("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",g=y>=51||!c((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!r(t))return!1;var a=t[f];return void 0!==a?!!a:s(t)},S=!g||!m;i({target:"Array",proto:!0,forced:S},{concat:function(t){var a,e,i,c,s,r=n(this),d=u(r,0),v=0;for(a=-1,i=arguments.length;a<i;a++)if(s=-1===a?r:arguments[a],b(s)){if(c=l(s.length),v+c>p)throw TypeError(h);for(e=0;e<c;e++,v++)e in s&&o(d,v,s[e])}else{if(v>=p)throw TypeError(h);o(d,v++,s)}return d.length=v,d}})},a640:function(t,a,e){"use strict";var i=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&i((function(){e.call(null,a||function(){throw 1},1)}))}},abae:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"box",staticStyle:{background:"#ffffff"}},[e("div",{staticClass:"activity_select"},[e("div",{staticClass:"activity_condition"},[e("el-form",{ref:"form",staticClass:"form_select flex-row-start",attrs:{model:t.activity,"label-width":"100px","label-position":"right",size:"mini"}},[e("el-form-item",{staticClass:"form_acname",attrs:{label:"活动名称:"}},[e("el-input",{attrs:{placeholder:"请输入活动名称"},model:{value:t.activity.activityName,callback:function(a){t.$set(t.activity,"activityName",a)},expression:"activity.activityName"}})],1),e("el-form-item",{staticClass:"form_city",attrs:{label:"城市:"}},[e("el-input",{attrs:{placeholder:"请输入城市"},model:{value:t.activity.activityArea,callback:function(a){t.$set(t.activity,"activityArea",a)},expression:"activity.activityArea"}})],1),e("el-form-item",{staticClass:"form_status",attrs:{label:"状态:"}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.activity.activityStatus,callback:function(a){t.$set(t.activity,"activityStatus",a)},expression:"activity.activityStatus"}},t._l(t.ActivityStatus,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("el-form-item",{staticClass:"form_time",attrs:{label:"活动起止时间:"}},[e("el-col",{attrs:{span:10}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.activity.activityStartDt,callback:function(a){t.$set(t.activity,"activityStartDt",a)},expression:"activity.activityStartDt"}})],1),e("el-col",{staticClass:"line",attrs:{span:2}},[t._v("~")]),e("el-col",{attrs:{span:10}},[e("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.activity.activityEndDt,callback:function(a){t.$set(t.activity,"activityEndDt",a)},expression:"activity.activityEndDt"}})],1)],1)],1)],1),e("div",{staticClass:"activity_queryBtn"},[e("el-button",{staticClass:"query",attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.getdata(t.activity)}}},[t._v("查询")])],1),e("div",{staticClass:"activity_addBtn"},[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.routeItem("/ActivityConfig")}}},[t._v(" 新建活动 ")])],1)]),e("div",{staticClass:"activity_table"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"activity_table_data"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","row-style":{height:"30px"},"cell-style":{padding:"4px 0"},"header-cell-style":{background:"#f5f5f5",padding:"8px 0"}}},[e("el-table-column",{attrs:{type:"index",label:"序号"}}),e("el-table-column",{attrs:{prop:"activityName",label:"活动名称",width:"180"}}),e("el-table-column",{attrs:{prop:"activityId",label:"活动ID",width:"180"}}),e("el-table-column",{attrs:{prop:"activityArea",label:"活动区域"}}),e("el-table-column",{attrs:{prop:"activityDt",label:"活动起止时间",width:"180"}}),e("el-table-column",{attrs:{prop:"getTicketDt",label:"可领劵起止时间",width:"180"}}),e("el-table-column",{attrs:{prop:"activityStatus",label:"状态",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{on:{change:function(e){return t.getStatusThis(a.row)}},model:{value:a.row.activityStatus,callback:function(e){t.$set(a.row,"activityStatus",e)},expression:"scope.row.activityStatus"}}),t._v(t._s(a.row.statusText)+" ")]}}])}),e("el-table-column",{attrs:{prop:"operating",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small",disabled:a.row.activityStatus},on:{click:function(e){return t.routeItem("/ActivityConfig",a.row)}}},[t._v("编辑")])]}}])})],1),e("div",{staticClass:"activity_pagination flex-row-between"},[e("div",{staticClass:"pagination_left"},[t._v(" 共 "+t._s(t.total)+" 条记录 第 "+t._s(t.currentPage)+" / "+t._s(t.totalPage)+" 页 ")]),e("div",[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.total,layout:"sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a}}})],1)])],1)])])])},c=[],s=(e("159b"),e("99af"),e("5dbd"),{name:"Activity",data:function(){return{activity:{activityName:"",activityArea:"",activityStatus:"",activityStartDt:"",activityEndDt:""},tableData:[],ActivityStatus:[{label:"下架",value:"0"},{label:"上架",value:"1"}],activityStatustext:"",currentPage:1,pageSize:10,loading:!1,total:0,totalPage:1}},methods:{getdata:function(t){var a=this;console.log(t),this.loading=!0,this.request({url:"/api/activityList.do",data:t,params:{pageSize:this.pageSize,pageNum:this.currentPage},method:"post"}).then((function(t){a.loading=!1,a.assignData(t)})).catch((function(t){a.loading=!1,a.$message.error({message:t.message})}))},assignData:function(t){t.data.total>0&&(this.total=t.data.total,this.totalPage=Math.ceil(t.data.total/t.data.pageSize)),t.data.list?(this.tableData=t.data.list,this.tableData.forEach((function(t){var a=t;return a.activityDt="".concat(a.activityStartDt,"~").concat(a.activityEndDt),a.getTicketDt="".concat(a.getTicketStartDt,"~").concat(a.getTicketEndDt),"0"===a.activityStatus?(a.activityStatus=!1,a.statusText="下架"):(a.activityStatus=!0,a.statusText="上架"),a}))):this.tableData=[]},routeItem:function(t,a){a?this.$router.push({path:t,query:{data:JSON.stringify(a)}}):this.$router.push(t)},getStatusThis:function(t){var a,e=this,i=t;this.loading=!0,a=i.activityStatus?"1":"0",this.request({url:"/api/add.do",data:{activityId:i.activityId,activityStatus:a},params:{},method:"post"}).then((function(t){e.loading=!1,"200"===t.code?(e.$message.success({message:"修改成功！"}),i.activityStatus?i.statusText="上架":i.statusText="下架"):(e.$message.error({message:"修改失败,请重试！"}),i.activityStatus?(i.activityStatus=!1,i.statusText="下架"):(i.activityStatus=!0,i.statusText="上架"))})).catch((function(){e.loading=!1,e.$message.error({message:"修改失败,请重试！"})}))},handleSizeChange:function(t){this.pageSize=t,this.queryData()},handleCurrentChange:function(t){this.currentPage=t,this.queryData()}},mounted:function(){this.getdata({})}}),r=s,n=e("2877"),l=Object(n["a"])(r,i,c,!1,null,null,null);a["default"]=l.exports}}]);