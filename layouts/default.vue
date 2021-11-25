<template>
  <div>
    <header_site class="d-none d-lg-block" style="position: fixed;left: 0;top: 0; width: 100%; z-index: 200"></header_site>
    <mobile-header class="d-block d-lg-none" style="position: fixed;left: 0;top: 0; width: 100%; z-index: 200; background-color: #ffffff"></mobile-header>
      <div class="page1" >
        <Nuxt  keep-alive :keep-alive-props="{ max: 10 }" />
      </div>
    <footer_site></footer_site>
    </div>
</template>

<script>
import Header_site from "../components/global/head/header_site";
import Footer_site from "../components/global/footer/footer_site";
import MobileHeader from "../components/global/head/mobileHeader";
export default {
  name: "default",
  components:{
    MobileHeader,
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

