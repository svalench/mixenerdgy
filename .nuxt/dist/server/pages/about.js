exports.ids = [9];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7fb50380", content, true, context)
};

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5ff76c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5ff76c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5ff76c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5ff76c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5ff76c28_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".otzyvy[data-v-5ff76c28]{margin-right:20px;cursor:pointer}.otzyvy[data-v-5ff76c28]:hover{box-shadow:10px 10px 25px rgba(0,0,0,.1)}otzyvy[data-v-5ff76c28]::-webkit-scrollbar{width:10px;background-color:#6e97dc}otzyvy[data-v-5ff76c28]::-webkit-scrollbar-thumb{border-radius:10px;background-color:#0e8ce4}otzyvy[data-v-5ff76c28]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.2);border-radius:10px;background-color:#b7def3}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=5ff76c28&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\" style=\"padding-top:30px; \" data-v-5ff76c28>","</div>",[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("Главная")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("О нас")])],1)],1),_vm._ssrNode(" <div class=\"row\" style=\"padding-top:30px;\" data-v-5ff76c28><span style=\"font-size: 18px;\" data-v-5ff76c28><span style=\"font-size: 20px; color: #0d82d3;\" data-v-5ff76c28>ООО «МиксЭнерджи»</span> основано в 2019 году. Основным направлением нашей деятельности является оптовая поставка\n    инженерного и сантехнического оборудования. В своей работе с клиентами и поставщиками мы нацелены на долгосрочные\n    взаимовыгодные партнерские отношения, основанные на добросовестном выполнении всех условий договора, взаимном\n    доверии и поддержке. Мы поставляем только качественные товары лучших мировых брендов. У нас имеются товары в\n    ценовых сегментах от эконома до премиума.\n    </span> <div style=\"padding: 5% 0 5% 0;\" data-v-5ff76c28><h3 style=\"font-size: 20px;color: #0d82d3;\" data-v-5ff76c28>\n  Преимущества сотрудничества с нами:\n  </h3> <ul style=\"font-size: 18px\" data-v-5ff76c28><li data-v-5ff76c28>- только качественные товары</li> <li data-v-5ff76c28>- выгодная цена</li> <li data-v-5ff76c28>- гибкая система оплаты</li> <li data-v-5ff76c28>- широкий ассортимент продукции</li> <li data-v-5ff76c28>- доставка в короткий срок</li> <li data-v-5ff76c28>- наличие сопроводительных документов</li> <li data-v-5ff76c28>- офис и склад в одном месте</li></ul></div></div> <div data-v-5ff76c28><h3 style=\"font-size: 20px;color: #0d82d3;\" data-v-5ff76c28>\n  Отзывы о нас:\n  </h3> <div style=\"overflow: auto; display: flex;\" data-v-5ff76c28>"+(_vm._ssrList((5),function(i){return ("<div class=\"col-3 otzyvy\" data-v-5ff76c28><a"+(_vm._ssrAttr("href",("/docs/otzyvy/" + i + ".pdf")))+" target=\"_blank\" data-v-5ff76c28>Увеличить</a> <object trusted=\"yes\" height=\"400px\" type=\"application/pdf\""+(_vm._ssrAttr("data",("/docs/otzyvy/" + i + ".pdf?#view=FitH&scrollbar=0&toolbar=0&navpanes=0")))+" data-v-5ff76c28><p data-v-5ff76c28>Insert your error message here, if the PDF cannot be displayed.</p></object></div>")}))+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=5ff76c28&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: "about"
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(127)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ff76c28",
  "51ebc17e"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map