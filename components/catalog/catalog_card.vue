<template>
<b-card class="card-product"
  :img-src="`https://api.mixenerdgy.by/media/${product.img}`"
  :title="product.name"
  :img-alt="product.name"
  >
<!--  <b-card-text>-->
<!--      {{product.characteristics_norm[0].characterisitc.name}}  {{product.characteristics_norm[0].value}}-->
<!--    </b-card-text>-->
   <b-card-text>

          <b-input-group >
            <b-input-group-prepend>
              <b-btn @click="count--" variant="outline-warning">-</b-btn>
            </b-input-group-prepend>
            <b-form-input type="number" style="color: #333333; text-align: center;" min="0.0" v-model="count"></b-form-input>
            <b-input-group-append>
              <b-btn @click="count++" variant="outline-info">+</b-btn>
            </b-input-group-append>
          </b-input-group>

   </b-card-text>
  <template #footer>
    <div class="row">
      <div class="col-6 offset-3">
        <b-button size="sm" style="background-color: #0d82d3; font-size: 16px;" type="primary">подробнее</b-button>
      </div>

    </div>


      </template>
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
  height: 200px;
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
  height: 80px;
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
