<template>
	<div class="page_menu">
			<div class="container">
				<div class="row">
					<div class="col">

						<div class="page_menu_content">

							<div class="page_menu_search">
								<form action="#">
									<input type="search" required="required" class="page_menu_search_input" placeholder="Search for products...">
								</form>
							</div>
							<ul class="page_menu_nav">
								<li class="page_menu_item has-children">
									<a href="#">График работы<i class="fa fa-angle-down"></i></a>
									<ul class="page_menu_selection" style="z-index: 999;">
										<li><a href="#">понедельник-пятница - с 8.30 до 17.30<i class="fa fa-angle-down"></i></a></li>
										<li><a href="#">суббота-воскресенье - выходной<i class="fa fa-angle-down"></i></a></li>
									</ul>
								</li>
								<li class="page_menu_item has-children">
									<a href="#">Контакты<i class="fa fa-angle-down"></i></a>
									<ul class="page_menu_selection">
										<li><a href="#">+375298940113<i class="fa fa-angle-down"></i></a></li>
										<li><a href="#">+895465456544<i class="fa fa-angle-down"></i></a></li>

									</ul>
								</li>
								<li class="page_menu_item">
                  <nuxt-link to="/">Home<i class="fa fa-angle-down"></i></nuxt-link>
								</li>
								<li class="page_menu_item"><a href="blog.html">blog<i class="fa fa-angle-down"></i></a></li>
								<li class="page_menu_item"><nuxt-link to="/contact">contact<i class="fa fa-angle-down"></i></nuxt-link></li>
							</ul>

							<div class="menu_contact">
								<div class="menu_contact_item"><div class="menu_contact_icon"><img src="/images/phone_white.png" alt=""></div>+29894585655</div>
								<div class="menu_contact_item"><div class="menu_contact_icon"><img src="/images/mail_white.png" alt=""></div><a href="mailto:mixenerdgy@gmail.com">fastsales@gmail.com</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: "phoen_menu"
}
</script>

<style scoped>

</style>
