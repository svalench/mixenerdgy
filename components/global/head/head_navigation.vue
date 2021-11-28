<template>
		<nav class="main_nav">
			<div class="container">
				<div class="row">
					<div class="col">

						<div class="main_nav_content d-flex flex-row">

							<!-- Categories Menu -->

							<div ref="menu" class="cat_menu_container hidemenu">
								<div class="cat_menu_title d-flex flex-row align-items-center justify-content-start">
									<div class="cat_burger"><span></span><span></span><span></span></div>
									<div class="cat_menu_text">категории</div>
								</div>

								<ul class="cat_menu">
									<li class="hassubs" v-for="(i,k) in menu"  :key="k">
										<a href="#">{{i.name}}<i class="fas fa-chevron-right"></i></a>
										<ul>
                      <div class="row">
                        <div class="col-6" v-for="(j,k) in i.child" :key="k">
                          <nuxt-link :to="`/catalog/${j.id}`"><b-row><b-col cols="3"><b-img :src="j.img" fluid></b-img></b-col>
                        <b-col>{{j.name}}</b-col>
                      </b-row></nuxt-link>
										  </div>
                        </div>
                    </ul>
									</li>
								</ul>
							</div>

							<!-- Main Nav Menu -->

							<div class="main_nav_menu ">
								<ul class="standard_dropdown main_nav_dropdown">
									<li><nuxt-link to="/">Главная<i class="fas fa-chevron-down"></i></nuxt-link></li>
                  <li><nuxt-link to="/catalog">Каталог<i class="fas fa-chevron-down"></i></nuxt-link></li>
                  <li><nuxt-link to="/about">О нас<i class="fas fa-chevron-down"></i></nuxt-link></li>
<!--									<li class="hassubs">-->
<!--										<a href="#">Дилерам в РБ<i class="fas fa-chevron-down"></i></a>-->
<!--										<ul>-->
<!--											<li><a href="#">как стать дилером<i class="fas fa-chevron-down"></i></a></li>-->
<!--											<li><a href="#">форма заявки<i class="fas fa-chevron-down"></i></a></li>-->
<!--											<li><a href="#">преимущества<i class="fas fa-chevron-down"></i></a></li>-->
<!--										</ul>-->
<!--									</li>-->
									<li><nuxt-link to="/certificates">Сертификаты<i class="fas fa-chevron-down"></i></nuxt-link></li>
                  <li><nuxt-link to="/contact">Контакты<i class="fas fa-chevron-down"></i></nuxt-link></li>
								</ul>
							</div>

							<!-- Menu Trigger -->

							<div class="menu_trigger_container ml-auto">
								<div class="menu_trigger d-flex flex-row align-items-center justify-content-end">
									<div class="menu_burger">
										<div class="menu_trigger_text">menu</div>
										<div class="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</nav>
</template>

<script>
export default {
  name: "head_navigation",
  data(){
    return{
      menu:[],
    }
  },
  watch:{
    '$route.path'(nv) {
      var menu = this.$refs.menu;
      if(nv==='/'){
        menu.classList.remove('hidemenu')
      }else{
        menu.classList.add('hidemenu')
      }
    }
  },
  async fetch(){
    await this.getCategories()

  },
  mounted() {
      if(this.$route.path==='/'){
        var menu = this.$refs.menu;
        menu.classList.remove('hidemenu')
      }
      this.onScroll();
       window.addEventListener("scroll", this.onScroll)
  },
  methods:{
    onScroll(e) {
      if(this.$route.path==='/') {
        var menu = this.$refs.menu;
        if (window.top.scrollY > 270) {
          menu.classList.add('hidemenu')
        } else {
          menu.classList.remove('hidemenu')
        }
      }
    },
    async getCategories(){
        let data = await this.$axios.get('/catalog/categories/?ordering=-weight_in_menu');
        this.menu = data.data.results;
        this.$forceUpdate()
    },
  },
  beforeDestroy() {
  window.removeEventListener("scroll", this.onScroll)
},
}
</script>

<style scoped>

</style>
