<template>
<div>
      <div class="row main-mobile-big justify-content-center align-content-center">
        <div class="col-6" style="text-align: center; vertical-align: middle;">
          <span class="phones_line">
         <i class="fas fa-phone"></i>
          <a href="tel:+375173926366">+375173926366</a>
          </span>
        </div>
      <div class="col-6" style="text-align: center; vertical-align: middle;">
        <span class="phones_line">
         <i class="fas fa-clock"></i>
          8.30 - 17.30
        </span>
        </div>
      </div>
   <div class="row main-mobile-big justify-content-center align-content-center">
        <div class="col-6" style="text-align: center; vertical-align: middle;">
           <span class="phones_line">
             <i class="fab fa-viber"></i>
              <a style="display: inline-block; margin-left: 5px;" href="viber:+375173926366">+375297386466</a>
           </span>
        </div>
      <div class="col-6" style="text-align: center; vertical-align: middle;">
            <span class="phones_line">
         <i class="fas fa-envelope"></i>
          <a href="mailto:mixenerdgy@mail.ru">mixenerdgy@mail.ru</a>
        </span>
        </div>
      </div>



    <div class="row align-middle main-mobile  justify-content-center align-content-center"  style="text-align: center; vertical-align: middle; color: #0e8ce4;">
      <div class="col-2  " >
        <i @click="drawer2 = true" class="fas fa-align-left" style="font-size: 45px; margin-top: 25%; margin-left: 10%;"></i>
      </div>
       <div class="col-2 offset-1">
         <i class="fas fa-search" style="font-size: 45px; margin-top: 25%;"></i>
      </div>
      <div class="col-2 offset-1" >
         <i class="fas fa-shopping-cart" style="font-size: 45px; margin-top: 25%;"></i>
      </div>
       <div class="col offset-1" >
          <i @click="drawer = true" class="fas fa-align-right" style="font-size: 45px; padding: 15%;"></i>
      </div>
    </div>
   <b-sidebar id="sidebar-1" v-model="drawer" :right="true" title="Меню" backdrop shadow>
      <div class="px-3 py-2">
        <div class="menu-slider"><nuxt-link to="/">Главная</nuxt-link></div>
        <div class="menu-slider"><nuxt-link to="/catalog">Каталог</nuxt-link></div>
        <div class="menu-slider"><nuxt-link to="/about">О нас</nuxt-link></div>
        <div class="menu-slider"><nuxt-link to="/certificates">Сертификаты</nuxt-link></div>
        <div class="menu-slider"><nuxt-link to="/contact">Контакты</nuxt-link></div>
      </div>
    </b-sidebar>
  <b-sidebar id="sidebar-2" v-model="drawer2" title="Каталог" backdrop shadow>
      <div class="px-3 py-2">
        <div class="menu-catalog-slider" @click="openAccordion(k)" v-for="(cat,k) in categories" :key="k">
          {{cat.name}}
          <b-collapse :id="'accordion-'+k" class="mt-2">
            <div class="child-menu" v-for="(c,ke) in cat.child" :key="ke">
                  <nuxt-link :to="`/catalog/${c.id}`"><b-row><b-col cols="3"><b-img :src="c.img" fluid></b-img></b-col>
                     <b-col>{{c.name}}</b-col>
                  </b-row>
                  </nuxt-link>
            </div>
          </b-collapse>
        </div>
      </div>
    </b-sidebar>
</div>
</template>

<script>
export default {
  name: "mobileHeader",
  data(){
    return{
      drawer: false,
      drawer2: false,
      categories:[],
    }
  },
  async fetch(){
    await this.getCategories()
  },
  methods:{
    async getCategories(){
          let data = await this.$axios.get('/catalog/categories/');
          this.categories = data.data.results;
          this.categories.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
        this.$forceUpdate()
    },
     /**
       * ткрытие accordions
       * @param n
       */
    openAccordion(n){
      this.$root.$emit('bv::toggle::collapse', 'accordion-'+n)
    },
  }
}
</script>

<style scoped>
.main-mobile{
  min-height: 10vh;
  min-width: 100%;
}
.main-mobile-big{
  color: #d3dce6;
  background-color: #1e2f4c;
  min-height: 4vh;
}
.menu-slider{
  font-size: 30px;
  padding: 10%;
}
.menu-catalog-slider{
  font-size: 20px;
  padding: 10%;
}
</style>
