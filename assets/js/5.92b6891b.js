(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{303:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},304:function(t,e,s){"use strict";function i(t,e){for(var s=0,i=e.length;s<i;s++)if(t==e[s])return!0;return!1}function l(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return l}))},305:function(t,e,s){var i=s(24),l="["+s(303)+"]",r=RegExp("^"+l+l+"*"),o=RegExp(l+l+"*$"),n=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:n(1),end:n(2),trim:n(3)}},306:function(t,e,s){var i=s(5),l=s(94);t.exports=function(t,e,s){var r,o;return l&&"function"==typeof(r=e.constructor)&&r!==s&&i(o=r.prototype)&&o!==s.prototype&&l(t,o),t}},307:function(t,e,s){"use strict";var i=s(6),l=s(4),r=s(93),o=s(11),n=s(7),a=s(18),h=s(306),c=s(44),u=s(2),f=s(29),d=s(66).f,p=s(25).f,g=s(9).f,m=s(305).trim,b=l.Number,v=b.prototype,y="Number"==a(f(v)),S=function(t){var e,s,i,l,r,o,n,a,h=c(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=m(h)).charCodeAt(0))||45===e){if(88===(s=h.charCodeAt(2))||120===s)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:i=2,l=49;break;case 79:case 111:i=8,l=55;break;default:return+h}for(o=(r=h.slice(2)).length,n=0;n<o;n++)if((a=r.charCodeAt(n))<48||a>l)return NaN;return parseInt(r,i)}return+h};if(r("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,D=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof D&&(y?u((function(){v.valueOf.call(s)})):"Number"!=a(s))?h(new b(S(e)),s,D):S(e)},C=i?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Y=0;C.length>Y;Y++)n(b,w=C[Y])&&!n(D,w)&&g(D,w,p(b,w));D.prototype=v,v.constructor=D,o(l,"Number",D)}},309:function(t,e,s){var i=s(1),l=s(4),r=s(96),o=[].slice,n=function(t){return function(e,s){var i=arguments.length>2,l=i?o.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,l)}:e,s)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:n(l.setTimeout),setInterval:n(l.setInterval)})},384:function(t,e,s){s(1)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},412:function(t,e,s){"use strict";s.r(e);s(170),s(172),s(307),s(309);var i=s(304);s(384),s(99);var l={name:"BScroll",props:{height:{type:String,default:""},theme:{validator:function(t){return Object(i.a)(t,["light","dark"])},default:"light"},speed:{type:Number,default:30},pullingDelay:{type:Number,default:200},pullingDistance:{type:Number,default:50},isDisable:{type:Boolean,default:!1},disableWheel:{type:Boolean,default:!1},disableBar:{type:Boolean,default:!1},round:{type:Boolean,default:!1},trackColor:{type:String,default:""},trackActiveColor:{type:String,default:""},thumbColor:{type:String,default:""},thumbActiveColor:{type:String,default:""}},data:function(){return{prefixCls:"vbestui-scroll",barStyle:{},loadStyle:{},contentStyle:{},scrollStyle:{},loadHeight:0,isScroll:!1,scrollY:0,loadDistanceY:0,scrollPercent:0,offsetHeight:0,wheelDeltaY:0,timer:null}},computed:{scrollClass:function(){return[this.prefixCls]},scrollStyleCom:function(){return{height:this.height}},barClass:function(){return["".concat(this.prefixCls+"-bar"),"".concat(this.prefixCls+"-bar-"+this.theme)]},barStyleCom:function(){return{background:this.trackColor}},loadClass:function(){return["".concat(this.prefixCls+"-bar-load"),"".concat(this.prefixCls+"-bar-load-"+this.theme),this.isDisable?"".concat(this.prefixCls+"-bar-load-disable"):""]},loadStyleCom:function(){return{top:this.getLoadOffset+"px",height:this.loadHeight+"px",background:this.thumbColor,borderRadius:this.round?"8px":""}},getLoadOffset:function(){this.scrollPercent=Math.abs(this.wheelDeltaY)/this.offsetHeight;var t=this.scrollPercent*this.scrollY;return t=(t=t<0?0:t)>this.scrollY?this.scrollY:t},isSetBar:function(){return""!=this.trackColor&&""!=this.trackActiveColor&&""!=this.thumbColor&&this.thumbActiveColor},isScrollable:function(){var t=this.offsetHeight>0;return t},getPullingDistance:function(){return 0!=this.offsetHeight&&0!=this.wheelDeltaY&&this.offsetHeight-Math.abs(this.wheelDeltaY)}},methods:{scrollTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.isDisable||(this.wheelDeltaY=t,s&&this.scrollRange(),this.scrollPercent=this.wheelDeltaY/this.offsetHeight,this.setTransform(this.contentStyle,0,this.wheelDeltaY,e))},refresh:function(){var t=this;this.$nextTick((function(){t.$refs.content&&(t.offsetHeight=t.$refs.content.offsetHeight-t.$refs.scroll.offsetHeight),t.isScrollable&&t.$refs.scroll&&(t.loadHeight=t.$refs.scroll.offsetHeight/t.$refs.content.offsetHeight*t.$refs.scroll.offsetHeight,t.loadHeight=t.loadHeight<25?25:t.loadHeight),t.scrollY=t.$refs.scroll&&t.$refs.scroll.offsetHeight-t.loadHeight}))},handleWheel:function(t){if(this.isScrollable&&!this.disableWheel&&!this.isDisable){t=t||window.event;var e=0;-1!==window.navigator.userAgent.indexOf("Firefox")?e=-50*(t.wheelDeltaY||t.deltaY):e+=t.wheelDeltaY||t.deltaY,e>0?this.wheelDeltaY+=this.speed:this.wheelDeltaY-=this.speed,this.scrollRange(),this.scrollPercent=Math.abs(this.wheelDeltaY/this.offsetHeight),this.setTransform(this.contentStyle,0,this.wheelDeltaY,0),Object(i.b)(),this.$emit("wheel",this.wheelDeltaY),this.$emit("scroll",this.wheelDeltaY)}},scrollRange:function(){this.wheelDeltaY=this.wheelDeltaY>0?0:this.wheelDeltaY,this.wheelDeltaY=this.wheelDeltaY<-this.offsetHeight?-this.offsetHeight:this.wheelDeltaY},handleLoadMouseDown:function(t){if(!this.isDisable){document.addEventListener("mousemove",this.handleLoadMouseMove),document.addEventListener("mouseup",this.handleLoadMouseUp),this.isScroll=!0,this.enterBarStyle();var e=this.$refs.load.getBoundingClientRect().y;this.loadDistanceY=t.clientY-e,document.body.style.userSelect="none",this.$emit("moveStart",this.wheelDeltaY)}},handleLoadMouseMove:function(t){var e=this.$refs.scroll.getBoundingClientRect().y,s=t.clientY-e-this.loadDistanceY;s=(s=s>this.scrollY?this.scrollY:s)<0?0:s,this.scrollPercent=Math.abs(s/this.scrollY),this.wheelDeltaY=-this.scrollPercent*this.offsetHeight,this.setTransform(this.contentStyle,0,-this.scrollPercent*this.offsetHeight,0),this.loadStyle.top=s+"px",this.$emit("moving",this.wheelDeltaY),this.$emit("scroll",this.wheelDeltaY)},handleLoadMouseUp:function(t){this.isScroll=!1,this.leaveBarStyle(),document.removeEventListener("mousemove",this.handleLoadMouseMove),document.removeEventListener("mouseup",this.handleLoadMouseUp),document.body.style.userSelect="initial",this.$emit("moveEnd",this.wheelDeltaY)},handleRefresh:function(){!this.isDisable&&this.isScrollable&&this.refresh()},handleBarMouseEnter:function(){this.enterBarStyle()},handleBarMouseLeave:function(){this.isScroll||this.leaveBarStyle()},setTransform:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;t.transform="translate(".concat(e,"px, ").concat(s,"px)"),t["-ms-transform"]="translate(".concat(e,"px, ").concat(s,"px)"),t["-moz-transform"]="translate(".concat(e,"px, ").concat(s,"px)"),t["-webkit-transform"]="translate(".concat(e,"px, ").concat(s,"px)"),t["-o-transform"]="translate(".concat(e,"px, ").concat(s,"px)"),t.transition="all ".concat(i,"s")},initScroll:function(){var t=this;this.$nextTick().then((function(){t.barStyle=t.$refs.bar&&t.$refs.bar.style,t.loadStyle=t.$refs.load&&t.$refs.load.style,t.contentStyle=t.$refs.content&&t.$refs.content.style,t.scrollStyle=t.$refs.scroll&&t.$refs.scroll.style})),this.refresh()},enterBarStyle:function(){this.isDisable||("light"==this.theme?this.setBarStyle("14px","var(--bg-color)","#a8a8a8"):this.setBarStyle("14px","#1e1e1e","#4f4f4f"),this.isSetBar&&!this.isSetBar||this.setBarStyle("14px",this.trackActiveColor||this.trackColor,this.thumbActiveColor||this.thumbColor),this.loadStyle.borderRadius=this.round?"14px":"")},leaveBarStyle:function(){"light"==this.theme?this.setBarStyle("8px","transparent","var(--bg-color)"):this.setBarStyle("8px","#1e1e1e","#4f4f4f"),this.isSetBar&&!this.isSetBar||this.setBarStyle("8px",this.trackColor,this.thumbColor),this.loadStyle.borderRadius=this.round?"8px":""},setBarStyle:function(t,e,s){this.barStyle.width=t,this.barStyle.backgroundColor=e,this.loadStyle.backgroundColor=s}},created:function(){this.initScroll()},watch:{getPullingDistance:function(){var t=this;Math.abs(this.wheelDeltaY)<this.pullingDistance?(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.$emit("pullingDown")}),this.pullingDelay)):this.getPullingDistance<this.pullingDistance&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.$emit("pullingUp"),t.refresh()}),this.pullingDelay))},offsetHeight:function(){this.refresh()}}},r=s(43),o=Object(r.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"scroll",class:t.scrollClass,style:t.scrollStyleCom,on:{wheel:t.handleWheel,mouseenter:t.handleRefresh}},[s("div",{ref:"content",class:t.prefixCls+"-content"},[t._t("default")],2),t._v(" "),t.disableBar?t._e():s("div",{directives:[{name:"show",rawName:"v-show",value:t.isScrollable,expression:"isScrollable"}],ref:"bar",class:t.barClass,style:t.barStyleCom,on:{mouseenter:t.handleBarMouseEnter,mouseleave:t.handleBarMouseLeave}},[s("div",{ref:"load",class:t.loadClass,style:t.loadStyleCom,on:{mousedown:t.handleLoadMouseDown}})])])}),[],!1,null,null,null);e.default=o.exports}}]);