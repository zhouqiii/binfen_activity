(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activityconfiguration"],{1276:function(t,e,i){"use strict";var a=i("d784"),r=i("44e7"),l=i("825a"),n=i("1d80"),s=i("4840"),o=i("8aa5"),c=i("50c4"),u=i("14c3"),d=i("9263"),f=i("9f7f"),p=f.UNSUPPORTED_Y,v=[].push,m=Math.min,h=4294967295;a("split",2,(function(t,e,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var a=String(n(this)),l=void 0===i?h:i>>>0;if(0===l)return[];if(void 0===t)return[a];if(!r(t))return e.call(a,t,l);var s,o,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=new RegExp(t.source,f+"g");while(s=d.call(m,a)){if(o=m.lastIndex,o>p&&(u.push(a.slice(p,s.index)),s.length>1&&s.index<a.length&&v.apply(u,s.slice(1)),c=s[0].length,p=o,u.length>=l))break;m.lastIndex===s.index&&m.lastIndex++}return p===a.length?!c&&m.test("")||u.push(""):u.push(a.slice(p)),u.length>l?u.slice(0,l):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var r=n(this),l=void 0==e?void 0:e[t];return void 0!==l?l.call(e,r,i):a.call(String(r),e,i)},function(t,r){var n=i(a,t,this,r,a!==e);if(n.done)return n.value;var d=l(t),f=String(this),v=s(d,RegExp),y=d.unicode,g=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(p?"g":"y"),b=new v(p?"^(?:"+d.source+")":d,g),x=void 0===r?h:r>>>0;if(0===x)return[];if(0===f.length)return null===u(b,f)?[f]:[];var D=0,E=0,R=[];while(E<f.length){b.lastIndex=p?0:E;var S,w=u(b,p?f.slice(E):f);if(null===w||(S=m(c(b.lastIndex+(p?E:0)),f.length))===D)E=o(f,E,y);else{if(R.push(f.slice(D,E)),R.length===x)return R;for(var k=1;k<=w.length-1;k++)if(R.push(w[k]),R.length===x)return R;E=D=S}}return R.push(f.slice(D)),R}]}),p)},"14c3":function(t,e,i){var a=i("c6b6"),r=i("9263");t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var l=i.call(t,e);if("object"!==typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"159b":function(t,e,i){var a=i("da84"),r=i("fdbc"),l=i("17c2"),n=i("9112");for(var s in r){var o=a[s],c=o&&o.prototype;if(c&&c.forEach!==l)try{n(c,"forEach",l)}catch(u){c.forEach=l}}},"17c2":function(t,e,i){"use strict";var a=i("b727").forEach,r=i("a640"),l=r("forEach");t.exports=l?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"3d77":function(t,e,i){},"44e7":function(t,e,i){var a=i("861d"),r=i("c6b6"),l=i("b622"),n=l("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==r(t))}},"727e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"box"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"activity_rule"},[i("div",{staticClass:"rule base_rule"},[i("div",{staticClass:"title"},[t._v("基本规则")]),i("div",{staticClass:"base_rule_input"},[i("el-form",{ref:"baseRule",attrs:{model:t.form,"label-width":"120px","label-position":"right",size:"mini",rules:t.rules}},[i("el-form-item",{attrs:{label:"活动名称:",prop:"activityName"}},[i("el-input",{staticStyle:{width:"100%"},on:{blur:function(e){return t.checkInput(t.form.activityName,"活动名称")}},model:{value:t.form.activityName,callback:function(e){t.$set(t.form,"activityName",e)},expression:"form.activityName"}})],1),i("div",{staticClass:"flex-row-between"},[i("el-form-item",{attrs:{label:"活动开始时间:",prop:"startDate"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:t.form.disabled,"value-format":"yyyy-MM-dd"},on:{blur:function(e){return t.checkInput(t.form.startDate,"活动开始时间")},change:function(e){return t.checkInput(t.form.startDate,"活动开始时间")}},model:{value:t.form.startDate,callback:function(e){t.$set(t.form,"startDate",e)},expression:"form.startDate"}})],1),i("el-form-item",{attrs:{label:"活动结束时间:",prop:"endDate"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{blur:function(e){return t.checkInput(t.form.endDate,"活动结束时间")},change:function(e){return t.checkInput(t.form.endDate,"活动结束时间")}},model:{value:t.form.endDate,callback:function(e){t.$set(t.form,"endDate",e)},expression:"form.endDate"}})],1)],1),i("div",{staticClass:"flex-row-between"},[i("el-form-item",{attrs:{label:"可领劵开始时间:",prop:"couponStartDate"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:t.form.disabled,"value-format":"yyyy-MM-dd"},on:{blur:function(e){return t.checkInput(t.form.couponStartDate,"可领劵开始时间")},change:function(e){return t.checkInput(t.form.couponStartDate,"可领劵开始时间")}},model:{value:t.form.couponStartDate,callback:function(e){t.$set(t.form,"couponStartDate",e)},expression:"form.couponStartDate"}})],1),i("el-form-item",{attrs:{label:"可领劵结束时间:",prop:"couponEndDate"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},on:{blur:function(e){return t.checkInput(t.form.couponEndDate,"可领劵结束时间")},change:function(e){return t.checkInput(t.form.couponEndDate,"可领劵结束时间")}},model:{value:t.form.couponEndDate,callback:function(e){t.$set(t.form,"couponEndDate",e)},expression:"form.couponEndDate"}})],1)],1),i("el-form-item",{attrs:{label:"活动区域:"}},[i("div",{staticStyle:{color:"#999999","font-size":".16rem"}},[t._v("北京")])])],1)],1)]),i("div",{staticClass:"rule collection_rule"},[i("div",{staticClass:"flex-row-between"},[i("div",{staticClass:"title"},[t._v("领取规则")]),i("div",{staticClass:"elIcon",on:{click:t.addRule}},[i("i",{staticClass:"el-icon-circle-plus-outline"})])]),i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.collectionRuleTable,border:"","row-style":{height:"25px"},"cell-style":{padding:"2px 0"},"header-cell-style":{background:"#ffffff",padding:"4px 0"}}},[i("el-table-column",{attrs:{prop:"ruleType",label:"时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-select",{attrs:{size:"mini"},model:{value:e.row.ruleType,callback:function(i){t.$set(e.row,"ruleType",i)},expression:"scope.row.ruleType"}},t._l(t.timeStatus,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]}}])}),i("el-table-column",{attrs:{prop:"ruleNum",label:"数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{staticStyle:{width:"60%"},attrs:{size:"mini"},model:{value:e.row.ruleNum,callback:function(i){t.$set(e.row,"ruleNum",i)},expression:"scope.row.ruleNum"}}),i("span",{staticStyle:{"margin-left":".1rem"}},[t._v("次")])]}}])}),i("el-table-column",{attrs:{prop:"operating",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"delBtn"},[i("el-button",{attrs:{size:"mini",disabled:t.form.disabledRule},on:{click:function(i){return t.deleteRule(e.$index)}}},[t._v("删除")])],1)]}}])})],1)],1)]),i("div",{staticClass:"rule coupon_description"},[i("div",{staticClass:"title"},[t._v("优惠券描述")]),i("div",{staticClass:"coupon_desc_input"},[i("el-form",{ref:"couponDesc",attrs:{model:t.form,"label-position":"right",size:"mini","label-width":"120px"}},[i("el-form-item",{attrs:{label:"公交劵描述(选填):"}},[i("el-input",{attrs:{rows:2,type:"textarea"},model:{value:t.form.activityBusDesp,callback:function(e){t.$set(t.form,"activityBusDesp",e)},expression:"form.activityBusDesp"}})],1),i("el-form-item",{attrs:{label:"地铁劵描述(选填):"}},[i("el-input",{attrs:{rows:2,type:"textarea"},model:{value:t.form.activitySubDesp,callback:function(e){t.$set(t.form,"activitySubDesp",e)},expression:"form.activitySubDesp"}})],1)],1)],1)]),i("div",{staticClass:"rule use_description"},[i("div",{staticClass:"use_desc_input"},[i("el-form",{ref:"useDesc",attrs:{model:t.form,"label-position":"right",size:"mini",rules:t.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"活动规则描述:",prop:"activityRuleDesp"}},[i("el-input",{attrs:{rows:4,type:"textarea"},on:{blur:function(e){return t.checkInput(t.form.activityRuleDesp,"活动规则描述")}},model:{value:t.form.activityRuleDesp,callback:function(e){t.$set(t.form,"activityRuleDesp",e)},expression:"form.activityRuleDesp"}})],1),i("el-form-item",{attrs:{label:"使用及注意事项:",prop:"activityNotice"}},[i("el-input",{attrs:{rows:4,type:"textarea"},on:{blur:function(e){return t.checkInput(t.form.activityNotice,"使用及注意事项")}},model:{value:t.form.activityNotice,callback:function(e){t.$set(t.form,"activityNotice",e)},expression:"form.activityNotice"}})],1)],1)],1)]),i("div",{staticClass:"rule now_status"},[i("div",{staticClass:"status_select"},[i("el-form",{ref:"statusSel",attrs:{model:t.form,"label-width":"120px","label-position":"right",size:"mini",rules:t.rules}},[i("el-form-item",{attrs:{label:"活动状态",prop:"status"}},[i("el-radio-group",{attrs:{size:"mini"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[i("el-radio",{attrs:{label:"0"}},[t._v("下架")]),i("el-radio",{attrs:{label:"1"}},[t._v("上架")])],1)],1)],1)],1)]),i("div",{staticClass:"rule operate_btn"},[i("div",{staticClass:"operate_save"},[i("el-button",{staticStyle:{width:"80px"},attrs:{type:"primary",size:"mini"},on:{click:t.saveActivity}},[t._v(" 保存 ")])],1)])])])])},r=[],l=(i("ac1f"),i("1276"),i("a434"),i("159b"),i("3d77"),{name:"ActivityConfig",data:function(){return{form:{activityName:"",startDate:"",endDate:"",couponEndDate:"",couponStartDate:"",status:"0",activityBusDesp:"",activitySubDesp:"",activityRuleDesp:"",activityNotice:"",disabled:!1,disabledRule:!0},collectionRuleTable:[{ruleType:"0",ruleNum:"",disabled:!0}],timeStatus:[{label:"整个期间",value:"0"},{label:"每周",value:"1"},{label:"每月",value:"2"}],rules:{activityName:[{required:!0,message:" ",trigger:"blur"}],startDate:[{required:!0,message:" ",trigger:"change"}],endDate:[{required:!0,message:" ",trigger:"change"}],couponStartDate:[{required:!0,message:" ",trigger:"change"}],couponEndDate:[{required:!0,message:" ",trigger:"change"}],activityRuleDesp:[{required:!0,message:" ",trigger:"blur"}],activityNotice:[{required:!0,message:" ",trigger:"blur"}],status:[{required:!0,trigger:"blur"}]},loading:!1}},methods:{assignData:function(t){this.form.activityName=t.activityName,this.form.startDate=t.activityStartDt.split(" ")[0],this.form.endDate=t.activityEndDt.split(" ")[0],this.form.couponStartDate=t.getTicketStartDt.split(" ")[0],this.form.couponEndDate=t.getTicketEndDt.split(" ")[0],this.form.activitySubDesp=t.activitySubDesp,this.form.activityBusDesp=t.activityBusDesp,this.form.activityRuleDesp=t.activityRuleDesp,this.form.activityNotice=t.activityNotice,!1===t.activityStatus?this.form.status="0":this.form.status="1",this.collectionRuleTable=[],this.collectionRuleTable=t.activityList;var e=this.collectionRuleTable.length;this.form.disabledRule=1===e,this.form.disabled=!0},addRule:function(){this.collectionRuleTable.length>=3?this.$message({message:"领取规则不可超过3条！",duration:1500}):(this.collectionRuleTable.push({ruleType:"0",ruleNum:""}),this.collectionRuleTable.length>=2&&(this.form.disabledRule=!1))},deleteRule:function(t){this.collectionRuleTable.splice(t,1),1===this.collectionRuleTable.length&&(this.form.disabledRule=!0)},checkInput:function(t,e){t||this.$message({message:"".concat(e,"不可为空"),duration:1500})},saveActivity:function(){var t=this;this.loading=!0;var e=this.form,i=[];this.collectionRuleTable.forEach((function(t){var e={};e.ruleType=t.ruleType,e.ruleNum=t.ruleNum,i.push(e)})),this.request({url:"/api/add.do",data:{ruleInfo:{activityName:e.activityName,activityStartDt:"".concat(e.startDate),activityEndDt:"".concat(e.endDate),getTicketStartDt:"".concat(e.couponStartDate),getTicketEndDt:"".concat(e.couponEndDate),activityList:i,activityBusDesp:e.activityBusDesp,activitySubDesp:e.activitySubDesp,activityRuleDesp:e.activityRuleDesp,activityNotice:e.activityNotice,activityStatus:e.status}},params:{},method:"post"}).then((function(e){t.loading=!1,"200"===e.code?(t.$message({message:"保存成功!",type:"success"}),t.$router.push({path:"/Activity"})):t.$message.error({message:"保存失败,请重试！"})})).catch((function(){t.loading=!1,t.$message.error({message:"保存失败,请重试！"})}))}},mounted:function(){var t;this.$route.query.data&&(t=JSON.parse(this.$route.query.data),this.assignData(t))}}),n=l,s=i("2877"),o=Object(s["a"])(n,a,r,!1,null,null,null);e["default"]=o.exports},8418:function(t,e,i){"use strict";var a=i("c04e"),r=i("9bf2"),l=i("5c6c");t.exports=function(t,e,i){var n=a(e);n in t?r.f(t,n,l(0,i)):t[n]=i}},"8aa5":function(t,e,i){"use strict";var a=i("6547").charAt;t.exports=function(t,e,i){return e+(i?a(t,e).length:1)}},9263:function(t,e,i){"use strict";var a=i("ad6d"),r=i("9f7f"),l=i("5692"),n=RegExp.prototype.exec,s=l("native-string-replace",String.prototype.replace),o=n,c=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=c||d||u;f&&(o=function(t){var e,i,r,l,o=this,f=u&&o.sticky,p=a.call(o),v=o.source,m=0,h=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,m++),i=new RegExp("^(?:"+v+")",p)),d&&(i=new RegExp("^"+v+"$(?!\\s)",p)),c&&(e=o.lastIndex),r=n.call(f?i:o,h),f?r?(r.input=r.input.slice(m),r[0]=r[0].slice(m),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:c&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),d&&r&&r.length>1&&s.call(r[0],i,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,i){"use strict";var a=i("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,i){"use strict";var a=i("23e7"),r=i("23cb"),l=i("a691"),n=i("50c4"),s=i("7b0b"),o=i("65f0"),c=i("8418"),u=i("1dde"),d=u("splice"),f=Math.max,p=Math.min,v=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var i,a,u,d,h,y,g=s(this),b=n(g.length),x=r(t,b),D=arguments.length;if(0===D?i=a=0:1===D?(i=0,a=b-x):(i=D-2,a=p(f(l(e),0),b-x)),b+i-a>v)throw TypeError(m);for(u=o(g,a),d=0;d<a;d++)h=x+d,h in g&&c(u,d,g[h]);if(u.length=a,i<a){for(d=x;d<b-a;d++)h=d+a,y=d+i,h in g?g[y]=g[h]:delete g[y];for(d=b;d>b-a+i;d--)delete g[d-1]}else if(i>a)for(d=b-a;d>x;d--)h=d+a-1,y=d+i-1,h in g?g[y]=g[h]:delete g[y];for(d=0;d<i;d++)g[d+x]=arguments[d+2];return g.length=b-a+i,u}})},a640:function(t,e,i){"use strict";var a=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&a((function(){i.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,i){"use strict";var a=i("23e7"),r=i("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,i){"use strict";var a=i("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,i){"use strict";i("ac1f");var a=i("6eeb"),r=i("9263"),l=i("d039"),n=i("b622"),s=i("9112"),o=n("species"),c=RegExp.prototype,u=!l((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),f=n("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),v=!l((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));t.exports=function(t,e,i,f){var m=n(t),h=!l((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),y=h&&!l((function(){var e=!1,i=/a/;return"split"===t&&(i={},i.constructor={},i.constructor[o]=function(){return i},i.flags="",i[m]=/./[m]),i.exec=function(){return e=!0,null},i[m](""),!e}));if(!h||!y||"replace"===t&&(!u||!d||p)||"split"===t&&!v){var g=/./[m],b=i(m,""[t],(function(t,e,i,a,l){var n=e.exec;return n===r||n===c.exec?h&&!l?{done:!0,value:g.call(e,i,a)}:{done:!0,value:t.call(i,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=b[0],D=b[1];a(String.prototype,t,x),a(c,m,2==e?function(t,e){return D.call(t,this,e)}:function(t){return D.call(t,this)})}f&&s(c[m],"sham",!0)}}}]);