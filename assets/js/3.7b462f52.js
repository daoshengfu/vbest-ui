(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{307:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},308:function(e,t,n){"use strict";function r(e,t){for(var n=0,r=t.length;n<r;n++)if(e==t[n])return!0;return!1}function i(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))},309:function(e,t,n){var r=n(23),i="["+n(307)+"]",o=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(u,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},310:function(e,t,n){var r=n(5),i=n(95);e.exports=function(e,t,n){var o,u;return i&&"function"==typeof(o=t.constructor)&&o!==n&&r(u=o.prototype)&&u!==n.prototype&&i(e,u),e}},311:function(e,t,n){"use strict";var r=n(7),i=n(4),o=n(94),u=n(11),c=n(8),a=n(25),l=n(310),s=n(44),h=n(2),f=n(29),d=n(67).f,v=n(24).f,p=n(9).f,g=n(309).trim,x=i.Number,m=x.prototype,I="Number"==a(f(m)),C=function(e){var t,n,r,i,o,u,c,a,l=s(e,!1);if("string"==typeof l&&l.length>2)if(43===(t=(l=g(l)).charCodeAt(0))||45===t){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(u=(o=l.slice(2)).length,c=0;c<u;c++)if((a=o.charCodeAt(c))<48||a>i)return NaN;return parseInt(o,r)}return+l};if(o("Number",!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var y,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(I?h((function(){m.valueOf.call(n)})):"Number"!=a(n))?l(new x(C(t)),n,S):C(t)},k=r?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;k.length>N;N++)c(x,y=k[N])&&!c(S,y)&&p(S,y,v(x,y));S.prototype=m,m.constructor=S,u(i,"Number",S)}},315:function(e,t,n){"use strict";var r=n(1),i=n(316);r({target:"String",proto:!0,forced:n(317)("link")},{link:function(e){return i(this,"a","href",e)}})},316:function(e,t,n){var r=n(23),i=/"/g;e.exports=function(e,t,n,o){var u=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),c+">"+u+"</"+t+">"}},317:function(e,t,n){var r=n(2);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},460:function(e,t,n){"use strict";n.r(t);n(311),n(315);var r=n(308),i={name:"BMenu",props:{activeIndex:{type:Number,default:0},menu:{type:Array,default:[]},theme:{validator:function(e){return Object(r.a)(e,["dark","light"])},default:"light"},vertical:{type:Boolean,default:!1},itemWidth:{type:String,default:"140px"},itemHeight:{type:String,default:""},backgroundColor:{type:String,default:""},activeBackgroundColor:{type:String,default:""},textColor:{type:String,default:""},activeColor:{type:String,default:"var(--primary)"},hoverColor:{type:String,default:""},hoverBackgroundColor:{type:String,default:""},activeShowBorder:{type:Boolean,default:!0}},data:function(){return{prefixCls:"vbestui-menu",currentIndex:0,hoverIndex:0}},computed:{menuStyle:function(){return{width:this.vertical?this.itemWidth:"",height:this.vertical?"100%":"",backgroundColor:this.backgroundColor}},ulStyle:function(){return{display:this.vertical?"block":"flex"}},itemStyle:function(){return{textAlign:this.vertical?"none":"center",paddingLeft:this.vertical?"20px":"none"}},containerStyle:function(){return{width:this.itemWidth,height:this.itemHeight,lineHeight:this.itemHeight}},iconStyle:function(){return{marginRight:"8px"}},getMenuItemActive:function(){return this.vertical?"".concat(this.prefixCls,"-item-active-vertical"):"".concat(this.prefixCls,"-item-active")},getChildItemActive:function(){return"".concat(this.prefixCls,"-item-active-vertical")},isChildsMenu:function(){return this.showChildsMenu||this.hovershowChildsMenu}},methods:{handleMenuClick:function(e){this.currentIndex=e,this.menu[e]instanceof Object&&this.menu[e].link&&this.$router.push("".concat(this.menu[e].link)),this.$emit("update:activeIndex",this.currentIndex),this.$emit("click",this.currentIndex)},handleMouseEnter:function(e){this.hoverIndex=e,this.hovershowChildsMenu=!0},handleMouseLeave:function(e){this.hoverIndex=this.currentIndex,this.hovershowChildsMenu=!1}},watch:{activeIndex:{handler:function(){this.currentIndex=this.activeIndex,this.hoverIndex=this.activeIndex},immediate:!0}}},o=n(43),u=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.prefixCls,e.prefixCls+"-"+e.theme],style:e.menuStyle},[n("ul",{class:e.prefixCls+"-ul",style:e.ulStyle},e._l(e.menu,(function(t,r){return n("li",{key:r,class:[e.prefixCls+"-item",(r==e.currentIndex||e.hoverIndex==r)&&e.activeShowBorder?e.getMenuItemActive:""],style:[e.itemStyle,{color:r==e.currentIndex?e.activeColor:e.hoverIndex==r?e.hoverColor||e.activeColor:e.textColor,background:e.currentIndex==r?""!=e.activeBackgroundColor?e.activeBackgroundColor:"dark"==e.theme?"#363e4f":"":e.hoverIndex==r?e.hoverBackgroundColor||e.activeBackgroundColor:"",borderColor:e.currentIndex==r?e.activeColor:e.hoverIndex==r?e.hoverColor||e.activeColor:""}],on:{click:function(t){return e.handleMenuClick(r)},mouseenter:function(t){return t.stopPropagation(),e.handleMouseEnter(r)},mouseleave:function(t){return t.stopPropagation(),e.handleMouseLeave(r)}}},[n("div",{class:e.prefixCls+"-item-container",style:e.containerStyle},[t.icon?n("i",{class:t.icon,style:e.iconStyle}):e._e(),e._v(" "),n("span",[e._v(e._s(t.content||t))])])])})),0)])}),[],!1,null,null,null);t.default=u.exports}}]);