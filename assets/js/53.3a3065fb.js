(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{454:function(t,e,i){"use strict";i.r(e);var n={name:"BMask",data:function(){return{prefixCls:"vbestui-mask"}},props:{fix:{type:Boolean,default:!1},icon:{type:String,default:""},src:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:""},size:{type:String,default:""},fontSize:{type:String,default:""},background:{type:String,default:""}},computed:{maskClass:function(){return["".concat(this.prefixCls),this.fix?"".concat(this.prefixCls+"-fix"):""]},maskStyle:function(){return{color:this.color,backgroundColor:this.background,fontSize:this.fontSize}},iconStyle:function(){return{color:this.color,fontSize:this.size}},imgStyle:function(){return{width:this.size,height:this.size}}}},s=i(43),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.maskClass,style:t.maskStyle},[t._t("default",[t.icon?i("i",{class:t.icon,style:t.iconStyle}):t._e(),t._v(" "),!t.icon&&t.src?i("img",{style:t.imgStyle,attrs:{src:t.src,alt:""}}):t._e(),t._v(" "),t.text?i("span",[t._v(t._s(t.text))]):t._e()])],2)}),[],!1,null,null,null);e.default=o.exports}}]);