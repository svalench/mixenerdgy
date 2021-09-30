<template>
<div class="container" >
  <div class="row">
    <div class="col-1 d-xs-block d-sm-none" > > </div>
    <div class="col-3 bv-d-xs-down-none bv-d-sm-down-none" style=" overflow: auto;">
    <my_filter></my_filter>
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
</template>

<script>
import my_filter from "../../components/catalog/filter";
export default {
  name: "catalog",
  components: {my_filter},
  data(){
    return{

    }
  },
}
</script>

<style scoped>

</style>
