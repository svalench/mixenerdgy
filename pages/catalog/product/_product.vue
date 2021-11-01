<template>
<div>
  <b-container>
      <div class="row" style="padding-top:50px; ">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/catalog' }">Каталог</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: `/catalog/${cats.id}` }">{{cats.name}}</el-breadcrumb-item>
            <el-breadcrumb-item >{{product.name}}</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
  <b-row style="padding-top:30px; "><h1 style="font-size: 32px;">{{product.name}}</h1></b-row>

  <b-row>
    <b-col cols="7">
      <b-row>
         <p v-if="$fetchState.pending">Loading....</p>
          <galery-product v-else :productItems="product"></galery-product>

      </b-row>
    </b-col>
    <b-col style="text-align: right;">
      <b-row>
        <div style="width: 100%;  font-weight: 600;"> <h5 style="font-size: 22px;">Артикул: {{product.article}}</h5></div>
      </b-row>
      <div class="row" style="margin-top: 5%;">
        <div class="col-4 offset-3">
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
        <div class="col-5" style="font-size: 12px; text-align: center; display: table-cell; vertical-align: middle;">
           <b-button @click="addToCart" variant="outline-primary" size="sm" >
            <div class="row" style="white-space: pre-line; text-align: center; font-size: 14px; font-weight: 500;">
              <div class="col" style="display: table-cell; vertical-align: middle;margin-top: 1%;">Добавить в  корзину</div>
            </div>
          </b-button>
          {{in_cart?'В корзине':''}}
        </div>
      </div>
      <b-row style="padding: 5%; margin-top: 10%; text-align: left;">
         <div><li v-for="(d,c) in product.characteristics_norm" :key="c">{{d.characterisitc.name}}: {{d.value}}</li></div>
      </b-row>
    </b-col>
  </b-row>
    <b-row>
      <tabs_product :data="fortabs" style="width: 100%; margin-top: 10%; margin-bottom: 5%;"></tabs_product>
    </b-row>

    </b-container>
</div>
</template>

<script>
import Tabs_product from "../../../components/catalog/tabs_product";
import GaleryProduct from "../../../components/catalog/GaleryProduct";
import { mapGetters,mapActions } from 'vuex';
export default {
  name: "_product",
  components: {GaleryProduct, Tabs_product},
  data(){
    return{
       count:0,
      in_cart:false,
      product:[],
      fortabs:[],
      cats:{},
      index: null,
    }
  },
  async fetch(){
    await this.getProduct();
  },
  async mounted() {
    this.checkInCart();
  },
  computed:{
     ...mapGetters({
        cart:'cart/cart',
      }),
  },
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
  methods:{
    ...mapActions({
           ADD_TO_CART: 'cart/ADD_TO_CART'
        }),
    async getProduct(){
      let data = await this.$axios.get(`/product/product/${this.$route.params.product}/`);
      this.product = data.data;
      this.fortabs = [];
      this.fortabs.push({name: 'Характеристики', data: this.product.characteristics_norm})
      this.fortabs.push({name: 'Описание', data: this.product.card!==undefined?this.product.card.description:'нет описания'})
      let cats = await this.$axios.get(`/catalog/categories/second/${this.product.card.category}/`);
    this.cats = cats.data;
    },
     addToCart(){
        let cart = {count:this.count, product:this.product, id:this.product.id}
        this.ADD_TO_CART(cart);
        this.count = 0;
        this.in_cart = true;
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
  }
}
</script>

<style scoped>
.ima_preview{
   transition: .4s;
  cursor: pointer;
  border: #0d82d3 solid 1px;
}
.images_card{
  transition: .4s;
  cursor: pointer;
  border: #0d82d3 solid 1px;
}
.images_card:hover{
  box-shadow: 10px 12px 14px #0e8ce4;
  color: #0d82d3;
}

.blockfoto::-webkit-scrollbar {
  display: none;
}
</style>
