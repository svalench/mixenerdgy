<template>
  <div class="container">
    <div class="row" style="padding-top:30px; ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
        <el-breadcrumb-item>Контакты</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row" style="padding-top:30px;">
      <div class=" col-lg-5 col-xs-12" style=" overflow: auto;">
        <div class="row">
          <div style="display: block;">
            <h4 style="font-size: 28px; color: #0d82d3; padding: 10px;">Склад (пункт самовывоза): </h4>
            <h5>г. Минск, ул. Артиллеристов, дом № 8, корпус 3, офис 17</h5>
          </div>
        </div>
        <div class="row">
          <div style="font-size: 18px;">
            <h1 style="font-size: 28px; padding: 10px; color: #0d82d3">Вы можете с нами связаться:</h1>
            <h4>По телефонам:</h4>
            <i class="fa fa-mobile"></i> <a href="tel:+375297386466">+37529-738-64-66</a><br>
            <i class="fa fa-mobile"></i> <a href="tel:+375293774710">+37529-377-47-10</a><br>
            <i class="fa fa-phone"></i> тел/факс: 8 (017) 39-26-366<br>
            <h4>По e-mail:</h4>
            <span><i class="fas fa-envelope"></i> <a href="mailto:info@mixenerdgy.by">info@mixenerdgy.by</a></span> <br>
            <span><i class="fas fa-envelope"></i> <a href="mailto:mixenerdgy@mail.ru">mixenerdgy@mail.ru</a></span>
          </div>
        </div>
      </div>
      <div class="col-lg-7  col-xs-12">
        <div class="row">
          <h4 style="font-size: 28px; color: #0d82d3; padding: 10px;">Реквизиты: </h4><br>

          <p>Юр.адрес/почтовый адрес: 220007, г.Минск, ул. Артиллеристов, дом № 8, корпус 3, офис 17</p>
        </div>
        <div class="row">
          <p>УНП:193243351</p>
        </div>
        <div class="row">
          <p>Счет: BY20ALFA30122474210010270000</p>
        </div>
        <div class="row">
          <p>в ЗАО "АЛЬФА-БАНК" г. Минск, ул. Сурганова, 43-47</p>
        </div>
        <div class="row">
          <p>БИК: ALFABY2X</p>
        </div>
        <div class="row">
          <p> Директор Михашонок Сергей Васильевич, на основании Устава Приказ № 8-К от 19.02.2020г.</p>
        </div>
        <div class="row">
          <div class="col"><p>mixenerdgy@mail.ru</p></div>
          <div class="col"><p> тел/факс:+375173926366</p></div>
          <div class="col"><p>тел:+37529-377-47-10</p></div>
        </div>
 <div class="row"><p><a href="/docs/Реквизиты_МиксЭнерджи.docx">Скачать реквизиты</a></p></div>

      </div>
    </div>
    <div class="row align-content-center">
      <div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e610803a4d59a683c1b1b4076f418568a1606d3ce37923db82f75ec01727438&amp;source=constructor"
          width="1200" height="700" frameborder="0"></iframe>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "contact"
}
</script>

<style scoped>

</style>
