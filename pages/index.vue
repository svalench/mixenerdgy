<template>
<div>
  	<!-- Banner -->

	<div class="banner container" style="">

  <b-row class="carusel-row">
      <b-col offset="0" offset-lg="3">
        <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"

    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/voda-fon.jpg"
      ></b-carousel-slide>
          <b-carousel-slide
        caption="Second slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/banner_1.jpg"
      ></b-carousel-slide>
          <b-carousel-slide
        caption="Second slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="/images/blog_single_background.jpg"
      ></b-carousel-slide>
    </b-carousel>

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
							<div class="char_subtitle">от 200 бел. рублей</div>
						</div>
					</div>
				</div>

				<!-- Char. Item -->
				<div class="col-lg-3 col-md-6 char_col">

					<div class="char_item d-flex flex-row align-items-center justify-content-start">
						<div class="char_icon"><img src="/images/char_2.png" alt=""></div>
						<div class="char_content">
							<div class="char_title">Гарантия</div>
							<div class="char_subtitle">до 5 лет*</div>
							<div class="char_subtitle" style="color: rgba(52,52,52,0.45); font-size: 10px">*зависит от модели</div>
						</div>
					</div>
				</div>

				<!-- Char. Item -->
				<div class="col-lg-3 col-md-6 char_col">

					<div class="char_item d-flex flex-row align-items-center justify-content-start">
						<div class="char_icon"><img src="/images/char_3.png" alt=""></div>
						<div class="char_content">
							<div class="char_title">Цена</div>
							<div class="char_subtitle">лучшая на рынке</div>
              <div class="char_subtitle" style="color: rgba(52,52,52,0.45); font-size: 10px">при сопоставимой модели</div>
						</div>
					</div>
				</div>

				<!-- Char. Item -->
				<div class="col-lg-3 col-md-6 char_col">

					<div class="char_item d-flex flex-row align-items-center justify-content-start">
						<div class="char_icon"><img src="/images/char_4.png" alt=""></div>
						<div class="char_content">
							<div class="char_title">Новые</div>
							<div class="char_subtitle">Бренды, первый поставщик</div>
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

						<!-- Brands Slider -->

						<div class="owl-carousel owl-theme brands_slider">

							<div class="owl-item"><div class="brands_item d-flex flex-column justify-content-center"><img src="/images/brands_1.jpg" alt=""></div></div>
							<div class="owl-item"><div class="brands_item d-flex flex-column justify-content-center"><img src="/images/brands_2.jpg" alt=""></div></div>
							<div class="owl-item"><div class="brands_item d-flex flex-column justify-content-center"><img src="/images/brands_3.jpg" alt=""></div></div>
							<div class="owl-item"><div class="brands_item d-flex flex-column justify-content-center"><img src="/images/brands_4.jpg" alt=""></div></div>
							<div class="owl-item"><div class="brands_item d-flex flex-column justify-content-center"><img src="/images/brands_5.jpg" alt=""></div></div>
							<div class="owl-item"><div class="brands_item d-flex flex-column justify-content-center"><img src="/images/brands_6.jpg" alt=""></div></div>
							<div class="owl-item"><div class="brands_item d-flex flex-column justify-content-center"><img src="/images/brands_7.jpg" alt=""></div></div>
							<div class="owl-item"><div class="brands_item d-flex flex-column justify-content-center"><img src="/images/brands_8.jpg" alt=""></div></div>

						</div>

						<!-- Brands Slider Navigation -->
						<div class="brands_nav brands_prev"><i class="fas fa-chevron-left"></i></div>
						<div class="brands_nav brands_next"><i class="fas fa-chevron-right"></i></div>

					</div>
				</div>
			</div>
		</div>
	</div>


</div>
</template>

<script>
import banner_index from '~/components/index/banner_index.vue'
export default {
  components: {banner_index},
  data(){
    return{
      categories:[],
      slide:null,
    }
  },
}
</script>
<style>
.carusel-row{
  max-height: 400px;
}
.carusel-row img {
  max-height: 300px;
}
</style>
