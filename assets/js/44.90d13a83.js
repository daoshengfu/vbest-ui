(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{367:function(t,e,s){},437:function(t,e,s){"use strict";var i=s(367);s.n(i).a},473:function(t,e,s){"use strict";s.r(e);var i={name:"Modal",props:{title:{type:String,default:"对话框标题"},content:{type:String,default:"对话框内容"},show:{type:Boolean,default:!1},showMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!1},width:{type:String,default:""},height:{type:String,default:""},marginTop:{type:String,default:""},zIndex:{type:String,default:""}},methods:{modalClose:function(){this.$emit("update:show",!1),this.$emit("modalClose")},maskClick:function(){this.maskClosable&&(this.$emit("update:show",!1),this.$emit("maskClick"))},ok:function(){this.$emit("update:show",!1),this.$emit("ok")},cancel:function(){this.$emit("update:show",!1),this.$emit("cancel")}}},a=(s(437),s(43)),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"vbestui-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"vbestui-modal",style:{zIndex:t.zIndex}},[t.showMask?s("div",{staticClass:"vbestui-mask",on:{click:function(e){return t.maskClick()}}}):t._e(),t._v(" "),s("div",{staticClass:"vbestui-content",style:{width:t.width,height:t.height,marginTop:t.marginTop}},[s("div",{staticClass:"vbestui-close",on:{click:function(e){return t.modalClose()}}},[t._t("close",[s("b-button",{attrs:{type:"text",width:"20px",height:"20px"}},[s("div",{staticClass:"iconfont icon-x"})])])],2),t._v(" "),s("div",{staticClass:"vbestui-top"},[t._t("header",[s("h3",[t._v(t._s(t.title))])])],2),t._v(" "),s("div",{staticClass:"vbestui-context"},[t._t("default",[t._v(t._s(t.content))])],2),t._v(" "),s("div",{staticClass:"vbestui-footer"},[t._t("footer",[s("b-button",{attrs:{type:"primary",size:"small"},on:{click:t.ok}},[t._v("确定")]),t._v(" "),s("b-button",{attrs:{type:"default",size:"small"},on:{click:t.cancel}},[t._v("取消")])])],2)])])])}),[],!1,null,"3463747b",null);e.default=o.exports}}]);