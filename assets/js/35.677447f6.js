(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{303:function(t,i,e){"use strict";function n(t,i){for(var e=0,n=i.length;e<n;e++)if(t==i[e])return!0;return!1}function s(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return s}))},307:function(t,i,e){var n=e(0),s=e(3),o=e(94),c=[].slice,a=function(t){return function(i,e){var n=arguments.length>2,s=n?c.call(arguments,2):void 0;return t(n?function(){("function"==typeof i?i:Function(i)).apply(this,s)}:i,e)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:a(s.setTimeout),setInterval:a(s.setInterval)})},429:function(t,i,e){"use strict";e.r(i);e(307);var n=e(303),s={name:"Notice",data:function(){return{prefixCls:"vbestui-notice",isShow:!1,icon:!1,duration:4,type:"default",title:"",desc:""}},methods:{open:function(t){this.setData(t),this.toggle()},info:function(t){var i=this.setTypeData("info",t);this.setData(i),this.toggle()},success:function(t){var i=this.setTypeData("success",t);this.setData(i),this.toggle()},warning:function(t){var i=this.setTypeData("warning",t);this.setData(i),this.toggle()},error:function(t){var i=this.setTypeData("error",t);this.setData(i),this.toggle()},noticeClose:function(t){this.isShow=!1,t instanceof Function&&t()},setTypeData:function(t,i){return{type:t,title:i.title,desc:i.desc,duration:i.duration,icon:!0}},setData:function(t){this.isShow=!1,this.icon=!1,this.duration=4,this.type="default",this.title="",this.desc="";var i=t.icon,e=t.duration,s=t.type,o=t.title,c=t.desc;"boolean"==typeof i&&(this.icon=i),"string"!=typeof e&&"number"!=typeof e||(this.duration=1*e),"string"==typeof s&&Object(n.a)(s,["success","info","warning","error"])&&(this.type=s),"string"==typeof o&&(this.title=o),"string"==typeof c&&(this.desc=c)},toggle:function(){var t=this;this.isShow=!0,setTimeout((function(){t.isShow=!1}),1e3*this.duration)}}},o=e(42),c=Object(o.a)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"vbestui-notice"}},[t.isShow?e("div",{staticClass:"vbestui-notice"},[e("div",{staticClass:"vbestui-notice-left",class:["vbestui-notice-left-bac-"+t.type]}),t._v(" "),e("div",{staticClass:"vbestui-notice-container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.icon,expression:"icon"}],staticClass:"vbestui-notice-icon"},[e("i",{staticClass:"vbestui-notice-icon-size",class:["vbestui-iconfont icon-"+t.type+"-m ","vbestui-notice-icon-"+t.type]})]),t._v(" "),e("div",{staticClass:"vbestui-notice-close",on:{click:t.noticeClose}},[e("b-button",{staticClass:"vbestui-iconfont icon-x",attrs:{type:"text",width:"20px",height:"20px"}})],1),t._v(" "),e("div",{staticClass:"vbestui-notice-container-content",class:{"vbestui-notice-container-content-ispadding":!t.icon}},[e("div",{staticClass:"vbestui-notice-article-title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"vbestui-notice-article-p"},[t._v(t._s(t.desc))])])])]):t._e()])}),[],!1,null,null,null);i.default=c.exports}}]);