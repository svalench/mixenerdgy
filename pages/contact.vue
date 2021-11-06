<template>
<div class="container" >
  <div class="row" style="padding-top:30px; ">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
  <el-breadcrumb-item>Контакты</el-breadcrumb-item>
</el-breadcrumb>
  </div>
  <div class="row" style="padding-top:30px;">
    <div class=" col-lg-6 col-xs-12" style=" overflow: auto;">
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
 +37529-738-64-66<br>
 +37529-377-47-10<br>
тел/факс: 8 (017) 39-26-366<br>
          <h4>По e-mail:</h4>
<span>info@mixenerdgy.by</span> <br>
<span>mixenerdgy@mail.ru</span>
          </div>
      </div>
    </div>
  </div>
    <div class="row align-content-center">
      <div>
     	<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e610803a4d59a683c1b1b4076f418568a1606d3ce37923db82f75ec01727438&amp;source=constructor" width="1200" height="700" frameborder="0"></iframe>
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
