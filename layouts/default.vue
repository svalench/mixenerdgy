<template>
  <div>
    <header_site style="position: fixed;left: 0;top: 0; width: 100%; z-index: 900"></header_site>
      <div class="page1" >
        <Nuxt/>
      </div>
    <footer_site></footer_site>
    </div>
</template>

<script>
import Header_site from "../components/global/head/header_site";
import Footer_site from "../components/global/footer/footer_site";
export default {
  name: "default",
  components:{
    Footer_site,
    Header_site

  },
  data(){
    return{
        loading:true,
    }
  },
  async fetch() {

  },
  mounted() {
     setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  head() {

    },

}
</script>

