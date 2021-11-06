<template>
  <a target="_blank" :href="certificate.doc">
  <b-card class="cardCert" style="margin: 5%;">
    <b-card-title style="font-size: 20px; min-height: 50px;" >{{certificate.name}}</b-card-title>
    <b-card-sub-title style="font-size: 12px;">{{(new Date(certificate.date_add)).toLocaleString('ru-RU')}}</b-card-sub-title>
    <b-card-text style="overflow:auto;">
          <embed :src="`${certificate.doc}#view=FitH&scrollbar=0&toolbar=0&navpanes=0`" height="200" type="application/pdf">
    </b-card-text>
  </b-card>
    </a>
</template>

<script>
export default {
  name: "certificateCard",
  props:['certificate']
}
</script>

<style scoped>
.cardCert{
  transition: .3s;
}
.cardCert:hover{
  box-shadow: 5px 5px 20px #0d82d3;
}
</style>
