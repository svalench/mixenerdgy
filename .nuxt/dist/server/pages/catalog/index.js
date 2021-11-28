exports.ids = [11,2];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_style_index_0_id_48d3fdeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_style_index_0_id_48d3fdeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_style_index_0_id_48d3fdeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_style_index_0_id_48d3fdeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_style_index_0_id_48d3fdeb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".skelet-cl[data-v-48d3fdeb]{margin-top:10%}.spiner-show[data-v-48d3fdeb]{margin-top:80%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/catalog/filter.vue?vue&type=template&id=48d3fdeb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion",attrs:{"role":"tablist"}},[_c('client-only',[_c('b-skeleton-wrapper',{attrs:{"loading":_vm.show},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('b-card',{attrs:{"title":"Активные"}},[_c('div',{staticStyle:{"display":"flex"}},[_c('b-skeleton',{staticStyle:{"margin-right":"5%"},attrs:{"width":"25%","height":"70%"}}),_vm._v(" "),_c('b-skeleton',{staticStyle:{"margin-right":"5%"},attrs:{"width":"25%","height":"70%"}}),_vm._v(" "),_c('b-skeleton',{staticStyle:{"margin-right":"5%"},attrs:{"width":"25%","height":"70%"}})],1)]),_vm._v(" "),_c('b-card',{attrs:{"title":"Фильтр"}},[_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"85%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"65%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"70%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"80%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"60%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"90%"}})],1)]},proxy:true}])},[_vm._v(" "),_c('b-card',{attrs:{"title":"Активные"}},[_c('div',_vm._l((_vm.selected_filters),function(i,k){return _c('b-badge',{key:k,staticStyle:{"padding":"2px","font-size":"12px","margin":"5px"}},[_vm._v(_vm._s(i.value)+" "+_vm._s(i.unit!=='-'?i.unit:'')+" "),_c('b-button',{staticStyle:{"font-size":"10px"},attrs:{"size":"sm"},on:{"click":function($event){return _vm.removeByValue(i)}}},[_vm._v("X")])],1)}),1)]),_vm._v(" "),_c('b-card',{staticStyle:{"background-color":"white"},attrs:{"title":"Фильтр"}},_vm._l((_vm.filters),function(f,n){return _c('b-card',{key:n,staticClass:"mb-1",staticStyle:{"background-color":"white"},attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",staticStyle:{"background-color":"white"},attrs:{"role":"tab"}},[_c('b-button',{staticStyle:{"white-space":"pre-line"},attrs:{"block":"","size":"sm","variant":"outline-primary"},on:{"click":function($event){return _vm.openAccordion(n)}}},[_vm._v(" "+_vm._s(f.name))])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":'accordion-'+n,"accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('b-card-text',[_c('b-form-checkbox-group',{attrs:{"stacked":"","name":"flavour-1"},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},_vm._l((f.values),function(val,nn){return _c('b-row',{key:nn},[_c('b-form-checkbox',{ref:"checkb",refInFor:true,attrs:{"size":"lg","value":val.id},on:{"change":function($event){return _vm.setFilter()}}},[_vm._v(_vm._s(val.value)+" "+_vm._s(val.unit!=='-'?val.unit:''))])],1)}),1)],1)],1)],1)],1)}),1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/catalog/filter.vue?vue&type=template&id=48d3fdeb&scoped=true&

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(82);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(83);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(84);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(85);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(86);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(87);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(88);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(89);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(90);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(91);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/catalog/filter.vue?vue&type=script&lang=js&
















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
/* harmony default export */ var filtervue_type_script_lang_js_ = ({
  name: "filter_my",

  data() {
    return {
      show: false,
      filters: [],
      selected: [],
      all_filters: [],
      selected_filters: [],
      options: [{
        text: 'Orange',
        value: 'orange'
      }, {
        text: 'Orange',
        value: 'orange'
      }, {
        text: 'Orange',
        value: 'orange'
      }]
    };
  },

  async fetch() {
    this.getSelected();
    this.getFilters();
  },

  watch: {
    '$route.query'(nv) {
      this.getSelected();
      this.setToQuick();
    }

  },

  mounted() {
    this.getFilters();
  },

  methods: {
    getSelected() {
      var selected = JSON.parse(JSON.stringify(this.$route.query.filter ? this.$route.query.filter : []));

      if (Array.isArray(selected)) {
        selected = selected.map(x => x - 0);
      } else {
        selected = [selected - 0];
      }

      this.selected = selected;
    },

    /**
     * ткрытие фильтров
     * @param n
     */
    openAccordion(n) {
      this.$root.$emit('bv::toggle::collapse', 'accordion-' + n);
    },

    /**
     * полчение значение фильтров с бэка
     * @returns {Promise<void>}
     */
    async getFilters() {
      this.show = true;
      let data = await this.$axios.get(`/cat/characterisitcs?category=${this.$route.params.id}`);
      this.filters = data.data;
      this.filters.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });
      this.all_filters = [];

      for (let i of this.filters) {
        for (let j of i.values) {
          this.all_filters.push(j);
        }
      }

      this.show = false;
      this.setToQuick();
    },

    /**
     *  сохранение выбраных чекбоксов в быстрый старт
     */
    setToQuick() {
      this.selected_filters = [];

      if (Array.isArray(this.selected)) {
        let adas = this.selected.map(x => x - 0);
        let newarr = JSON.parse(JSON.stringify(this.all_filters.filter(x => adas.includes(x.id))));
        this.selected_filters = [...new Set(newarr)];
      } else {
        let adas = this.selected - 0;
        this.selected_filters = this.all_filters.filter(x => adas === x.id);
      }
    },

    /**
     * добавление фильтров в путь
     */
    setFilter() {
      this.$router.push({
        path: this.$route.path,
        query: {
          filter: JSON.parse(JSON.stringify(this.selected)),
          page: 1
        }
      });
    },

    /**
     * удаляем выбранные по крестику
     * @param k
     */
    removeByValue(k) {
      var arr = this.selected.map(x => x - 0);
      var index = arr.indexOf(k.id);

      if (index !== -1) {
        this.selected.splice(index, 1);
        this.setFilter();
      }
    }

  }
});
// CONCATENATED MODULE: ./components/catalog/filter.vue?vue&type=script&lang=js&
 /* harmony default export */ var catalog_filtervue_type_script_lang_js_ = (filtervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/catalog/filter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  catalog_filtervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "48d3fdeb",
  "bae56a26"
  
)

/* harmony default export */ var filter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6ab52d6f", content, true, context)
};

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e58e5e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e58e5e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e58e5e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e58e5e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0e58e5e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card-style-subcat img[data-v-0e58e5e8]{width:30%;margin-left:33%}.global-childcat[data-v-0e58e5e8]{padding:10px;border-radius:10px;transition:all .7s ease}.global-childcat-hover[data-v-0e58e5e8]{box-shadow:20px 2px 40px #0e8ce4}.active-menu-list[data-v-0e58e5e8]{box-shadow:2px 2px 10px #0e8ce4}.card-style-subcat h4[data-v-0e58e5e8]{font-size:20px}.card-style-subcat[data-v-0e58e5e8]{height:90%;min-height:100px;transition:all .7s ease;cursor:pointer}.card-style-subcat[data-v-0e58e5e8]:hover{box-shadow:10px 12px 14px #0e8ce4;color:#0d82d3}.item-menu[data-v-0e58e5e8]{transition:all .5s;cursor:pointer;text-align:center}.item-menu[data-v-0e58e5e8]:hover{box-shadow:2px 8px 12px #0e8ce4;color:#0d82d3}.active-menu[data-v-0e58e5e8]{color:#f5f5f5;background-color:#0d82d3}h4[data-v-0e58e5e8]{text-align:center}.name_group[data-v-0e58e5e8]{margin-top:50px;padding:10px;transition:.4s}.name_group[data-v-0e58e5e8]:hover{color:#0d82d3}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/catalog/index.vue?vue&type=template&id=0e58e5e8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\" style=\"padding-top:30px; \" data-v-0e58e5e8>","</div>",[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("Главная")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("Каталог")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-0e58e5e8>","</div>",[_vm._ssrNode("<div class=\"col-1 d-xs-block d-sm-none\" data-v-0e58e5e8> &gt; </div> "),_vm._ssrNode("<div class=\"col  global-childcat\" data-v-0e58e5e8>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-0e58e5e8>","</div>",[(_vm.tempSecondCat.length)?_vm._ssrNode("<div data-v-0e58e5e8>","</div>",_vm._l((_vm.tempSecondCat),function(i,k){return _vm._ssrNode("<div class=\"col-4-sm col-12\" data-v-0e58e5e8>","</div>",[_c('b-card',{staticClass:" card-style-subcat",staticStyle:{"text-align":"center"},on:{"click":function($event){return _vm.gotocat(i.id)}}},[_c('b-card-header',[_vm._v(_vm._s(i.name))]),_vm._v(" "),_c('b-card-body')],1)],1)}),0):_vm._ssrNode("<div data-v-0e58e5e8>","</div>",_vm._l((_vm.categories),function(i,k){return _vm._ssrNode("<div class=\"col name_group\" data-v-0e58e5e8>","</div>",[_vm._ssrNode("<div style=\"display: block;\" data-v-0e58e5e8><h2 style=\"font-size: 24px;\" data-v-0e58e5e8>"+_vm._ssrEscape(_vm._s(i.name))+"</h2><hr data-v-0e58e5e8></div> "),_vm._ssrNode("<div class=\"row\" data-v-0e58e5e8>","</div>",_vm._l((i.child),function(j,c){return _vm._ssrNode("<div class=\"col-lg-4 col-12\" style=\"margin-top: 20px;\" data-v-0e58e5e8>","</div>",[_c('b-card',{staticClass:" card-style-subcat",attrs:{"img-alt":j.name},on:{"click":function($event){return _vm.gotocat(j.id)}}},[_c('b-row',{attrs:{"align-v":"center"}},[_c('b-col',{attrs:{"cols":"5"}},[_c('b-card-img',{staticStyle:{"width":"50%"},attrs:{"src":j.img,"fluid":""}})],1),_vm._v(" "),_c('b-col',{staticStyle:{"white-space":"pre-line"},attrs:{"cols":"7"}},[_c('b-card-title',{staticStyle:{"font-size":"16px","padding-top":"10px"}},[_vm._v(_vm._s(j.name))])],1)],1)],1)],1)}),0)],2)}),0)])])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/catalog/index.vue?vue&type=template&id=0e58e5e8&scoped=true&

// EXTERNAL MODULE: ./components/catalog/filter.vue + 4 modules
var filter = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/catalog/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var catalogvue_type_script_lang_js_ = ({
  name: "catalog",
  components: {
    my_filter: filter["default"]
  },

  data() {
    return {
      categories: [],
      tempSecondCat: [],
      seted: [],
      timer: null
    };
  },

  async fetch() {
    await this.getCategories();
  },

  methods: {
    /**
     *  переход в категорию
     * @param id
     */
    gotocat(id) {
      this.$router.push(`/catalog/${id}`);
    },

    /**
     * получение категорий с API
     * @returns {Promise<void>}
     */
    async getCategories() {
      let data = await this.$axios.get('/catalog/categories/');
      this.categories = data.data.results;
    },

    /**
     * not ued todo delete this
     */
    showSeted() {
      this.timer = setTimeout(() => {
        this.tempSecondCat = JSON.parse(JSON.stringify(this.seted));
      }, 200);
    },

    /**
     * todo delete
     * @param cat
     */
    showSecondLevel(cat) {
      clearTimeout(this.timer);
      this.tempSecondCat = JSON.parse(JSON.stringify(cat.child));
    },

    /**
     * not ued todo delete this
     */
    saveCatShow(e, cat) {
      clearTimeout(this.timer);
      this.showSeted();
      let arrr = document.getElementsByClassName('active-menu');

      if (e.path[0].classList.contains('active-menu')) {
        e.path[0].classList.remove('active-menu');
        this.seted = [];
      } else {
        this.seted = cat.child;

        for (let i of arrr) {
          i.classList.remove('active-menu');
        }

        e.path[0].classList.add('active-menu');
      }
    },

    /**
     * not ued todo delete this
     */
    hideSelected() {
      if (this.tempSecondCat.length) {
        this.$refs.menu.classList.remove('active-menu-list');
        this.$refs.cats.classList.remove('global-childcat-hover');
      }

      this.showSeted();
    },

    /**
     * not ued todo delete this
     */
    saveSelected() {
      if (this.tempSecondCat.length) {
        this.$refs.menu.classList.add('active-menu-list');
        this.$refs.cats.classList.add('global-childcat-hover');
      }

      clearTimeout(this.timer);
    }

  }
});
// CONCATENATED MODULE: ./pages/catalog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_catalogvue_type_script_lang_js_ = (catalogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/catalog/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(129)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_catalogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0e58e5e8",
  "33d01a03"
  
)

/* harmony default export */ var catalog = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("27ec0054", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map