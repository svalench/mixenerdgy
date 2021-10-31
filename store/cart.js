export const state = ()=>({
    cart:[],
    count:0,
    sum:0.00,
})

export const mutations = {
  CLEAR_CART(state){
    state.cart = [];
    state.count = 0;
    state.sum = 0.00;
  },
  SET_CART(state,product){
        let ccc = state.cart.find(
          function (x){
            if(x.id===product.id){
              x.count+=product.count;
              return x
            }
          }
        );
        if (ccc===undefined){
          state.cart.push(product)
        }
        state.count = 0;
        for(let x of state.cart){
          state.count += x.count;
        }
    },
}

export const actions = {
  ADD_TO_CART({commit},product){
        commit('SET_CART',product)
    },
  CLEAR_CART({commit}){
    commit('CLEAR_CART')
  }
}


export const getters = {
    cart: state => state.cart,
    count: state => state.count,

}


export default {
    state,
    mutations,
    actions,
    getters,
  }
