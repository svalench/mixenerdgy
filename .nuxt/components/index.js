export const FooterSite = () => import('../..\\components\\global\\footer\\footer_site.vue' /* webpackChunkName: "components/footer-site" */).then(c => wrapFunctional(c.default || c))
export const HeadCartComponentHeader = () => import('../..\\components\\global\\head\\CartComponentHeader.vue' /* webpackChunkName: "components/head-cart-component-header" */).then(c => wrapFunctional(c.default || c))
export const HeadCartDialog = () => import('../..\\components\\global\\head\\CartDialog.vue' /* webpackChunkName: "components/head-cart-dialog" */).then(c => wrapFunctional(c.default || c))
export const HeadHeaderSite = () => import('../..\\components\\global\\head\\header_site.vue' /* webpackChunkName: "components/head-header-site" */).then(c => wrapFunctional(c.default || c))
export const HeadMain = () => import('../..\\components\\global\\head\\head_main.vue' /* webpackChunkName: "components/head-main" */).then(c => wrapFunctional(c.default || c))
export const HeadNavigation = () => import('../..\\components\\global\\head\\head_navigation.vue' /* webpackChunkName: "components/head-navigation" */).then(c => wrapFunctional(c.default || c))
export const HeadMobileHeader = () => import('../..\\components\\global\\head\\mobileHeader.vue' /* webpackChunkName: "components/head-mobile-header" */).then(c => wrapFunctional(c.default || c))
export const HeadPhoenMenu = () => import('../..\\components\\global\\head\\phoen_menu.vue' /* webpackChunkName: "components/head-phoen-menu" */).then(c => wrapFunctional(c.default || c))
export const HeadTopBar = () => import('../..\\components\\global\\head\\top_bar.vue' /* webpackChunkName: "components/head-top-bar" */).then(c => wrapFunctional(c.default || c))
export const CatalogCard = () => import('../..\\components\\catalog\\catalog_card.vue' /* webpackChunkName: "components/catalog-card" */).then(c => wrapFunctional(c.default || c))
export const CatalogFilter = () => import('../..\\components\\catalog\\filter.vue' /* webpackChunkName: "components/catalog-filter" */).then(c => wrapFunctional(c.default || c))
export const CatalogGaleryProduct = () => import('../..\\components\\catalog\\GaleryProduct.vue' /* webpackChunkName: "components/catalog-galery-product" */).then(c => wrapFunctional(c.default || c))
export const CatalogTabsProduct = () => import('../..\\components\\catalog\\tabs_product.vue' /* webpackChunkName: "components/catalog-tabs-product" */).then(c => wrapFunctional(c.default || c))
export const IndexBannerIndex = () => import('../..\\components\\index\\banner_index.vue' /* webpackChunkName: "components/index-banner-index" */).then(c => wrapFunctional(c.default || c))
export const CertFilter = () => import('../..\\components\\certComponents\\certFilter.vue' /* webpackChunkName: "components/cert-filter" */).then(c => wrapFunctional(c.default || c))
export const CertComponentsCertificateCard = () => import('../..\\components\\certComponents\\certificateCard.vue' /* webpackChunkName: "components/cert-components-certificate-card" */).then(c => wrapFunctional(c.default || c))

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
