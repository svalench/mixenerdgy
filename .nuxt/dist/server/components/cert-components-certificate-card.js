exports.ids = [5];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("44880b12", content, true, context)
};

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificateCard_vue_vue_type_style_index_0_id_4515291c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificateCard_vue_vue_type_style_index_0_id_4515291c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificateCard_vue_vue_type_style_index_0_id_4515291c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificateCard_vue_vue_type_style_index_0_id_4515291c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_certificateCard_vue_vue_type_style_index_0_id_4515291c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cardCert[data-v-4515291c]{transition:.3s}.cardCert[data-v-4515291c]:hover{box-shadow:5px 5px 20px #0d82d3}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/certComponents/certificateCard.vue?vue&type=template&id=4515291c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"target":"_blank","href":_vm.certificate.doc}},[_c('b-card',{staticClass:"cardCert",staticStyle:{"margin":"5%"}},[_c('b-card-title',{staticStyle:{"font-size":"20px","min-height":"50px"}},[_vm._v(_vm._s(_vm.certificate.name))]),_vm._v(" "),_c('b-card-text',{staticStyle:{"overflow":"auto"}},[_c('object',{attrs:{"trusted":"yes","data":((_vm.certificate.doc) + "#view=FitH&scrollbar=0&toolbar=0&navpanes=0"),"height":"200","type":"application/pdf"}},[_c('p',[_vm._v("Не удалось загрузить документ.")])])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/certComponents/certificateCard.vue?vue&type=template&id=4515291c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/certComponents/certificateCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var certificateCardvue_type_script_lang_js_ = ({
  name: "certificateCard",
  props: ['certificate']
});
// CONCATENATED MODULE: ./components/certComponents/certificateCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var certComponents_certificateCardvue_type_script_lang_js_ = (certificateCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/certComponents/certificateCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  certComponents_certificateCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4515291c",
  "7e9289d2"
  
)

/* harmony default export */ var certificateCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cert-components-certificate-card.js.map