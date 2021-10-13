<template>
<b-card class="card-product"
  :img-alt="product.name"
  >
<!--  <b-card-text>-->
<!--      {{product.characteristics_norm[0].characterisitc.name}}  {{product.characteristics_norm[0].value}}-->
<!--    </b-card-text>-->

  <nuxt-link :to="`/catalog/product/${product.id}/`">
    <b-card-img :src="`https://api.mixenerdgy.by/media/${product.img}`"></b-card-img>
  </nuxt-link>
  <nuxt-link :to="`/catalog/product/${product.id}/`"><b-card-title>{{product.name}}</b-card-title></nuxt-link>
   <b-card-text>
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
           <b-button variant="outline-primary" size="sm" >
            <div class="row" style="white-space: pre-line; text-align: center; font-size: 14px; font-weight: 500;">
              <div class="col" style="display: table-cell; vertical-align: middle;margin-top: 1%;">В корзину</div>
            </div>
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
        <b-button size="sm" style="background-color: #0d82d3; font-size: 16px;" type="primary">подробнее</b-button>
      </div>

    </div>
     </nuxt-link> </template>

</b-card>
</template>

<script>
export default {
  data(){
    return{
      count:0,
    }
  },
  name: "catalog_card",
  props:['product'],
  watch:{
    count(nv){
      if(nv<0){
        this.count=0;
      }
    }
  }
}
</script>

<style scoped>
.card-product img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height: 150px;
  padding: 5%;
   object-fit: contain;

}
.card-product{
  cursor: pointer;
  margin-bottom: 10%;
  transition: all .4s;
}
.card-product:hover{
  box-shadow: 5px 5px 20px #0d82d3;
}
.card-title{
  text-align: center;
  font-size: 15px;
  height: 60px;
  display: table-cell;
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
