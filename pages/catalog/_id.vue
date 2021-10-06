<template>
<div class="container" >
  <div class="row">
    <div class="col-1 d-xs-block d-sm-none" > > </div>
    <div class="col-3 bv-d-xs-down-none bv-d-sm-down-none" style=" overflow: auto;">
    <my_filter></my_filter>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-4" v-for="(p,k) in products" :key="k">
          <b-card>
            <b-card-header>{{p.name}}</b-card-header>
            <b-card-body>
              <b-img style="width: 100px" :src="`https://api.mixenerdgy.by/media/${p.img}`"></b-img>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import my_filter from "../../components/catalog/filter";
export default {
  name: "catalog",
  components: {my_filter},
  data(){
    return{
      limit:6,
      offset:0,
      cat:null,
      count:0,
      products:[],
    }
  },
  async fetch(){
    this.cat = this.$route.params.id;
    await this.getPorductsList()
  },
  methods:{
    async getPorductsList(){
      let params = '';
      if(this.cat!==null){
        params += `&parent__category=${this.cat}`
      }
      let data = await this.$axios.get(`/product/product/?limit=${this.limit}&offset=${this.offset}${params}`);
      this.count = data.data.count
      this.products = data.data.results
    }
  }
}
</script>

<style scoped>

</style>
