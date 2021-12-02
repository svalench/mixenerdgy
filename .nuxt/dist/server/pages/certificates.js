exports.ids = [13,5,6];
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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/certComponents/certFilter.vue?vue&type=template&id=1fdb1589&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-skeleton-wrapper',{attrs:{"loading":_vm.show},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('b-card',{attrs:{"title":"Фильтр"}},[_c('div',[_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"85%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"65%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"70%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"80%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"60%"}}),_vm._v(" "),_c('b-skeleton',{staticClass:"skelet-cl",attrs:{"width":"90%"}})],1)])]},proxy:true}])},[_vm._v(" "),_c('b-card',{staticStyle:{"background-color":"white"},attrs:{"title":"Фильтр"}},[_c('b-form-checkbox-group',{attrs:{"stacked":"","name":"flavour-1"},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}},_vm._l((_vm.filters),function(val,nn){return _c('b-row',{key:nn},[_c('b-form-checkbox',{ref:"checkb",refInFor:true,attrs:{"size":"lg","value":val.id},on:{"change":function($event){return _vm.setFilter()}}},[_vm._v(_vm._s(val.name))])],1)}),1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/certComponents/certFilter.vue?vue&type=template&id=1fdb1589&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/certComponents/certFilter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var certFiltervue_type_script_lang_js_ = ({
  name: "certFilter",

  data() {
    return {
      filters: [],
      selected: [],
      show: false
    };
  },

  mounted() {
    this.getSelected();
    this.getFilters();
  },

  watch: {
    '$route.query'(nv) {
      this.getSelected();
    }

  },
  methods: {
    /**
     * получение значений фильтров
     * @returns {Promise<void>}
     */
    async getFilters() {
      this.show = true;
      let data = await this.$axios.get(`/catalog/categories/?limit=99999`);
      console.log(data);
      this.filters = data.data.results; // this.filters.push({name:"Без категории",id:0})

      this.show = false;
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

    getSelected() {
      var selected = JSON.parse(JSON.stringify(this.$route.query.filter ? this.$route.query.filter : []));

      if (Array.isArray(selected)) {
        selected = selected.map(x => x - 0);
      } else {
        selected = [selected - 0];
      }

      this.selected = selected;
    }

  }
});
// CONCATENATED MODULE: ./components/certComponents/certFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var certComponents_certFiltervue_type_script_lang_js_ = (certFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/certComponents/certFilter.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  certComponents_certFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1fdb1589",
  "085d7cc8"
  
)

/* harmony default export */ var certFilter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 124:
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

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/certificates.vue?vue&type=template&id=1b5ae0de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"row\" style=\"padding-top:30px; \" data-v-1b5ae0de>","</div>",[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("Главная")]),_vm._v(" "),_c('el-breadcrumb-item',[_vm._v("Сертификаты")])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" style=\"padding-top:30px; \" data-v-1b5ae0de>","</div>",[_vm._ssrNode("<div class=\"col-3\" data-v-1b5ae0de>","</div>",[_c('cert-filter')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col\" data-v-1b5ae0de>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1b5ae0de>","</div>",_vm._l((_vm.certificates),function(c,k){return _vm._ssrNode("<div class=\"col-6\" style=\" margin:0; height: 100%;\" data-v-1b5ae0de>","</div>",[_vm._ssrNode("<a target=\"_blank\""+(_vm._ssrAttr("href",c.doc))+" data-v-1b5ae0de>","</a>",[_c('b-card',{staticClass:"cardCert",staticStyle:{"margin":"5%"}},[_c('b-card-title',{staticStyle:{"font-size":"20px","min-height":"50px"}},[_vm._v(_vm._s(c.name))]),_vm._v(" "),_c('b-card-text',{staticStyle:{"overflow":"auto"}})],1)],1)])}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"paginator\" data-v-1b5ae0de>","</div>",[_c('b-pagination',{attrs:{"total-rows":_vm.count,"per-page":_vm.limit,"align":"center","first-number":"","last-number":""},on:{"input":function($event){return _vm.paginate()}},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/certificates.vue?vue&type=template&id=1b5ae0de&scoped=true&

// EXTERNAL MODULE: ./components/certComponents/certificateCard.vue + 4 modules
var certificateCard = __webpack_require__(124);

// EXTERNAL MODULE: ./components/certComponents/certFilter.vue + 4 modules
var certFilter = __webpack_require__(116);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/certificates.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var certificatesvue_type_script_lang_js_ = ({
  components: {
    CertFilter: certFilter["default"],
    CertificateCard: certificateCard["default"]
  },
  name: "certificatesPage",

  data() {
    return {
      currentPage: 1,
      count: 0,
      certificates: [],
      loading: false,
      limit: 9,
      offset: 0
    };
  },

  async fetch() {
    this.currentPage = this.$route.query['page'] ? this.$route.query['page'] : 1;
    await this.getCertificates();
  },

  watch: {
    '$route.query'(nv) {
      this.currentPage = nv.page ? nv.page : 1;
      this.getCertificates();
    }

  },

  mounted() {
    this.getCertificates();
  },

  methods: {
    /**
    * постраничный
    */
    paginate() {
      this.$router.push({
        path: this.$route.path,
        query: {
          page: this.currentPage
        }
      });
      this.getCertificates();
    },

    /**
     * метод получает список сертификатов с бэка
     * @returns {Promise<void>}
     */
    async getCertificates() {
      let params = '';

      if (this.$route.query.filter) {
        if (Array.isArray(this.$route.query.filter)) {
          for (let c of this.$route.query.filter) {
            params += `&parent_ch=${c}`;
          }
        } else {
          params += `&parent_ch=${this.$route.query.filter}`;
        }
      }

      this.offset = (this.currentPage - 1) * this.limit;
      let res = await this.$axios.get(`/catalog/certificates/?limit=${this.limit}&offset=${this.offset}${params}`).catch(e => {
        console.error(e);
        this.$message({
          message: 'Произошла ошибка загрузки данных',
          type: 'error'
        });
      });
      this.count = res.data.count;
      this.certificates = res.data.results;
    }

  }
});
// CONCATENATED MODULE: ./pages/certificates.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_certificatesvue_type_script_lang_js_ = (certificatesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/certificates.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_certificatesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b5ae0de",
  "aae9f190"
  
)

/* harmony default export */ var certificates = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CertFilter: __webpack_require__(116).default})


/***/ })

};;
//# sourceMappingURL=certificates.js.map