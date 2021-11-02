<template>
<div class="container">
  <div class="row" style="padding-top:50px; ">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
  <el-breadcrumb-item >Поиск</el-breadcrumb-item>
</el-breadcrumb>
  </div>

  <div class="row" style="padding-top:30px;">
      <div class="col-12 col-lg-3" v-for="(p,k) in products" :key="k">
        <catalog_card :product="p"></catalog_card>
      </div>
</div>

  <div class="paginator" style="padding-top:20px;padding-bottom: 20px;">
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
</template>

<script>
import Catalog_card from "../components/catalog/catalog_card";
export default {
  name: "search",
  components:{
    Catalog_card,
  },
  data(){
    return{
      show:false,
      products:[],
      count:0,
      currentPage:1,
      limit:16,
      search:null,
      offset:0,
    }
  },
  async fetch(){
    this.currentPage = this.$route.query['page']?this.$route.query['page']:1;
    this.search = this.$route.query['search']?this.$route.query['search']:null;
    if(this.search){
      this.search = encodeURI(this.search);
    }
    await this.getRes()
  },
  watch:{
    '$route.query'(nv){
      this.currentPage = nv.page?nv.page:1;
      this.search = nv.search?nv.search:null;
      this.getRes()
    }
  },
  methods:{
    async getRes(){
      this.show = true;
      let search = "";
      if(this.search!=null){
        search +=`&search=${this.search}`;
      }
      this.offset = (this.currentPage-1)*this.limit;
      let data = await this.$axios.get(`/product/product/?limit=${this.limit}&offset=${this.offset}${search}`);
      this.count = data.data.count;
      this.products = data.data.results;
      console.log(`/product/product/?limit=${this.limit}&offset=${this.offset}${search}`)
      this.show = false;
    },
    paginate(){
      this.$router.push({ path: this.$route.path,
        query: { page: this.currentPage, filter: this.$route.query.filter?this.$route.query.filter:[] }})
      this.getRes()
    },
  },
}
</script>

<style scoped>

</style>
