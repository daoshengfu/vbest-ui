(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{303:function(t,e,o){"use strict";function n(t,e){for(var o=0,n=e.length;o<n;o++)if(t==e[o])return!0;return!1}function i(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return i}))},343:function(t,e,o){},414:function(t,e,o){"use strict";var n=o(343);o.n(n).a},470:function(t,e,o){"use strict";o.r(e);var n=o(303),i=["primary","info","success","warning","error","joker"],s={name:"BTag",props:{type:{validator:function(t){return Object(n.a)(t,["border","dot"])},default:"border"},size:{validator:function(t){return Object(n.a)(t,["default","medium","large"])},default:"default"},closable:{type:Boolean,default:!1},closeBorder:{type:Boolean,default:!1},color:{type:String,default:""},plain:{type:Boolean,default:!1}},data:function(){return{prefixCls:"vbestui-tag",isShow:!0}},computed:{tagClass:function(){return["vbestui-tag"]},tagStyle:function(){return{background:"dot"!=this.type?this.plain?"":this.getColor:"",borderColor:this.getColor}},dotClass:function(){return["".concat(this.prefixCls+"-dot")]},dotStyle:function(){return{background:"dot"==this.type?this.getColor:"",borderColor:"dot"==this.type?this.getColor:""}},conClass:function(){return["".concat("vbestui-tag-content")]},conStyle:function(){return{padding:"".concat(this.getConSizeSty," 10px"),marginRight:this.closable?"30px":"",paddingRight:this.closable?this.closeBorder?"10px":"5px":"",color:this.isWhite?"#fff":this.getColor}},closeClass:function(){return["".concat("vbestui-tag-close")]},closeStyle:function(){return{borderLeft:this.closeBorder?"1px solid var(--border)":"",borderColor:"border"==this.type?this.plain?this.getColor:"#fff":this.getColor}},iconClass:function(){return["".concat("vbestui-tag-iconSize")]},iconStyle:function(){return{color:this.isWhite?"#fff":this.getColor}},isShowDot:function(){return"dot"==this.type},getConSizeSty:function(){var t="";switch(this.size){case"default":t="4";break;case"medium":t="6px";break;case"large":t="8px"}return t},isWhite:function(){return""!=this.color&&!this.plain&&"dot"!=this.type},getColor:function(){return Object(n.a)(this.color,i)?"var(--".concat(this.color,")"):"".concat(this.color)}},methods:{handleTagClose:function(){this.isShow=!1,this.$emit("close")},handleTagClick:function(){this.$emit("click")}}},r=(o(414),o(43)),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isShow?o("transition",{attrs:{name:"tag"},on:{click:t.handleTagClick}},[o("div",{ref:"tag",class:t.tagClass,style:t.tagStyle},[t.isShowDot?o("div",{class:t.dotClass,style:t.dotStyle}):t._e(),t._v(" "),o("div",{class:t.conClass,style:t.conStyle},[t._t("default")],2),t._v(" "),t.closable?o("div",{class:t.closeClass,style:t.closeStyle,on:{click:t.handleTagClose}},[o("i",{staticClass:"iconfont icon-close",class:t.iconClass,style:t.iconStyle})]):t._e()])]):t._e()}),[],!1,null,"7e25f68c",null);e.default=l.exports}}]);