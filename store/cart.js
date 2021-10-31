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
  DELETE_POSITION(state, product_id){
    const index = state.cart.map(x=>x.id).indexOf(product_id-0);
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      state.count = 0;
      for(let x of state.cart){
        state.count += x.count;
      }
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

  COUNT_DOWN(state, product_id){
      state.cart.find(
          function (x){
            if(x.id===product_id){
              x.count = x.count-0
              x.count-=1;
              x.count = x.count<0?0:x.count;
              return x
            }
          }
        );
      state.count = 0;
        for(let x of state.cart){
          state.count += x.count;
        }
  },
  COUNT_UP(state, product_id){
    state.cart.find(
          function (x){
            if(x.id===product_id){
              x.count = x.count-0
              x.count+=1;
              x.count = x.count<0?0:x.count;
              return x
            }
          }
        );
   state.count = 0;
        for(let x of state.cart){
          state.count += x.count;
        }
  },
  SET_COUNT(state, {product_id, value}){
    if(!value.length){
      value = 0;
    }
    value = value-0;
    state.cart.find(
          function (x){
            if(x.id===product_id){
              x.count = x.count-0
              x.count=value;
              x.count = x.count<0?0:x.count;
              return x
            }
          }
        );
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
