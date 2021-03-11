export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'empren-site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Roboto:ital,wght@0,400;0,500;0,700;1,300;1,400;1,500&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/directives'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBDLZv23fKGYCcrLpcEbEzNC48mRjB0l9g',
          authDomain: 'emprendedores-ef6fa.firebaseapp.com',
          databaseURL: 'https://emprendedores-ef6fa-default-rtdb.firebaseio.com',
          projectId: 'emprendedores-ef6fa',
          storageBucket: 'emprendedores-ef6fa.appspot.com',
          messagingSenderId: '230062891562',
          appId: '1:230062891562:web:b06647074b7dc995935953',
          measurementId: 'G-CKFLZ5VXPY'
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
