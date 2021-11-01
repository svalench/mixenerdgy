<template>
<div class="container" >
  <div class="row" style="padding-top:50px; ">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
  <el-breadcrumb-item>Сертификаты</el-breadcrumb-item>
</el-breadcrumb>
  </div>
  <div class="row" style="padding-top:30px; ">
    <div class="col-3">
      <cert-filter></cert-filter>
    </div>
    <div class="col">
  <div class="row" >
    <div class="col-4" style=" margin:0; height: 100%;" v-for="(c,k) in certificates" :key="k">
      <certificate-card :certificate="c"></certificate-card>
    </div>
  </div>
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
</template>

<script>
import CertificateCard from "../components/certComponents/certificateCard";
import CertFilter from "../components/certComponents/certFilter";
export default {
  components: {CertFilter, CertificateCard},
  name: "certificatesPage",
  data(){
    return{
      currentPage:1,
      count:0,
      certificates:[],
      loading:false,
      limit: 9,
      offset:0,
    }
  },
  async fetch(){
    this.currentPage = this.$route.query['page']?this.$route.query['page']:1;
    await this.getCertificates();
  },
   watch:{
    '$route.query'(nv){
      this.currentPage = nv.page?nv.page:1;
      this.getCertificates()
    }
  },
  mounted() {
     this.getCertificates();
  },
  methods:{
        /**
     * постраничный
     */
    paginate(){
      this.$router.push({ path: this.$route.path, query: { page: this.currentPage}})
      this.getCertificates()
    },
    /**
     * метод получает список сертификатов с бэка
     * @returns {Promise<void>}
     */
    async getCertificates(){
      let params = '';
       if(this.$route.query.filter){
        if(Array.isArray(this.$route.query.filter)){
          for(let c of this.$route.query.filter){
          params += `&parent_ch=${c}`
        }
        }else{
          params += `&parent_ch=${this.$route.query.filter}`
        }

      }
      this.offset = (this.currentPage-1)*this.limit;
      let res = await this.$axios.get(`/catalog/certificates/?limit=${this.limit}&offset=${this.offset}${params}`).catch(e=>{
        console.error(e);
        this.$message({message:'Произошла ошибка загрузки данных', type:'error'})
      });
      this.count = res.data.count;
      this.certificates = res.data.results;
    },
  }

}
</script>

<style scoped>

</style>
