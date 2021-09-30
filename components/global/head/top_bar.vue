<template>
<div>
  <div class="top_bar">
			<div class="container">
				<div class="row">
					<div class="col d-flex flex-row">
						<div class="top_bar_contact_item"><div class="top_bar_icon"><img src="images/phone.png" alt=""></div><a href="tel:+375298940113">+375(29)8940113</a></div>
						<div class="top_bar_contact_item"><div class="top_bar_icon"><img src="images/mail.png" alt=""></div><a href="mailto:mixenerdgy@gmail.com">mixenerdgy@gmail.com</a></div>
						<div class="top_bar_content ml-auto">
							<div class="top_bar_menu">
								<ul class="standard_dropdown top_bar_dropdown">
									<li>
										<span><i class="far fa-clock"></i><a style="display: inline-block; margin-left: 5px;" href="#">8.30-17.30<i class="fas fa-chevron-down"></i></a></span>
										<ul>
											<li style="width: 300px; padding: 5%;">Понедельник-пятница  - с 8.30 до 17.30</li>
											<li style="width: 300px; padding: 5%;">суббота, воскресенье  -  Выходной</li>
										</ul>
									</li>
								</ul>
							</div>
							<div class="top_bar_user">
								<div class="user_icon"><img src="images/user.svg" alt=""></div>
								<div><a href="#">Register</a></div>
								<div><a href="#">Sign in</a></div>
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
  name: "top_bar"
}
</script>

<style scoped>

</style>
