<template>
<div class="header_main">
			<div class="container">
				<div class="row">

					<!-- Logo -->
					<div class="col-10 col-lg-3 col-xl-3 order-1">
						<div class="logo_container">
<!--							<div class="logo"><a href="#"><span style="border-radius:5px; padding: 2px; color: whitesmoke; background-color: #0e8ce4">Mix</span>Enerdgy<span><i class="fas fa-tint"></i></span> </a></div>-->
							<div class="logo"><a href="#"><img class="logo-image"  src="/logo/logo.svg"></a></div>
						</div>
					</div>

					<!-- Search -->
					<div class="col-lg-7 col-12 order-lg-2 order-3 text-lg-left text-right">
						<div class="header_search">
							<div class="header_search_content">
								<div class="header_search_form_container">
									<div action="" class="header_search_form clearfix">
                    <el-popover
                      placement="top-start"
                      width="600"
                      v-model="visible"
                       trigger="manual"
                      >
                      <el-input type="search" v-on:keyup.native.enter="goToSearch" @blur="visible=false" @focus="showSearch" v-model="search" slot="reference" class="header_search_input" style="height: 50px;" placeholder="Введите название или артикул..."></el-input>
                    <div style="overflow: auto; height: 50vh;">
                       <b-skeleton-wrapper :loading="show">
                        <template #loading>
                          <b-card v-for="i in 2">
                            <b-card-title>
                            <b-skeleton width="25%" height="70%" style="margin-right: 5%;"></b-skeleton>
                            </b-card-title>
                             <b-card-text>
                               <b-skeleton width="35%" height="10%" style="margin-right: 5%;"></b-skeleton>
                               <b-skeleton width="55%" height="15%" style="margin-right: 5%;"></b-skeleton>
                               <b-skeleton width="25%" height="15%" style="margin-right: 5%;"></b-skeleton>
                            </b-card-text>
                          </b-card>
                        </template>
                         <div v-if="products.length">
                         <div  v-for="(p,k) in products" :key="k">
                         <nuxt-link :to="`/catalog/product/${p.id}/`">
                      <el-card>
                        <b-row>
                          <b-col cols="2">
                            <el-image  :src="`https://api.mixenerdgy.by/media/${p.img}`"></el-image>
                          </b-col>
                          <b-col><span>{{p.name}}</span></b-col>
                          <b-col>
                             <el-button @click="goToProduct(p.id)" style="float: right; padding: 3px 0" type="text">перейти</el-button>
                          </b-col>
                        </b-row>
                      </el-card>
                      </nuxt-link>
                           </div>
                           <nuxt-link :to="`/search?search=${this.search}`">
                           <div class="w-100 align-content-center"><span>
                             Найдено совпадений - {{count}}. Перейти.
                           </span></div>
                             </nuxt-link>
                         </div>
                         <div  v-else>не найдено совпадений</div>
                       </b-skeleton-wrapper>
                    </div>
                    </el-popover>
										<button @blur="visible=false" @click="goToSearch"  class="header_search_button trans_300" value="Submit"><img src="/images/search.png" alt=""></button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Wishlist -->
					<div class="col-2 order-2 text-lg-left text-right">
						<div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
							<!-- Cart -->
							<div class="cart">
                <cart-component-header></cart-component-header>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import CartComponentHeader from "./CartComponentHeader";
export default {
  name: "head_main",
  components: {CartComponentHeader},
  data(){
    return{
      visible:false,
      search:"",
      products:[],
      show:false,
      count:0,
    }
  },
  watch:{
    search(nv){
      if(nv.length>3){
        this.startSearch();
      }else{
        this.visible =false;
      }
    },
    '$route.query'(nv){
      this.visible =false;
    },
  },
  methods:{
    goToSearch(){
      console.log(this.search)
      this.$router.push(`/search?search=${this.search}`)
    },
    showSearch(){
       if(this.search.length>3){
        this.visible =true;
      }else{
        this.visible =false;
      }
    },
    startSearch(){
      this.visible =true;
      this.searchProducts();
    },
    async searchProducts(){
      this.show = true;
      let data = await this.$axios.get(`/product/product/?limit=10&search=${this.search}`);
      this.count = data.data.count
      this.products = data.data.results;
      this.show = false;
    },
    goToProduct(id){
      this.$router.push(`/catalog/product/${id}/`);
      this.visible = false;
    }
  }
}
</script>

<style scoped>
.el-input__inner{
  height: 50px;
  line-height: 50px;
}
</style>
