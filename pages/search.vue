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
  <button @click="moveTo()" class="hidebtn" ref="upBtn" id="myBtn" title="Go to top">Вверх</button>
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
   mounted() {
    this.onScroll();
   window.addEventListener("scroll", this.onScroll)
  },
   beforeDestroy() {
      window.removeEventListener("scroll", this.onScroll)
      },
  methods:{
     onScroll(e) {
        var btn = this.$refs.upBtn;
        if (window.top.scrollY < 450) {
          btn.classList.add('hidebtn')
        } else {
          btn.classList.remove('hidebtn')
        }
    },
    moveTo () {
        let to = 0
        window.scroll({
          top: to,
          left: 0,
          behavior: 'smooth'
        })
      },
    async getRes(){
      this.show = true;
      let search = "";
      if(this.search!=null){
        search +=`&search=${this.search}`;
      }
      this.offset = (this.currentPage-1)*this.limit;
      let data = await this.$axios.get(`/product/product/?limit=${this.limit}&offset=${this.offset}${search}&ordering=id`);
      this.count = data.data.count;
      this.products = data.data.results;
      this.show = false;
    },
    paginate(){
      this.$router.push({ path: this.$route.path,
        query: { page: this.currentPage, search: this.$route.query.search?this.$route.query.search:'' }})
      this.getRes()
      this.moveTo()
    },
  },
}
</script>

<style scoped>
.hidebtn{
  display: none; /* Hidden by default */
}
#myBtn {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #0e8ce4; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}

#myBtn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
</style>
