<template>
<b-card class="card-product"
  :img-src="`https://api.mixenerdgy.by/media/${product.img}`"
  :title="product.name"
  :img-alt="product.name"
  >
<!--  <b-card-text>-->
<!--      {{product.characteristics_norm[0].characterisitc.name}}  {{product.characteristics_norm[0].value}}-->
<!--    </b-card-text>-->
  <template #footer>
    <div class="row">
      <div class="col">
        <b-button size="sm" style="background-color: #0d82d3" type="primary">подробнее</b-button>
      </div>
      <div class="col">
        <div><span v-if="product.price>0">{{product.price}}</span></div>
        <div><span v-if="product.price<=0 || product.count<=0" style="font-size: 10px; line-height: 0.0002;">
          <span v-if="product.count<=0">Наличие</span>  <span v-if="product.price<=0">Цену</span>
          уточняйте</span></div>
      </div>
    </div>


      </template>
</b-card>
</template>

<script>
export default {
  name: "catalog_card",
  props:['product'],
}
</script>

<style scoped>
.card-product img{
  width: 50%;
  padding: 5%;
  margin-left: 25%;
}
.card-product{
  min-height: 300px;
  height: 90%;
  cursor: pointer;
  margin-bottom: 10%;
  transition: all .4s;
}
.card-product:hover{
  box-shadow: 5px 5px 20px #0d82d3;
}
</style>
