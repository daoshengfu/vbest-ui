(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{342:function(t,s,l){},392:function(t,s,l){"use strict";var i=l(342);l.n(i).a},408:function(t,s,l){"use strict";l.r(s);var i={name:"GroupMenu",props:{line:{type:String,default:"1"}},data:function(){return{isDisable:!1,count:40,count2:40,scrollY:50}},methods:{handlePullingUp:function(){this.count2+=10},handleClick:function(){this.$refs.scroll.scrollTo(-this.scrollY,.5),this.scrollY+=40}}},a=(l(392),l(42)),e=Object(a.a)(i,(function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("div",{staticClass:"page"},["1"==t.line?l("div",{staticClass:"one"},[l("b-scroll",{attrs:{height:"300px"}},[l("ul",t._l(t.count,(function(s,i){return l("li",{key:i},[t._v(t._s(s))])})),0)])],1):t._e(),t._v(" "),"2"==t.line?l("div",{staticClass:"two"},[l("div",{staticClass:"left"},[l("h4",[t._v("light")]),t._v(" "),l("b-scroll",{attrs:{height:"300px"}},[l("ul",t._l(t.count,(function(s,i){return l("li",{key:i},[t._v(t._s(s))])})),0)])],1),t._v(" "),l("div",{staticClass:"right"},[l("h4",[t._v("dark")]),t._v(" "),l("b-scroll",{staticClass:"dark",attrs:{height:"300px",theme:"dark"}},[l("ul",t._l(t.count,(function(s,i){return l("li",{key:i},[t._v(t._s(s))])})),0)])],1)]):t._e(),t._v(" "),"3"==t.line?l("div",{staticClass:"three"},[l("b-scroll",{attrs:{height:"300px"},on:{pullingUp:t.handlePullingUp}},[l("ul",t._l(t.count2,(function(s,i){return l("li",{key:i},[t._v(t._s(s))])})),0)])],1):t._e(),t._v(" "),"4"==t.line?l("div",{staticClass:"four"},[l("b-scroll",{ref:"scroll",attrs:{height:"300px","is-disable":t.isDisable}},[l("ul",t._l(t.count,(function(s,i){return l("li",{key:i},[t._v(t._s(s))])})),0)]),t._v(" "),l("div",{staticClass:"contr"},[l("div",{staticClass:"item"},[l("span",{staticClass:"title"},[t._v("是否禁用滚动:")]),t._v(" "),l("b-switch",{staticClass:"item",attrs:{size:"large","true-color":"var(--error)"},model:{value:t.isDisable,callback:function(s){t.isDisable=s},expression:"isDisable"}},[l("span",{attrs:{slot:"open"},slot:"open"},[t._v("禁用")]),t._v(" "),l("span",{attrs:{slot:"close"},slot:"close"},[t._v("开启")])])],1),t._v(" "),l("div",{staticClass:"item"},[l("span",{staticClass:"title"},[t._v("手动设置滚动位置:")]),t._v(" "),l("b-button",{attrs:{type:"primary"},on:{click:t.handleClick}},[t._v("滚动")])],1)])],1):t._e(),t._v(" "),"5"==t.line?l("div",{staticClass:"one"},[l("b-scroll",{staticClass:"scroll",attrs:{"bar-color":"var(--warning)","bar-active-color":"var(--error)","load-color":"var(--success)","load-active-color":"var(--info)"}},[l("ul",t._l(t.count,(function(s,i){return l("li",{key:i},[t._v(t._s(s))])})),0)])],1):t._e()])}),[],!1,null,"168abb1c",null);s.default=e.exports}}]);