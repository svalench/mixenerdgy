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
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/bootstrap4/bootstrap.min.css',
    '@/assets/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css',
    '@/assets/styles/main_styles.css',
    // '@/assets/styles/product_responsive.css',
    '@/assets/styles/responsive.css',
    // '@/assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css',
    // '@/assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css',
    // '@/assets/plugins/OwlCarousel2-2.2.1/animate.css',
    // '@/assets/plugins/slick-1.8.0/slick.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    {src: '@/plugins/owl.js', ssr: false},
    '@/plugins/vue-ls',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
     // '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-element-ui',
    ['nuxt-vuex-localstorage', {
      localStorage: ['cart'] //  If not entered, “localStorage” is the default value
    }]
  ],
  // elementUI: {
  //   components: ['Button', 'Carousel'],
  //   locale: 'ru-RU',
  // },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {
    proxy: false,
    baseURL: "https://api.mixenerdgy.by/"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://api.mixenerdgy.by/.*',
          // handler: 'networkFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'my-api-cache',
            cacheableResponse: {statuses: [0, 200]}
          }
        }
      ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
