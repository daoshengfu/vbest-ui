(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{358:function(t,e,n){},428:function(t,e,n){"use strict";var i=n(358);n.n(i).a},452:function(t,e,n){"use strict";n.r(e);var i={name:"GroupNotice",props:{line:{type:String,default:"1"}},methods:{open1:function(){this.$refs.notice.open({title:"我是默认信息标题",desc:"我是默认内容，我是默认内容，我是默认内容，我是默认内容，我是默认内容，我是默认内容，"})},openTitle:function(){this.$refs.notice2.open({title:"我是通知标题"})},openDesc:function(){this.$refs.notice2.open({desc:"我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，"})},infoClick:function(){this.$refs.notice.info({title:"info标题",desc:"info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦,info啦啦啦啦啦啦啦"})},successClick:function(){this.$refs.notice.success({title:"success标题",desc:"success成功成功哇哇哇哇哇哇哇,success成功成功哇哇哇哇哇哇哇,success成功成功哇哇哇哇哇哇哇,success成功成功哇哇哇哇哇哇哇,success成功成功哇哇哇哇哇哇哇"})},warningClick:function(){this.$refs.notice.warning({title:"warning标题",desc:"warning警告警告靖哥哥,warning警告警告靖哥哥,warning警告警告靖哥哥,warning警告警告靖哥哥,warning警告警告靖哥哥,warning警告警告靖哥哥"})},errorClick:function(){this.$refs.notice.error({title:"error标题",desc:"error失败啦失败啦,error失败啦失败啦,error失败啦失败啦,error失败啦失败啦,error失败啦失败啦,error失败啦失败啦,error失败啦失败啦"})},openTime:function(){this.$refs.notice.open({duration:10,title:"这是一个10s通知",desc:"这是一个10s通知,这是一个10s通知,这是一个10s通知,这是一个10s通知,这是一个10s通知,这是一个10s通知,这是一个10s通知"})}}},s=(n(428),n(43)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("notice",{ref:"notice"}),t._v(" "),"1"==t.line?n("div",{staticClass:"one item"},[n("b-button",{attrs:{type:"primary"},on:{click:t.open1}},[t._v("默认通知")])],1):t._e(),t._v(" "),"2"==t.line?n("div",{staticClass:"two item"},[n("notice",{ref:"notice2"}),t._v(" "),n("b-button",{attrs:{type:"primary",round:""},on:{click:t.openTitle}},[t._v("仅标题")]),t._v(" "),n("b-button",{attrs:{type:"primary",round:""},on:{click:t.openDesc}},[t._v("仅内容")])],1):t._e(),t._v(" "),"3"==t.line?n("div",{staticClass:"tow item"},[n("b-button",{attrs:{type:"info"},on:{click:t.infoClick}},[t._v("信息通知")]),t._v(" "),n("b-button",{attrs:{type:"success"},on:{click:t.successClick}},[t._v("成功通知")]),t._v(" "),n("b-button",{attrs:{type:"warning"},on:{click:t.warningClick}},[t._v("警告通知")]),t._v(" "),n("b-button",{attrs:{type:"error"},on:{click:t.errorClick}},[t._v("失败通知")])],1):t._e(),t._v(" "),"4"==t.line?n("div",{staticClass:"four item"},[n("b-button",{attrs:{type:"info"},on:{click:t.openTime}},[t._v("打开一个10sNotice")])],1):t._e()],1)}),[],!1,null,"53eb5af1",null);e.default=o.exports}}]);