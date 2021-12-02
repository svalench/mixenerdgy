exports.ids = [8];
exports.modules = {

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2caeba50", content, true, context)
};

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_index_vue_vue_type_style_index_0_id_3cf89778_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_index_vue_vue_type_style_index_0_id_3cf89778_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_index_vue_vue_type_style_index_0_id_3cf89778_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_index_vue_vue_type_style_index_0_id_3cf89778_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_index_vue_vue_type_style_index_0_id_3cf89778_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".el-carousel__item h3[data-v-3cf89778]{color:#475669;font-size:14px;opacity:.75;line-height:200px;margin:0}.el-carousel__item[data-v-3cf89778]:nth-child(2n){background-color:#99a9bf}.el-carousel__item[data-v-3cf89778]:nth-child(odd){background-color:#d3dce6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/index/banner_index.vue?vue&type=template&id=3cf89778&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"popular_categories\" data-v-3cf89778>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-3cf89778>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-3cf89778>","</div>",[_vm._ssrNode("<div class=\"col-lg-3\" data-v-3cf89778>","</div>",[_vm._ssrNode("<div class=\"popular_categories_content\" data-v-3cf89778>","</div>",[_vm._ssrNode("<div class=\"popular_categories_title\" data-v-3cf89778>Популярное</div> <div class=\"popular_categories_slider_nav\" data-v-3cf89778><div class=\"popular_categories_prev popular_categories_nav\" data-v-3cf89778><i class=\"fas fa-angle-left ml-auto\" data-v-3cf89778></i></div> <div class=\"popular_categories_next popular_categories_nav\" data-v-3cf89778><i class=\"fas fa-angle-right ml-auto\" data-v-3cf89778></i></div></div> "),_vm._ssrNode("<div class=\"popular_categories_link\" data-v-3cf89778>","</div>",[_c('nuxt-link',{attrs:{"to":"catalog"}},[_vm._v("Весь каталог")])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-9\" data-v-3cf89778>","</div>",[_c('el-carousel',{ref:"slider",attrs:{"arrow":'never',"interval":4000,"type":"card","height":"400px"},on:{"next":_vm.next}},_vm._l((_vm.list),function(item,k){return _c('el-carousel-item',{key:k},[_c('div',{staticClass:"card mx-auto mb-3",staticStyle:{"height":"100%","width":"100%"}},[_c('el-image',{staticClass:"card-img-top",staticStyle:{"height":"150px"},attrs:{"fit":'contain',"src":("https://api.mixenerdgy.by/media/" + (item.img))}}),_vm._v(" "),_c('div',{staticClass:"card-body h-100"},[_c('h4',{staticClass:"card-title"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v(_vm._s(item.card.description.substr(0,100))+_vm._s(item.card.description.length>100?'...':'')+"\n                    "),(item.card.description.length>100)?_c('a',{attrs:{"href":("/catalog/product/" + (item.id))}},[_vm._v("читать далее")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('a',{staticClass:"btn btn-primary align-content-end",attrs:{"href":("/catalog/product/" + (item.id))}},[_vm._v("Перейти")])])],1)])}),1)],1)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/index/banner_index.vue?vue&type=template&id=3cf89778&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/index/banner_index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var banner_indexvue_type_script_lang_js_ = ({
  name: "banner",

  data() {
    return {
      list: []
    };
  },

  async fetch() {
    await this.getRandomProducts();
  },

  methods: {
    next() {
      this.$refs.slider.next();
    },

    prev() {
      this.$refs.slider.prev();
    },

    goToProduct(id) {
      this.$router.push(`/catalog/product/${id}`);
    },

    async getRandomProducts() {
      let res = await this.$axios.get('/product/random/');
      this.list = res.data.results;
      console.log(this.list);
    }

  }
});
// CONCATENATED MODULE: ./components/index/banner_index.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_banner_indexvue_type_script_lang_js_ = (banner_indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/index/banner_index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_banner_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3cf89778",
  "5ca9cb1b"
  
)

/* harmony default export */ var banner_index = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index-banner-index.js.map