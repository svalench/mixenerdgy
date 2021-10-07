<template>
<div class="container" >
  <div class="row">
    <div class="col-1 d-xs-block d-sm-none" > > </div>
    <div class="col-3 bv-d-xs-down-none bv-d-sm-down-none"  style="max-height: 100vh; overflow: auto;">
    <my_filter></my_filter>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-12 col-lg-4" v-for="(p,k) in products" :key="k">
          <catalog_card :product="p"></catalog_card>
        </div>
      </div>
      <div class="paginator">
       <b-pagination
      v-model="currentPage"
      :total-rows="count"
      :per-page="limit"
      @input="paginate()"
      align="center"
      first-number
        last-number
    ></b-pagination>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import my_filter from "../../components/catalog/filter";
import Catalog_card from "../../components/catalog/catalog_card";
export default {
  name: "catalog",
  components: {Catalog_card, my_filter},
  data(){
    return{
      currentPage: 1,
      limit:9,
      offset:0,
      cat:null,
      count:0,
      products:[],
    }
  },
  async fetch(){
    this.cat = this.$route.params.id;
    this.currentPage = this.$route.query['page']?this.$route.query['page']:1;
    await this.getPorductsList()
  },
  methods:{
    paginate(){
      this.$router.push({ path: this.$route.path, query: { page: this.currentPage }})
      this.getPorductsList()
    },
    async getPorductsList(){
      let params = '';
      this.offset = (this.currentPage-1)*this.limit;
      if(this.cat!==null){
        params += `&parent__category=${this.cat}`
      }
      let data = await this.$axios.get(`/product/product/?limit=${this.limit}&offset=${this.offset}${params}`);
      console.log(`/product/product/?limit=${this.limit}&offset=${this.offset}${params}`)
      console.log(data)
      this.count = data.data.count
      this.products = data.data.results
    }
  }
}
</script>

<style scoped>
.paginator{
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
