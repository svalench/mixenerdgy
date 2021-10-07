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
        <b-button style="background-color: #0d82d3" type="primary">подробнее</b-button>
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
