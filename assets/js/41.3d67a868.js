(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{303:function(e,t,l){"use strict";function i(e,t){for(var l=0,i=t.length;l<i;l++)if(e==t[l])return!0;return!1}function s(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return s}))},424:function(e,t,l){"use strict";l.r(t);var i=l(303),s={name:"BSwitch",data:function(){return{prefixCls:"vbestui-switch"}},props:{value:{type:Boolean,default:!1},size:{validator:function(e){return Object(i.a)(e,["large","default","small"])},default:"default"},disabled:{type:Boolean,default:!1},trueColor:{type:String,default:""},falseColor:{type:String,default:""},name:{type:String,default:""}},methods:{change:function(){this.disabled||(this.$emit("input",!this.value),this.$emit("toggle"))}}},a=l(42),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("span",{class:[e.prefixCls,e.value?"vbestui-switch-active":"","vbestui-switch-"+e.size,e.disabled?"vbestui-switch-disabled":""],style:{backgroundColor:e.value?e.trueColor:e.falseColor},on:{click:e.change}},[l("input",{attrs:{type:"hidden",name:e.name},domProps:{value:e.value}}),e._v(" "),l("span",{staticClass:"vbestui-switch-circle",class:[e.value?e.prefixCls+"-circle-active-"+e.size:e.prefixCls+"-circle-unactive-"+e.size,"small"==e.size?e.prefixCls+"-circle-small":""]}),e._v(" "),e.value?l("div",{class:["small"==e.size?"vbestui-open-small":"",e.prefixCls+"-open"]},[e._t("open",[l("i")])],2):l("div",{class:["small"==e.size?"vbestui-close-small":"",e.prefixCls+"-close"]},[e._t("close",[l("i")])],2)])}),[],!1,null,null,null);t.default=n.exports}}]);