<template>
<div>
  <div class="top_bar">
			<div class="container">
				<div class="row">
					<div class="col d-flex flex-row">
						<div class="top_bar_contact_item">
              <div class="top_bar_icon"><i class="fa fa-phone"></i></div>

              <div class="top_bar_menu">
								<ul class="standard_dropdown top_bar_dropdown">
									<li>
										<a href="tel:+375173926366">+375173926366</a>
										<ul class="list-phones">

                         <span class="phones_line">
                           <i class="fab fa-viber"></i>
                            <a style="display: inline-block; margin-left: 5px;" href="viber:+375173926366">+375297386466</a>
                         </span>

                       <span class="phones_line">
                           <img src="/images/phone.png" alt="">
                            <a style="display: inline-block; margin-left: 5px;" href="tel:+375293774710">+375293774710</a>
                         </span>


										</ul>
									</li>
								</ul>
							</div>

            </div>


						<div class="top_bar_contact_item"><div class="top_bar_icon"><img src="/images/mail.png" alt=""></div><a href="mailto:mixenerdgy@gmail.com">mixenerdgy@mail.ru</a></div>
						<div class="top_bar_content ml-auto">
							<div class="top_bar_menu">
								<ul class="standard_dropdown top_bar_dropdown" style="text-align: center;">
									<li>
										<span><i class="far fa-clock"></i><a style="display: inline-block; margin-left: 5px;" href="#">8.30-17.30<i class="fas fa-chevron-down"></i></a></span>
										<ul>
											<li class="timework_line">Понедельник  - с 8.30 до 17.30</li>
											<li class="timework_line">Вторник  - с 8.30 до 17.30</li>
											<li class="timework_line">Среда  - с 8.30 до 17.30</li>
											<li class="timework_line">Четверг  - с 8.30 до 17.30</li>
											<li class="timework_line">Пятница  - с 8.30 до 17.30</li>
											<li class="timework_line">Суббота  -  Выходной</li>
											<li class="timework_line">Воскресенье  -  Выходной</li>
										</ul>
									</li>
								</ul>
							</div>
<!--							<div class="top_bar_user">-->
<!--								<div class="user_icon"><img src="/images/user.svg" alt=""></div>-->
<!--								<div><a href="#">Register</a></div>-->
<!--								<div><a href="#">Sign in</a></div>-->
<!--							</div>-->
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
.timework_line{
  height: 100%;
  width: 250px;
  padding-top: 2%;
}
.phones_line{
  height: auto;
  width: auto;
 margin: 5px;
}
.list-phones{
  width: auto;
}
</style>
