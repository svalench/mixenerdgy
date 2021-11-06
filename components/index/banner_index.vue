<template>
  <div>
    <!-- Popular Categories -->

	<div class="popular_categories">
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<div class="popular_categories_content">
						<div class="popular_categories_title">Популярное</div>
						<div class="popular_categories_slider_nav">
							<div @click="prev" class="popular_categories_prev popular_categories_nav"><i class="fas fa-angle-left ml-auto"></i></div>
							<div @click="next" class="popular_categories_next popular_categories_nav"><i class="fas fa-angle-right ml-auto"></i></div>
						</div>
						<div class="popular_categories_link"><nuxt-link to="catalog">Весь каталог</nuxt-link></div>
					</div>
				</div>

				<!-- Popular Categories Slider -->

				<div class="col-lg-9">
					<el-carousel ref="slider" :arrow="'never'" @next="next" :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="(item,k) in list" :key="k">
<!--              <b-card overlay img-top style="height: 100%; width: 100%;">-->
<!--&lt;!&ndash;                <b-card-img width="50%;" :src=""></b-card-img>&ndash;&gt;-->
<!--                <b-row>-->
<!--                  <b-col cols="6" offset="3">-->
<!--                    <el-image   :src="`https://api.mixenerdgy.by/media/${item.img}`" :fit="'contain'"></el-image>-->
<!--                  </b-col>-->
<!--                  </b-row>-->
<!--                <b-row align-v="center">-->
<!--                  <b-col><b-card-title style="font-size: 18px; text-align: justify-all;">{{item.name}}</b-card-title></b-col>-->
<!--                </b-row>-->
<!--                <b-row align-v="center" style="margin-top: 10%;">-->
<!--                  <b-col cols="5">-->
<!--                    <b-card-sub-title>{{item.article}}</b-card-sub-title>-->
<!--                  </b-col>-->
<!--                  <b-col>-->
<!--                    <b-button style="background-color: #0d82d3;" @click="goToProduct(item.id)">перейти</b-button>-->
<!--                  </b-col>-->
<!--                </b-row>-->
<!--              </b-card>-->



              <div class="card mx-auto mb-3" style="height: 100%; width: 100%;">
                <!-- Изображение -->
                <el-image style="height: 150px" class="card-img-top" :fit="'contain'" :src="`https://api.mixenerdgy.by/media/${item.img}`"></el-image>
                <!-- Текстовый контент -->
                <div class="card-body h-100">
                    <h4 class="card-title">{{item.name}}</h4>
                    <p class="card-text">{{item.card.description.substr(0,100)}}{{item.card.description.length>100?'...':''}}
                    <a :href="`/catalog/product/${item.id}`" v-if="item.card.description.length>100">читать далее</a>
                    </p>

                </div>
                <div class="card-footer">
                   <a :href="`/catalog/product/${item.id}`" class="btn btn-primary align-content-end">Перейти</a>
                </div>
            </div><!-- Конец карточки -->
            </el-carousel-item>
          </el-carousel>
				</div>
			</div>
		</div>
	</div>


</div>
</template>

<script>
export default {
  name: "banner",
  data(){
    return{
      list:[],
    }
  },
  async fetch(){
    await this.getRandomProducts();
  },
  methods:{
    next(){
      this.$refs.slider.next();
    },
     prev(){
      this.$refs.slider.prev();
    },
    goToProduct(id){
      this.$router.push(`/catalog/product/${id}`)
    },
    async getRandomProducts(){
      let res = await this.$axios.get('/product/random/')
      this.list = res.data.results;
      console.log(this.list)
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
