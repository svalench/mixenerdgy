exports.ids = [14];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("229925af", content, true, context)
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6cd3a82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6cd3a82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6cd3a82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6cd3a82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_6cd3a82c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".text-recivitor[data-v-6cd3a82c]{text-align:left;font-size:14px;color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=6cd3a82c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\" style=\"padding-top:30px; \" data-v-6cd3a82c>","</div>",[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("Главная")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("Контакты")])],1)],1),_vm._ssrNode(" <div class=\"row\" style=\"padding-top:30px;\" data-v-6cd3a82c><div class=\"col-lg-12  col-xs-12\" data-v-6cd3a82c><div class=\"row\" data-v-6cd3a82c><h4 style=\"font-size: 28px; color: #0d82d3; padding: 10px;\" data-v-6cd3a82c>Реквизиты: </h4><br data-v-6cd3a82c></div> <div class=\"row\" data-v-6cd3a82c><h4 class=\"text-recivitor\" data-v-6cd3a82c>Наименование: ООО &quot;Миксэнерджи&quot;</h4></div> <div class=\"row\" data-v-6cd3a82c><h4 class=\"text-recivitor\" data-v-6cd3a82c>Юр.адрес/почтовый адрес: 220007, г.Минск, ул. Артиллеристов, дом № 8, корпус 3, офис 17</h4></div> <div class=\"row\" data-v-6cd3a82c><h4 class=\"text-recivitor\" data-v-6cd3a82c>УНП:193243351</h4></div> <div class=\"row\" data-v-6cd3a82c><h4 class=\"text-recivitor\" data-v-6cd3a82c>Счет: BY20ALFA30122474210010270000</h4></div> <div class=\"row\" data-v-6cd3a82c><h4 class=\"text-recivitor\" data-v-6cd3a82c>Банк: ЗАО &quot;АЛЬФА-БАНК&quot; г. Минск, ул. Сурганова, 43-47</h4></div> <div class=\"row\" data-v-6cd3a82c><h4 class=\"text-recivitor\" data-v-6cd3a82c>БИК: ALFABY2X</h4></div> <div class=\"row\" data-v-6cd3a82c><h5 class=\"text-recivitor\" data-v-6cd3a82c> Директор Михашонок Сергей Васильевич, на основании Устава Приказ № 8-К от 19.02.2020г.</h5></div> <div class=\"row\" data-v-6cd3a82c><div class=\"col\" data-v-6cd3a82c><div class=\"row\" data-v-6cd3a82c><h5 class=\"text-recivitor\" data-v-6cd3a82c>mixenerdgy@mail.ru</h5></div> <div class=\"row\" data-v-6cd3a82c><h5 class=\"text-recivitor\" data-v-6cd3a82c> тел/факс:+375173926366</h5></div> <div class=\"row\" data-v-6cd3a82c><h5 class=\"text-recivitor\" data-v-6cd3a82c>тел:+37529-377-47-10</h5></div></div></div> <div class=\"row\" data-v-6cd3a82c><p data-v-6cd3a82c><a href=\"/docs/Реквизиты_МиксЭнерджи.docx\" data-v-6cd3a82c>Скачать реквизиты</a></p></div></div> <div class=\" col-lg-12 col-xs-12\" style=\" overflow: auto;\" data-v-6cd3a82c><div class=\"row\" data-v-6cd3a82c><div style=\"display: block;\" data-v-6cd3a82c><h4 style=\"font-size: 28px; color: #0d82d3; padding: 10px;\" data-v-6cd3a82c>Склад (пункт самовывоза): </h4> <h5 data-v-6cd3a82c>г. Минск, ул. Артиллеристов, дом № 8, корпус 3, офис 17</h5></div></div> <div class=\"row\" data-v-6cd3a82c><div style=\"font-size: 18px;\" data-v-6cd3a82c><h1 style=\"font-size: 28px; padding: 10px; color: #0d82d3\" data-v-6cd3a82c>Вы можете с нами связаться:</h1> <h4 data-v-6cd3a82c>По телефонам:</h4> <i class=\"fa fa-mobile\" data-v-6cd3a82c></i> <a href=\"tel:+375297386466\" data-v-6cd3a82c>+37529-738-64-66</a><br data-v-6cd3a82c> <i class=\"fa fa-mobile\" data-v-6cd3a82c></i> <a href=\"tel:+375293774710\" data-v-6cd3a82c>+37529-377-47-10</a><br data-v-6cd3a82c> <i class=\"fa fa-phone\" data-v-6cd3a82c></i> тел/факс: 8 (017) 39-26-366<br data-v-6cd3a82c> <h4 data-v-6cd3a82c>По e-mail:</h4> <span data-v-6cd3a82c><i class=\"fas fa-envelope\" data-v-6cd3a82c></i> <a href=\"mailto:info@mixenerdgy.by\" data-v-6cd3a82c>info@mixenerdgy.by</a></span> <br data-v-6cd3a82c> <span data-v-6cd3a82c><i class=\"fas fa-envelope\" data-v-6cd3a82c></i> <a href=\"mailto:mixenerdgy@mail.ru\" data-v-6cd3a82c>mixenerdgy@mail.ru</a></span></div></div></div></div> <div class=\"row align-content-center\" data-v-6cd3a82c><div style=\"margin-left: 12%\" data-v-6cd3a82c><iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3A6e610803a4d59a683c1b1b4076f418568a1606d3ce37923db82f75ec01727438&source=constructor\" width=\"800\" height=\"600\" frameborder=\"0\" data-v-6cd3a82c></iframe></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=6cd3a82c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
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
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  name: "contact"
});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(131)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6cd3a82c",
  "3f7c2754"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map