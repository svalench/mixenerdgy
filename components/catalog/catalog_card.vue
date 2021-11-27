<template>

<b-card class="card-product"
  :img-alt="product.name"
  >
  <nuxt-link :to="`/catalog/product/${product.id}/`">
    <b-card-img :src="`https://api.mixenerdgy.by/media/${product.img}`"></b-card-img>
  </nuxt-link>
  <nuxt-link :to="`/catalog/product/${product.id}/`"><b-card-title>{{product.name}}</b-card-title></nuxt-link>
   <b-card-text>
     <b-card-sub-title style="font-size: 15px; padding: 5px;">Артикул: {{product.article}}</b-card-sub-title>
      <div class="row">
        <div class="col-6 ">
          <b-input-group  >
            <b-input-group-prepend>
              <b-btn @click="count--" variant="outline-primary" size="sm" >-</b-btn>
            </b-input-group-prepend>
            <b-form-input type="number" size="sm" style="color: #333333; text-align: center;" min="0.0" v-model="count"></b-form-input>
            <b-input-group-append>
              <b-btn @click="count++" variant="outline-primary" size="sm" >+</b-btn>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div class="col-6" style="font-size: 12px; text-align: center; display: table-cell; vertical-align: middle;">
           <b-button @click="addToCart"  variant="outline-primary" size="sm" >
              {{in_cart?'Добавлено':'В корзину'}}
          </b-button>

        </div>
      </div>

        <div class="row" style="margin-top:10px;">
          <div class="col-10">

        </div>
      </div>


   </b-card-text>

  <template #footer><nuxt-link :to="`/catalog/product/${product.id}/`">
    <div class="row">
      <div class="col-6 offset-3">
        <b-button size="sm"   type="primary">подробнее</b-button>
      </div>

    </div>
     </nuxt-link> </template>

</b-card>

</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  components: {

    },
  data(){
    return{
      count:0,
      in_cart:false,
    }
  },
  name: "catalog_card",
  props:['product'],
  watch:{
    count(nv){
      if(nv<0){
        this.count=0;
      }
    },
    cart(nv){
      this.checkInCart();
    }
  },
   mounted() {
    this.checkInCart();
  },
  computed:{
     ...mapGetters({
        cart:'cart/cart',
      }),
  },
  methods:{
     ...mapActions({
           ADD_TO_CART: 'cart/ADD_TO_CART'
        }),
    addToCart(){
        let cart = {count:this.count, product:this.product, id:this.product.id}
        this.ADD_TO_CART(cart);
        this.in_cart = true;
        this.count = 0;
         this.$message({message:'Добавлено', type: 'success'});
    },
    checkInCart(){
       let self = this;
      let ccc = this.cart.find(
          function (x){
            if(x.id===self.product.id){
              return x
            }
          }
        );
      if(ccc!==undefined){
        this.in_cart = true;
      }else{
        this.in_cart = false;
      }
    }
  },
}
</script>

<style scoped>
.card-product img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 150px;
  padding: 5%;
   object-fit: contain;

}
.card-product{
  cursor: pointer;
  margin-bottom: 10%;
  transition: all .2s;
}
.card-product:hover{
  box-shadow: 5px 5px 20px #0d82d3;
}
.card-title{
  text-align: center;
  font-size: 15px;
  height: 100px;
  padding-top: 5%;
  vertical-align: middle;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.count-value{

}
</style>
