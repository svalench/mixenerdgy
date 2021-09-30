export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mixenerdgy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
     script: [
      { src: "/js/jquery-3.3.1.min.js", body: true},
      { src: "/bootstrap4/popper.js", body: true},
      { src: "/bootstrap4/bootstrap.min.js", body: true},
      { src: "/plugins/greensock/TweenMax.min.js", body: true},
      { src: "/plugins/greensock/TimelineMax.min.js", body: true},
      { src: "/plugins/scrollmagic/ScrollMagic.min.js", body: true},
      { src: "/plugins/greensock/animation.gsap.min.js", body: true},
      { src: "/plugins/greensock/ScrollToPlugin.min.js", body: true},
      { src: "/plugins/OwlCarousel2-2.2.1/owl.carousel.js", body: true},
      { src: "/plugins/slick-1.8.0/slick.js", body: true},
      { src: "/plugins/easing/easing.js", body: true},
      { src: "/js/product_custom.js", body: true},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/bootstrap4/bootstrap.min.css',
    '@/assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css',
    '@/assets/styles/main_styles.css',
    '@/assets/styles/product_responsive.css',
    '@/assets/styles/responsive.css',
    '@/assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css',
    '@/assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css',
    '@/assets/plugins/OwlCarousel2-2.2.1/animate.css',
    '@/assets/plugins/slick-1.8.0/slick.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {
    proxy: false,
    baseURL: "http://127.0.0.1:8000/"
    // baseURL: "http://api.beautymasters.online/"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
