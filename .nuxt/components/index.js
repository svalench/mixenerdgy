export { default as FooterSite } from '../..\\components\\global\\footer\\footer_site.vue'
export { default as HeadCartComponentHeader } from '../..\\components\\global\\head\\CartComponentHeader.vue'
export { default as HeadCartDialog } from '../..\\components\\global\\head\\CartDialog.vue'
export { default as HeadHeaderSite } from '../..\\components\\global\\head\\header_site.vue'
export { default as HeadMain } from '../..\\components\\global\\head\\head_main.vue'
export { default as HeadNavigation } from '../..\\components\\global\\head\\head_navigation.vue'
export { default as HeadMobileHeader } from '../..\\components\\global\\head\\mobileHeader.vue'
export { default as HeadPhoenMenu } from '../..\\components\\global\\head\\phoen_menu.vue'
export { default as HeadTopBar } from '../..\\components\\global\\head\\top_bar.vue'
export { default as CatalogCard } from '../..\\components\\catalog\\catalog_card.vue'
export { default as CatalogFilter } from '../..\\components\\catalog\\filter.vue'
export { default as CatalogGaleryProduct } from '../..\\components\\catalog\\GaleryProduct.vue'
export { default as CatalogTabsProduct } from '../..\\components\\catalog\\tabs_product.vue'
export { default as CertFilter } from '../..\\components\\certComponents\\certFilter.vue'
export { default as CertComponentsCertificateCard } from '../..\\components\\certComponents\\certificateCard.vue'
export { default as IndexBannerIndex } from '../..\\components\\index\\banner_index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
