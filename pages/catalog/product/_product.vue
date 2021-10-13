<template>
<div>
  <b-container>
  <b-row><h1>{{product.name}}</h1></b-row>
  <b-row>
    <b-col>
      <b-row>
        <b-col><b-img style="margin-top: 10%;" height="300" :src="`https://api.mixenerdgy.by/media/${product.img}`"></b-img></b-col>
        <b-col>
          <div v-for="i in 3" style="display: block; width: 100%; height: 100px; background-color: #333333; margin-top: 20%;"></div>
        </b-col>
      </b-row>
    </b-col>
    <b-col style="text-align: right;">
      <b-row>
        <div style="width: 100%; font-weight: 600;"> <h5 style="font-size: 28px;">Артикул: {{product.article}}</h5></div>
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
           <b-button variant="outline-primary" size="sm" >
            <div class="row" style="white-space: pre-line; text-align: center; font-size: 14px; font-weight: 500;">
              <div class="col" style="display: table-cell; vertical-align: middle;margin-top: 1%;">Добавить в  корзину</div>
            </div>
          </b-button>
        </div>
      </div>
      <b-row>
        {{product.description}}
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
export default {
  name: "_product",
  components: {Tabs_product},
  data(){
    return{
      count:0,
      product:[],
      fortabs:[],
    }
  },
  async fetch(){
    await this.getProduct();
  },
   watch:{
    count(nv){
      if(nv<0){
        this.count=0;
      }
    }
  },
  methods:{
    async getProduct(){
      let data = await this.$axios.get(`/product/product/${this.$route.params.product}/`);
      this.product = data.data;
      console.log(this.product);
      this.fortabs.push({name: 'Характеристики', data: this.product.characteristics_norm})
      this.fortabs.push({name: 'Описание', data: this.product.description})
    }
  }
}
</script>

<style scoped>

</style>
