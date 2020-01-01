(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1016:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{},[o("div",{staticClass:"table-basic-vue frame-page h-panel"},[e._m(0),e._v(" "),o("div",{staticClass:"h-panel-body"},[o("p",[o("Button",{attrs:{color:"blue",icon:"icon-arrow-left"},on:{click:function(t){return e.back()}}},[e._v("返回列表")])],1),e._v(" "),o("Form",{ref:"form",attrs:{validOnChange:!0,showErrorTip:!0,labelWidth:110,rules:e.rules,model:e.course}},[o("FormItem",{attrs:{label:"课程封面",prop:"thumb"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("课程封面")]},proxy:!0}])},[e._v(" "),o("image-upload",{attrs:{name:"课程封面"},model:{value:e.course.thumb,callback:function(t){e.$set(e.course,"thumb",t)},expression:"course.thumb"}})],1),e._v(" "),o("FormItem",{attrs:{label:"课程名",prop:"title"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("课程名")]},proxy:!0}])},[e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.course.title,expression:"course.title"}],attrs:{type:"text"},domProps:{value:e.course.title},on:{input:function(t){t.target.composing||e.$set(e.course,"title",t.target.value)}}})]),e._v(" "),o("FormItem",{attrs:{label:"价格",prop:"charge"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("价格")]},proxy:!0}])},[e._v(" "),o("div",{directives:[{name:"width",rawName:"v-width",value:200,expression:"200"}],staticClass:"h-input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.course.charge,expression:"course.charge"}],attrs:{type:"text"},domProps:{value:e.course.charge},on:{input:function(t){t.target.composing||e.$set(e.course,"charge",t.target.value)}}}),e._v(" "),o("span",{staticClass:"h-input-addon"},[e._v("元")])])]),e._v(" "),o("FormItem",{attrs:{label:"简短介绍",prop:"short_description"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("简短介绍")]},proxy:!0}])},[e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.course.short_description,expression:"course.short_description"}],attrs:{type:"text"},domProps:{value:e.course.short_description},on:{input:function(t){t.target.composing||e.$set(e.course,"short_description",t.target.value)}}})]),e._v(" "),o("FormItem",{attrs:{label:"详细介绍",prop:"description"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("详细介绍")]},proxy:!0}])},[e._v(" "),o("tinymce-editor",{model:{value:e.course.original_desc,callback:function(t){e.$set(e.course,"original_desc",t)},expression:"course.original_desc"}})],1),e._v(" "),o("FormItem",{attrs:{label:"上架时间",prop:"published_at"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("上架时间")]},proxy:!0}])},[e._v(" "),o("DatePicker",{directives:[{name:"width",rawName:"v-width",value:200,expression:"200"}],attrs:{type:"datetime"},model:{value:e.course.published_at,callback:function(t){e.$set(e.course,"published_at",t)},expression:"course.published_at"}})],1),e._v(" "),o("FormItem",{attrs:{label:"是否显示",prop:"is_show"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("是否显示")]},proxy:!0}])},[e._v(" "),o("h-switch",{attrs:{trueValue:1,falseValue:-1},model:{value:e.course.is_show,callback:function(t){e.$set(e.course,"is_show",t)},expression:"course.is_show"}})],1),e._v(" "),o("FormItem",{attrs:{label:"SEO描述",prop:"seo_description"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("SEO描述")]},proxy:!0}])},[e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.course.seo_description,expression:"course.seo_description"}],domProps:{value:e.course.seo_description},on:{input:function(t){t.target.composing||e.$set(e.course,"seo_description",t.target.value)}}})]),e._v(" "),o("FormItem",{attrs:{label:"SEO关键字",prop:"seo_keywords"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("SEO关键字")]},proxy:!0}])},[e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.course.seo_keywords,expression:"course.seo_keywords"}],domProps:{value:e.course.seo_keywords},on:{input:function(t){t.target.composing||e.$set(e.course,"seo_keywords",t.target.value)}}})]),e._v(" "),o("FormItem",[o("Button",{attrs:{color:"primary"},on:{click:e.create}},[e._v("添加")])],1)],1)],1)])])},s=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"h-panel-bar"},[t("span",{staticClass:"h-panel-title"},[this._v("添加课程")])])}];r._withStripped=!0,o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return s}))},322:function(e,t,o){"use strict";o.r(t);var r=o(1016),s=o(475);for(var n in s)"default"!==n&&function(e){o.d(t,e,(function(){return s[e]}))}(n);var a=o(24),i=Object(a.a)(s.default,r.a,r.b,!1,null,null,null);i.options.__file="src/components/course/create.vue",t.default=i.exports},355:function(e,t,o){"use strict";o.r(t);var r=o(356),s=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=s.a},356:function(e,t,o){"use strict";(function(e){var r=o(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(o(388)),n={props:{value:{type:String,default:""}},components:{tinymce:s.default},data:function(){return{data:this.value,config:{height:"400px",language:"zh_CN",language_url:window.location.protocol+"//"+window.location.host+window.location.pathname+"/dist/tinymce/zh_CN.js",automatic_uploads:!0,images_upload_handler:function(t,o,r){var s,n;(s=new XMLHttpRequest).withCredentials=!1,s.open("POST","/backend/api/v1/upload/image/tinymce"),s.setRequestHeader("Authorization","Bearer "+e.getLocal("token")),s.onload=function(){var e;200===s.status?(e=JSON.parse(s.responseText))&&"string"==typeof e.location?o(e.location):r("Invalid JSON: "+s.responseText):r("HTTP Error: "+s.status)},(n=new FormData).append("file",t.blob(),t.filename()),s.send(n)}}}},watch:{value:function(e,t){this.data=e},data:function(e,t){this.$emit("input",e)}}};t.default=n}).call(this,o(49).default)},366:function(e,t,o){"use strict";o.r(t);var r=o(369),s=o(355);for(var n in s)"default"!==n&&function(e){o.d(t,e,(function(){return s[e]}))}(n);var a=o(24),i=Object(a.a)(s.default,r.a,r.b,!1,null,null,null);i.options.__file="src/components/common/tinymce.vue",t.default=i.exports},369:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("tinymce",{attrs:{id:"d1",other_options:e.config},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})},s=[];r._withStripped=!0,o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return s}))},475:function(e,t,o){"use strict";o.r(t);var r=o(476),s=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t.default=s.a},476:function(e,t,o){"use strict";(function(e,r){var s=o(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(o(366)),a=s(o(389)),i={components:{TinymceEditor:n.default},data:function(){return{course:a.default.parse({}),rules:{required:["thumb","title","charge","short_description","published_at","is_show","seo_description","seo_keywords"]}}},mounted:function(){this.init()},methods:{init:function(){this.course.is_show=0},back:function(){this.$router.push({name:"Course"})},create:function(){var t=this;this.$refs.form.valid().result&&(this.course.render_desc=this.course.original_desc,e.Course.Create(this.course).then((function(e){r.$Message.success("添加成功"),t.$router.push({name:"Course"})})))}}};t.default=i}).call(this,o(348).default,o(70))}}]);