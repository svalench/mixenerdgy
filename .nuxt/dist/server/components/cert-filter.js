exports.ids = [6];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=cert-filter.js.map