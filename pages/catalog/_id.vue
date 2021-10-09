<template>
<div class="container" >
  <div class="row">
    <div class="col-1 d-xs-block d-sm-none" > > </div>
    <div class="col-3 bv-d-xs-down-none bv-d-sm-down-none filterblock"  style="max-height: 100vh; overflow: auto;">
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
  watch:{
    '$route.query'(nv){
      this.currentPage = nv.page?nv.page:1;
      this.getPorductsList()
    }
  },
  methods:{
    paginate(){
      this.$router.push({ path: this.$route.path,
        query: { page: this.currentPage, filter: this.$route.query.filter?this.$route.query.filter:[] }})
      this.getPorductsList()
    },
    async getPorductsList(){
      let params = '';
      this.offset = (this.currentPage-1)*this.limit;
      if(this.cat!==null){
        params += `&parent__category=${this.cat}`
      }
      if(this.$route.query.filter){
        console.log(this.$route.query.filter)
        if(Array.isArray(this.$route.query.filter)){
          for(let c of this.$route.query.filter){
          params += `&characteristics=${c}`
        }
        }else{
          params += `&characteristics=${this.$route.query.filter}`
        }

      }
      let data = await this.$axios.get(`/product/product/?limit=${this.limit}&offset=${this.offset}${params}`);
      this.count = data.data.count
      console.log(this.count)
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

.filterblock::-webkit-scrollbar {
  width: 10px;
  background-color: #6e97dc;
}

.filterblock::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #0e8ce4;
}

.filterblock::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #b7def3;
}
</style>
