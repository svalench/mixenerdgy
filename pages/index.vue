<template>
<div>
  	<!-- Banner -->

	<div class="banner container" style="">
  <b-row class="carusel-row">
      <b-col offset="0" offset-lg="3">
         <el-carousel :interval="4000">
          <el-carousel-item v-for="item in sliderImages" :key="item">
            <el-image  style="width: 100%; height: 100%" :src="item" :fit="'contain'"></el-image>
          </el-carousel-item>
        </el-carousel>

      </b-col>
  </b-row>
	</div>
  <div class="characteristics">
		<div class="container">
			<div class="row">

				<!-- Char. Item -->
				<div class="col-lg-3 col-md-6 char_col">

					<div class="char_item d-flex flex-row align-items-center justify-content-start">
						<div class="char_icon"><img src="/images/char_1.png" alt=""></div>
						<div class="char_content">
							<div class="char_title">Доставка</div>
							<div class="char_subtitle">по г. Минску, а также во все регионы РБ</div>
						</div>
					</div>
				</div>

				<!-- Char. Item -->
				<div class="col-lg-3 col-md-6 char_col">

					<div class="char_item d-flex flex-row align-items-center justify-content-start">
						<div class="char_icon"><img src="/images/char_2.png" alt=""></div>
						<div class="char_content">
							<div class="char_title">Прямые</div>
							<div class="char_subtitle">поставки сантехники  от изготовителей</div>
						</div>
					</div>
				</div>

				<!-- Char. Item -->
				<div class="col-lg-3 col-md-6 char_col">

					<div class="char_item d-flex flex-row align-items-center justify-content-start">
						<div class="char_icon"><img src="/images/char_3.png" alt=""></div>
						<div class="char_content">
							<div class="char_title">низкие цены</div>
							<div class="char_subtitle">и гибкая система скидок </div>
						</div>
					</div>
				</div>

				<!-- Char. Item -->
				<div class="col-lg-3 col-md-6 char_col">

					<div class="char_item d-flex flex-row align-items-center justify-content-start">
						<div class="char_icon"><img src="/images/char_4.png" alt=""></div>
						<div class="char_content">
							<div class="char_title">Более 3 000</div>
							<div class="char_subtitle">позиций в нашем ассортименте</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


  <banner_index></banner_index>


<!-- Brands -->
  <div class="brands">
		<div class="container">
      <div class="row">
        <div class="col">
					<div class="brands_slider_container">
        <slick class=" brands_slider" style="width: 100%;"
              ref="slick"
              :options="slickOptions"
              @afterChange="handleAfterChange"
              @beforeChange="handleBeforeChange"
              @breakpoint="handleBreakpoint"
              @destroy="handleDestroy"
              @edge="handleEdge"
              @init="handleInit"
              @reInit="handleReInit"
              @setPosition="handleSetPosition"
              @swipe="handleSwipe"
              @lazyLoaded="handleLazyLoaded"
              @lazyLoadError="handleLazeLoadError">
          <div  style="margin-top: 26%;" v-for="i in 8" :key="i" ><el-image style="width: 50%;" :src="`/images/brands/img_${i}.png`" :fit="'scale-down'" alt=""></el-image></div>
            </slick>
            <!-- Brands Slider Navigation -->
						<div class="brands_nav brands_prev" @click="prev"><i class="fas fa-chevron-left"></i></div>
						<div class="brands_nav brands_next" @click="next"><i class="fas fa-chevron-right"></i></div>
          </div>
        </div>
      </div>
		</div>
	</div>


</div>
</template>

<script>
import banner_index from '~/components/index/banner_index.vue';
import 'slick-carousel/slick/slick.css';
import Slick from 'vue-slick';
export default {
  components: {banner_index, Slick},
  data(){
    return{
      slickOptions: {
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: false,
        infinite: false,
         arrows: false,
                // Any other options that can be got from plugin documentation
            },
      categories:[],
      slide:null,
      sliderImages:[
        "/img/36-625.png",
        "/img/shark_baby.png",
        "/img/pomidrus.png",
        "/img/pumps.png",
      ]
    }
  },
  methods:{
     next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
       // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
     handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
  }
}
</script>
<style>
.carusel-row{
  /*max-height: 400px;*/
}
.carusel-row img {
  /*height: 300px;*/
}

</style>
