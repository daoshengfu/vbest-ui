(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{442:function(t,e,i){"use strict";i.r(e);var s={name:"BSwiperItem",inject:{swiper:{defaule:""}},data:function(){return{width:0,prefixCls:"vbestui-swiper-item"}},computed:{swiperItemStyle:function(){return{width:"".concat(this.width,"px")}},styleHandle:function(){var t=this;this.$nextTick().then((function(){t.width=t.swiper.$el.offsetWidth,t.isCard&&(t.width=t.width/2)}))},isCard:function(){return this.swiper.card}},created:function(){this.styleHandle}},n=i(43),r=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:[this.prefixCls,this.isCard?this.prefixCls+"-card":""],style:this.swiperItemStyle},[this._t("default")],2)}),[],!1,null,null,null);e.default=r.exports}}]);