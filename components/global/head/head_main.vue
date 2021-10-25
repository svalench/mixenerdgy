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
                      <el-input type="search" v-model="search" slot="reference" class="header_search_input" style="height: 50px;" placeholder="Введите название или артикул..."></el-input>
                    <div style="overflow: auto; height: 50vh;">
                      <el-card v-for="(p,k) in products" :key="k">
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
                    </div>
                    </el-popover>
										<button @click="startSearch"  class="header_search_button trans_300" value="Submit"><img src="/images/search.png" alt=""></button>
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
								<div class="cart_container d-flex flex-row align-items-center justify-content-end">
									<div class="cart_icon" style="width: 51px;">
										<img src="/img/cart.png" alt="">
										<div class="cart_count"><span>0</span></div>
									</div>
									<div class="cart_content">
										<div class="cart_text"><a href="#">Корзина</a></div>
										<div class="cart_price">0.00 руб</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: "head_main",
  data(){
    return{
      visible:false,
      search:"",
      products:[],
      show:false,
      count:0,
    }
  },
  methods:{
    startSearch(){
      this.visible =true;
      this.searchProducts();
    },
    async searchProducts(){
      this.show = true;
      let data = await this.$axios.get(`/product/product/?limit=80&search=${this.search}`);
      this.count = data.data.count
      this.products = data.data.results
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
