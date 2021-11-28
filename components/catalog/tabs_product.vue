<template>
<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab v-for="(i,k) in data" :title="i.name" :key="k" >
        <b-card-text v-if="Array.isArray(i.data)">
            <div><li v-for="(d,c) in i.data" :key="c">{{d.characterisitc.name}}: {{d.value}} {{d.unit!=='-'?d.unit:''}}</li></div>
        </b-card-text>
        <b-card-text v-else>
          <div>{{i.data}}</div>
          </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
export default {
  name: "tabs_product",
  data(){
    return{

    }
  },
  props:['data']
}
</script>

<style scoped>

</style>
