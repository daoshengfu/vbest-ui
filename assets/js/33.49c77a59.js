(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{344:function(t,o,s){},394:function(t,o,s){"use strict";var a=s(344);s.n(a).a},404:function(t,o,s){"use strict";s.r(o);var a={name:"GoupTag",props:{line:{type:String,default:"1"}},data:function(){return{tagList:["标签1","标签2","标签3"],value:"",isShow:!1,isBtn:!0}},methods:{handleClick:function(){var t=this;this.isShow=!0,this.isBtn=!1,this.$nextTick((function(){t.$refs.input.focus()}))},handleEnter:function(){var t=this.value;this.value="",this.isShow=!1,this.isBtn=!0,this.tagList.push(t)}}},r=(s(394),s(43)),e=Object(r.a)(a,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"tag"},["1"==t.line?s("div",{staticClass:"one"},[s("b-tag",[t._v("默认标签")]),t._v(" "),s("b-tag",{attrs:{type:"dot"}},[t._v("dot 标签")]),t._v(" "),s("b-tag",{attrs:{closable:""}},[t._v("可关闭标签")])],1):t._e(),t._v(" "),"2"==t.line?s("div",{staticClass:"one"},[s("div",{staticClass:"item"},[t._m(0),t._v(" "),s("b-tag",{attrs:{type:"dot",color:"info"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{type:"dot",color:"success"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{type:"dot",color:"warning"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{type:"dot",color:"error"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{type:"dot",color:"joker"}},[t._v("joker")])],1),t._v(" "),s("div",{staticClass:"item"},[s("b-tag",{attrs:{type:"dot",closable:"",color:"info"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"",color:"success"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"",color:"warning"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"",color:"error"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"",color:"joker"}},[t._v("joker")])],1),t._v(" "),s("div",{staticClass:"item"},[s("b-tag",{attrs:{type:"dot",closable:"","close-border":"",color:"info"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"","close-border":"",color:"success"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"","close-border":"",color:"warning"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"","close-border":"",color:"error"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"","close-border":"",color:"joker"}},[t._v("joker")])],1),t._v(" "),s("div",{staticClass:"item"},[t._m(1),t._v(" "),s("b-tag",{attrs:{color:"info"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{color:"success"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{color:"warning"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{color:"error"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{color:"joker"}},[t._v("joker")])],1),t._v(" "),s("div",{staticClass:"item"},[s("b-tag",{attrs:{closable:"",color:"info"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{closable:"",color:"success"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{closable:"",color:"warning"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{closable:"",color:"error"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{closable:"",color:"joker"}},[t._v("joker")])],1),t._v(" "),s("div",{staticClass:"item"},[s("b-tag",{attrs:{closable:"","close-border":"",color:"info"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{closable:"","close-border":"",color:"success"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{closable:"","close-border":"",color:"warning"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{closable:"","close-border":"",color:"error"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{closable:"","close-border":"",color:"joker"}},[t._v("joker")])],1),t._v(" "),s("div",{staticClass:"item"},[t._m(2),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"info"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"success"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"warning"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"error"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"joker"}},[t._v("joker")])],1),t._v(" "),s("div",{staticClass:"item"},[s("b-tag",{attrs:{plain:"",closable:"","close-border":"",color:"info"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"","close-border":"",color:"success"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"","close-border":"",color:"warning"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"","close-border":"",color:"error"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"","close-border":"",color:"joker"}},[t._v("joker")])],1)]):t._e(),t._v(" "),"3"==t.line?s("div",{staticClass:"three"},[s("b-tag",[t._v("默认标签")]),t._v(" "),s("b-tag",{attrs:{size:"medium"}},[t._v("中号标签")]),t._v(" "),s("b-tag",{attrs:{size:"large"}},[t._v("大号标签")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("b-tag",{attrs:{type:"dot"}},[t._v("默认标签")]),t._v(" "),s("b-tag",{attrs:{type:"dot",size:"medium"}},[t._v("中号 标签")]),t._v(" "),s("b-tag",{attrs:{type:"dot",size:"large"}},[t._v("大号标签")])],1):t._e(),t._v(" "),"4"==t.line?s("div",{staticClass:"four"},[t._l(t.tagList,(function(o,a){return s("b-tag",{key:a,staticClass:"tag-item",attrs:{closable:""}},[t._v(t._s(o))])})),t._v(" "),s("b-input",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"input",on:{keyupEnter:t.handleEnter},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}}),t._v(" "),s("b-button",{directives:[{name:"show",rawName:"v-show",value:t.isBtn,expression:"isBtn"}],staticClass:"tag-button",attrs:{type:"success",size:"small",height:"28px"},on:{click:t.handleClick}},[t._v("+ new Tag")])],2):t._e(),t._v(" "),"5"==t.line?s("div",{staticClass:"six"},[s("div",{staticClass:"item"},[s("b-tag",{attrs:{closable:"",color:"purple"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{closable:"",color:"cyan"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{closable:"",color:"#ffb0da"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{closable:"",color:"#2f8df7"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{closable:"",color:"#393a3f"}},[t._v("error")])],1),t._v(" "),s("div",{staticClass:"item"},[s("b-tag",{attrs:{plain:"",closable:"",color:"purple"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"cyan"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"#ffb0da"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"#2f8df7"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{plain:"",closable:"",color:"#393a3f"}},[t._v("error")])],1),t._v(" "),s("div",{staticClass:"item"},[s("b-tag",{attrs:{type:"dot",closable:"",color:"purple"}},[t._v("info")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"",color:"cyan"}},[t._v("success")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"",color:"#ffb0da"}},[t._v("warning")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"",color:"#2f8df7"}},[t._v("error")]),t._v(" "),s("b-tag",{attrs:{type:"dot",closable:"",color:"#393a3f"}},[t._v("error")])],1)]):t._e()])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("h4",[o("i",[this._v("dot类型")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("h4",[o("i",[this._v("border类型")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("h4",[o("i",[this._v("plain可关闭")])])}],!1,null,"498bf942",null);o.default=e.exports}}]);