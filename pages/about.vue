<template>
<div class="container">
  <div class="row" style="padding-top:30px; ">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
  <el-breadcrumb-item>О нас</el-breadcrumb-item>
</el-breadcrumb>
  </div>
  <div class="row" style="padding-top:30px;">

    <span style="font-size: 18px;"><span style="font-size: 20px; color: #0d82d3;">ООО «МиксЭнерджи»</span> основано в 2019 году. Основным направлением нашей деятельности является оптовая поставка
    инженерного и сантехнического оборудования. В своей работе с клиентами и поставщиками мы нацелены на долгосрочные
    взаимовыгодные партнерские отношения, основанные на добросовестном выполнении всех условий договора, взаимном
    доверии и поддержке. Мы поставляем только качественные товары лучших мировых брендов. У нас имеются товары в
    ценовых сегментах от эконома до премиума.
    </span>

    <div style="padding: 5% 0 5% 0;">
<h3 style="font-size: 20px;color: #0d82d3;">
  Преимущества сотрудничества с нами:
  </h3>
  <ul style="font-size: 18px">
    <li>- только качественные товары</li>
    <li>- выгодная цена</li>
    <li>- гибкая система оплаты</li>
    <li>- широкий ассортимент продукции</li>
    <li>- доставка в короткий срок</li>
    <li>- наличие сопроводительных документов</li>
    <li>- офис и склад в одном месте</li>
  </ul>
      </div>
</div>
  <div>
    <h3 style="font-size: 20px;color: #0d82d3;">
  Отзывы о нас:
  </h3>
<div class="" style="overflow: auto; display: flex;">
  <div class="col-3 otzyvy"  v-for="i in 5" :key="i">
    <a :href="`/docs/otzyvy/${i}.pdf`" target="_blank">Увеличить</a>
      <object trusted="yes"
              height="400px" type="application/pdf"
              :data="`/docs/otzyvy/${i}.pdf?#view=FitH&scrollbar=0&toolbar=0&navpanes=0`">
        <p>Insert your error message here, if the PDF cannot be displayed.</p>
      </object>

  </div>

</div>
    </div>

</div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>
.otzyvy{
  margin-right: 20px;
  cursor: pointer;
}
.otzyvy:hover{
  box-shadow: 10px 10px 25px rgba(0,0,0,0.1);
}

otzyvy::-webkit-scrollbar {
  width: 10px;
  background-color: #6e97dc;
}

otzyvy::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #0e8ce4;
}
otzyvy::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #b7def3;
}
</style>
