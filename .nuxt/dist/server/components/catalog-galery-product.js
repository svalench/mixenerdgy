exports.ids = [3];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7d7bc2cd", content, true, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GaleryProduct_vue_vue_type_style_index_0_id_06c3440c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GaleryProduct_vue_vue_type_style_index_0_id_06c3440c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GaleryProduct_vue_vue_type_style_index_0_id_06c3440c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GaleryProduct_vue_vue_type_style_index_0_id_06c3440c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GaleryProduct_vue_vue_type_style_index_0_id_06c3440c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".galery[data-v-06c3440c]{float:left}.galery-index .el-image[data-v-06c3440c]{height:100%;width:100%;border:3px solid #0d82d3}.galery-index[data-v-06c3440c]{float:left;width:80%;padding:5px}.galery-extra[data-v-06c3440c]{display:flex;float:left;height:30%;width:40%;position:relative}.galery-extra-block[data-v-06c3440c]{float:left;width:60%;padding:5px;margin-top:10%;margin-left:5%;border:1px solid #0d82d3;position:relative}.galery-extra .el-image[data-v-06c3440c]{height:100%;width:100%}.galery-extra img[data-v-06c3440c],.galery-index img[data-v-06c3440c]{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain;border:1px solid #efefef;border-radius:7px;padding:5px}.galery-extra-plus[data-v-06c3440c]{position:absolute;top:5px;right:5px;left:5px;bottom:5px;align-items:center;display:flex;justify-content:center;font-size:23px;font-weight:700;color:#fff;background:rgb(51 51 51/22%);border-radius:7px;pointer-events:none}.el-image:hover~.galery-extra-plus[data-v-06c3440c]{transition:.2s;background:rgb(51 51 51/32%)}.galery-extra-plus strong[data-v-06c3440c]{font-weight:600;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/catalog/GaleryProduct.vue?vue&type=template&id=06c3440c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"galery"},[_vm._ssrNode("<div class=\"galery-index\" data-v-06c3440c>","</div>",[_c('el-image',{attrs:{"src":_vm.productItems.img,"preview-src-list":_vm.srcList}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"galery-extra\" data-v-06c3440c>","</div>",_vm._l((_vm.srcList.slice(1, 3)),function(img,index){return _vm._ssrNode("<div class=\"galery-extra-block col\" data-v-06c3440c>","</div>",[_c('el-image',{attrs:{"src":img,"fit":'cover',"preview-src-list":_vm.srcList}}),_vm._ssrNode(" "+((index == 1 && _vm.srcList.length > 3)?("<div class=\"galery-extra-plus\" data-v-06c3440c><strong data-v-06c3440c>"+_vm._ssrEscape(_vm._s(_vm.srcList.length))+"</strong> <span data-v-06c3440c>+</span></div>"):"<!---->"))],2)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/catalog/GaleryProduct.vue?vue&type=template&id=06c3440c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/catalog/GaleryProduct.vue?vue&type=script&lang=js&
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
/* harmony default export */ var GaleryProductvue_type_script_lang_js_ = ({
  name: "GaleryProduct",

  async fetch() {},

  data() {
    return {
      srcList: []
    };
  },

  props: ['productItems'],
  computed: {},
  methods: {
    imgGalery() {
      console.log(this.productItems);

      if (this.productItems.images === undefined) {
        return;
      }

      this.productItems.img = `https://api.mixenerdgy.by/media/${this.productItems.img}`;
      this.srcList = this.productItems.images.map(key => key.img);
      this.srcList.unshift(this.productItems.img);
    }

  },

  mounted() {
    this.imgGalery();
  },

  created() {}

});
// CONCATENATED MODULE: ./components/catalog/GaleryProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var catalog_GaleryProductvue_type_script_lang_js_ = (GaleryProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/catalog/GaleryProduct.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  catalog_GaleryProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06c3440c",
  "4d059eb0"
  
)

/* harmony default export */ var GaleryProduct = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=catalog-galery-product.js.map