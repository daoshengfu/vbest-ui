(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{303:function(t,e,n){"use strict";function i(t,e){for(var n=0,i=e.length;n<i;n++)if(t==e[n])return!0;return!1}function r(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}))},304:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},305:function(t,e,n){var i=n(24),r="["+n(304)+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},306:function(t,e,n){var i=n(5),r=n(94);t.exports=function(t,e,n){var s,o;return r&&"function"==typeof(s=e.constructor)&&s!==n&&i(o=s.prototype)&&o!==n.prototype&&r(t,o),t}},307:function(t,e,n){"use strict";var i=n(6),r=n(4),s=n(93),o=n(11),c=n(7),a=n(18),u=n(306),h=n(44),l=n(2),d=n(29),f=n(66).f,p=n(25).f,g=n(9).f,v=n(305).trim,I=r.Number,m=I.prototype,x="Number"==a(d(m)),w=function(t){var e,n,i,r,s,o,c,a,u=h(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=v(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(o=(s=u.slice(2)).length,c=0;c<o;c++)if((a=s.charCodeAt(c))<48||a>r)return NaN;return parseInt(s,i)}return+u};if(s("Number",!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var b,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(x?l((function(){m.valueOf.call(n)})):"Number"!=a(n))?u(new I(w(e)),n,S):w(e)},y=i?f(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;y.length>N;N++)c(I,b=y[N])&&!c(S,b)&&g(S,b,p(I,b));S.prototype=m,m.constructor=S,o(r,"Number",S)}},309:function(t,e,n){var i=n(1),r=n(4),s=n(96),o=[].slice,c=function(t){return function(e,n){var i=arguments.length>2,r=i?o.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},460:function(t,e,n){"use strict";n.r(e);n(170),n(307),n(309);var i=n(303),r={name:"BSwiper",provide:function(){return{swiper:this}},props:{value:{type:Number,default:0},width:{type:Number,default:500},height:{type:Number,default:0},toggleTime:{type:Number,default:4e3},trigger:{validator:function(t){return Object(i.a)(t,["click","hover"])},default:"click"},dots:{validator:function(t){return Object(i.a)(t,["inside","outside","none"])},default:"inside"},circleDots:{type:Boolean,default:!1},dotsBaseColor:{type:String,default:"#fff"},dotsActiveColor:{type:String,default:"green"},arrow:{validator:function(t){return Object(i.a)(t,["hover","always","never"])},default:"hover"},easing:{validator:function(t){return Object(i.a)(t,["linear","ease","ease-in","ease-out","ease-in-out"])},default:"ease"}},data:function(){return{isShowIcon:!1,prefixCls:"vbestui-swiper",timer:null,childLength:0,currentIndex:1,contaiSty:{}}},computed:{swiperStyle:function(){return{width:"".concat(this.width,"px"),height:0!=this.height?"outside"==this.dots?"".concat(this.height+30,"px"):"".concat(this.height,"px"):""}},containerStyle:function(){return{width:"".concat(this.width*(this.childLength+2),"px"),height:"outside"==this.dots?"calc(100% - 30px)":"",transition:"all .6s ".concat(this.easing)}},isShowDots:function(){return 0!=this.childLength&&"none"!=this.dots},isShowToggleIcon:function(){return"always"==this.arrow||"never"!=this.arrow&&this.isShowIcon}},methods:{beginSwiper:function(){var t=this;this.timer=setInterval((function(){t.sufImgHandle()}),this.toggleTime)},clickHandle:function(){this.$emit("click",this.currentIndex)},dotsClickHandle:function(t){"click"==this.trigger&&(this.currentIndex=t,this.setTransform(this.currentIndex),this.$emit("input",this.currentIndex),this.$emit("change",this.currentIndex-1,this.currentIndex))},dotsHoverHandle:function(t){"hover"==this.trigger&&(this.currentIndex=t,this.setTransform(this.currentIndex),this.$emit("input",this.currentIndex),this.$emit("change",this.currentIndex-1,this.currentIndex))},preImgHandle:function(){this.currentIndex--,this.currentIndex<0&&(this.currentIndex=this.childLength),this.setTransform(this.currentIndex),this.$emit("input",this.currentIndex),this.$emit("change",this.currentIndex-1,this.currentIndex)},sufImgHandle:function(){this.currentIndex++,this.currentIndex>this.childLength+1&&(this.currentIndex=1),this.setTransform(this.currentIndex),this.$emit("input",this.currentIndex),this.$emit("change",this.currentIndex-1,this.currentIndex)},mouseEnterHandle:function(){this.isShowIcon=!0,clearInterval(this.timer)},mouseLeaveHandle:function(){this.isShowIcon=!1,this.beginSwiper()},initChildsHandle:function(){var t=this,e=this.$refs.imgContainer,n=e.children;this.childLength=n.length,this.childLength>1&&this.$nextTick().then((function(){var i=n[0].cloneNode(!0),r=n[t.childLength-1].cloneNode(!0);e.appendChild(i),e.insertBefore(r,n[0]),t.currentIndex=1,t.contaiSty=e.style,t.setTransform(t.currentIndex)}))},setTransform:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.6;t==this.childLength+1?(e=0,t=1,this.currentIndex=1):0==t&&(e=0,t=4,this.currentIndex=4),this.contaiSty.transform="translate3d(".concat(-t*this.width,"px, 0, 0)"),this.contaiSty["-webkit-transform"]="translate3d(".concat(-t*this.width,"px), 0, 0"),this.contaiSty["-ms-transform"]="translate3d(".concat(-t*this.width,"px), 0, 0"),this.contaiSty.transition="all ".concat(e,"s ").concat(this.easing)}},mounted:function(){var t=this;this.$nextTick().then((function(){t.initChildsHandle(),t.beginSwiper()}))},watch:{toggleTime:function(){clearInterval(this.timer),this.beginSwiper()}}},s=n(43),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.prefixCls,style:t.swiperStyle,on:{mouseenter:t.mouseEnterHandle,mouseleave:t.mouseLeaveHandle,click:t.clickHandle}},[n("transition",{attrs:{name:"vbestui-swiper"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowToggleIcon,expression:"isShowToggleIcon"}],class:t.prefixCls+"-toggle"},[n("div",{class:t.prefixCls+"-prefix"},[n("div",{staticClass:"vbestui-prefix-item vbestui-iconfont icon-hou",on:{click:t.preImgHandle}},[n("i")])]),t._v(" "),n("div",{class:t.prefixCls+"-suffix"},[n("div",{staticClass:"vbestui-suffix-item vbestui-iconfont icon-qian",on:{click:t.sufImgHandle}},[n("i")])])])]),t._v(" "),n("div",{ref:"imgContainer",class:t.prefixCls+"-container",style:t.containerStyle},[t._t("default")],2),t._v(" "),t.isShowDots?n("div",{class:t.prefixCls+"-dots"},[n("ul",t._l(t.childLength,(function(e,i){return n("li",{key:i,class:[t.prefixCls+"-dots-item",e==t.currentIndex?t.prefixCls+"-dot-active":"",t.circleDots?t.prefixCls+"-dots-item-circle":""],style:{background:e==t.currentIndex?t.dotsActiveColor:t.dotsBaseColor},on:{click:function(n){return t.dotsClickHandle(e)},mouseover:function(n){return t.dotsHoverHandle(e)}}})})),0)]):t._e()],1)}),[],!1,null,null,null);e.default=o.exports}}]);