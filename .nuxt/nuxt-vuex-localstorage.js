import bindStorage from 'nuxt-vuex-localstorage/plugins/bindStorage'

export default (ctx) => {
  const options = {"localStorage":["cart"]}
  bindStorage(ctx, options)
}
