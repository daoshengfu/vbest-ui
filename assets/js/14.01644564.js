(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{303:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},305:function(e,t,r){var i=r(24),n="["+r(303)+"]",o=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),s=function(e){return function(t){var r=String(i(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},306:function(e,t,r){var i=r(5),n=r(94);e.exports=function(e,t,r){var o,c;return n&&"function"==typeof(o=t.constructor)&&o!==r&&i(c=o.prototype)&&c!==r.prototype&&n(e,c),e}},307:function(e,t,r){"use strict";var i=r(6),n=r(4),o=r(93),c=r(11),s=r(7),a=r(18),u=r(306),l=r(44),b=r(2),d=r(29),h=r(66).f,p=r(25).f,f=r(9).f,v=r(305).trim,m=n.Number,k=m.prototype,x="Number"==a(d(k)),N=function(e){var t,r,i,n,o,c,s,a,u=l(e,!1);if("string"==typeof u&&u.length>2)if(43===(t=(u=v(u)).charCodeAt(0))||45===t){if(88===(r=u.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(c=(o=u.slice(2)).length,s=0;s<c;s++)if((a=o.charCodeAt(s))<48||a>n)return NaN;return parseInt(o,i)}return+u};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var g,I=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof I&&(x?b((function(){k.valueOf.call(r)})):"Number"!=a(r))?u(new m(N(t)),r,I):N(t)},_=i?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;_.length>C;C++)s(m,g=_[C])&&!s(I,g)&&f(I,g,p(m,g));I.prototype=k,k.constructor=I,c(n,"Number",I)}},466:function(e,t,r){"use strict";r.r(t);r(173),r(307),r(174),r(102);var i=r(62),n={name:"BCheckbox",data:function(){return{prefixCls:"vbestui-checkbox"}},props:{label:{type:[Number,String,Boolean],default:""},name:{type:String,default:""},value:null,border:{type:Boolean,default:!1},button:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},inject:{checkboxGroup:{default:""}},computed:{model:{get:function(){return this.isGroup?this.checkboxGroup.value:this.value},set:function(e){this.isGroup?this.checkboxGroup.$emit("input",e):this.$emit("input",e)}},isGroup:function(){return!!this.checkboxGroup},isCheck:function(){return this.checkboxGroup?this.model.includes(this.label):this.model},isBorder:function(){return this.checkboxGroup.border||this.border},isButton:function(){return this.checkboxGroup.button||this.button},isDisabled:function(){return this.checkboxGroup.disabled||this.disabled}},methods:{handleChange:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:e.isGroup||e.$emit("change",e.value);case 3:case"end":return t.stop()}}),t)})))()}}},o=r(43),c=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{class:[e.prefixCls,e.isDisabled?"vbestui-checkbox-disabled":"",e.isDisabled&&(e.isBorder||e.isButton)?"vbestui-checkbox-border-disabled":"",e.isBorder||e.isButton?e.isCheck?"vbestui-checkbox-border-action":"vbestui-checkbox-border":""]},[e.isButton?e._e():r("span",{staticClass:"vbestui-checkbox-check",class:[e.isCheck?e.isDisabled?"vbestui-checkbox-check-action-disabled":"vbestui-checkbox-check-action":""]},[e.isCheck?r("i",{staticClass:"vbestui-iconfont icon-dui vbestui-checkbox-icon"}):e._e()]),e._v(" "),r("span",{staticClass:"vbestui-checkbox-label"},[e._t("default",[e._v(e._s(e.label))])],2),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"vbestui-checkbox-input",attrs:{type:"checkbox",name:e.name,disabled:e.isDisabled},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e.model},on:{change:[function(t){var r=e.model,i=t.target,n=!!i.checked;if(Array.isArray(r)){var o=e.label,c=e._i(r,o);i.checked?c<0&&(e.model=r.concat([o])):c>-1&&(e.model=r.slice(0,c).concat(r.slice(c+1)))}else e.model=n},e.handleChange]}})])}),[],!1,null,null,null);t.default=c.exports}}]);