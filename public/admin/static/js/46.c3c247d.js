(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1004:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"table-basic-vue frame-page h-panel"},[t._m(0),t._v(" "),r("div",{staticClass:"h-panel-body"},[r("p",[r("Button",{attrs:{color:"blue",icon:"icon-arrow-left"},on:{click:function(e){return t.back()}}},[t._v("返回列表")])],1),t._v(" "),r("Form",{ref:"form",attrs:{validOnChange:!0,showErrorTip:!0,labelWidth:110,rules:t.rules,model:t.chapter}},[r("FormItem",{attrs:{label:"章节名",prop:"title"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("章节名")]},proxy:!0}])},[t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.chapter.title,expression:"chapter.title"}],attrs:{type:"text"},domProps:{value:t.chapter.title},on:{input:function(e){e.target.composing||t.$set(t.chapter,"title",e.target.value)}}})]),t._v(" "),r("FormItem",{attrs:{label:"升序",prop:"sort"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("升序")]},proxy:!0}])},[t._v(" "),r("Slider",{attrs:{range:{start:1,end:100}},model:{value:t.chapter.sort,callback:function(e){t.$set(t.chapter,"sort",e)},expression:"chapter.sort"}}),t._v(" "),r("p",[t._v(t._s(t.chapter.sort))])],1),t._v(" "),r("FormItem",[r("Button",{attrs:{color:"primary"},on:{click:t.create}},[t._v("保存")])],1)],1)],1)])])},i=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-panel-bar"},[e("span",{staticClass:"h-panel-title"},[this._v("编辑课程章节")])])}];a._withStripped=!0,r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return i}))},329:function(t,e,r){"use strict";r.r(e);var a=r(1004),i=r(490);for(var s in i)"default"!==s&&function(t){r.d(e,t,(function(){return i[t]}))}(s);var n=r(24),o=Object(n.a)(i.default,a.a,a.b,!1,null,null,null);o.options.__file="src/components/course_chapter/edit.vue",e.default=o.exports},489:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=new t({course_id:0,title:"",sort:0});e.default=r}).call(this,r(353))},490:function(t,e,r){"use strict";r.r(e);var a=r(491),i=r.n(a);for(var s in a)"default"!==s&&function(t){r.d(e,t,(function(){return a[t]}))}(s);e.default=i.a},491:function(t,e,r){"use strict";(function(t,a){var i=r(23);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(r(389)),n=i(r(489)),o={data:function(){return{course:s.default.parse({}),chapter:n.default.parse({}),rules:{required:["title","sort"]}}},mounted:function(){this.course.id=this.$route.params.cid,this.chapter.sort=1,this.chapter.id=this.$route.params.id,this.init()},methods:{init:function(){var e=this;t.CourseChapter.Edit({course_id:this.course.id,id:this.chapter.id}).then((function(t){e.chapter=t.data}))},back:function(){this.$router.push({name:"CourseChapter",params:{cid:this.course.id}})},create:function(){var e=this;if(this.$refs.form.valid().result){var r=this.chapter;r.course_id=this.course.id,t.CourseChapter.Update(r).then((function(t){a.$Message.success("添加成功"),e.$router.push({name:"CourseChapter",params:{cid:e.course.id}})}))}}}};e.default=o}).call(this,r(348).default,r(70))}}]);