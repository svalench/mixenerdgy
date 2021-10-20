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
									<form action="#" class="header_search_form clearfix">
										<b-form-input type="search"  required="required" class="header_search_input" placeholder="Введите название или артикул..."></b-form-input>

<!--										<div class="custom_dropdown">-->
<!--											<div class="custom_dropdown_list">-->
<!--												<span class="custom_dropdown_placeholder clc">Все</span>-->
<!--												<i class="fas fa-chevron-down"></i>-->
<!--												<ul class="custom_list clc">-->
<!--													<li><a class="clc" href="#">Все</a></li>-->
<!--													<li><a class="clc" href="#">Категории</a></li>-->
<!--													<li><a class="clc" href="#">Laptops</a></li>-->
<!--													<li><a class="clc" href="#">Cameras</a></li>-->
<!--													<li><a class="clc" href="#">Hardware</a></li>-->
<!--													<li><a class="clc" href="#">Smartphones</a></li>-->
<!--												</ul>-->
<!--											</div>-->
<!--										</div>-->
										<button type="submit" class="header_search_button trans_300" value="Submit"><img src="/images/search.png" alt=""></button>
									</form>
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
  name: "head_main"
}
</script>

<style scoped>

</style>
