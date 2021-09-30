<template>
<div class="container" >
  <div class="row" >
    <div class="col-1 d-xs-block d-sm-none" > > </div>
    <div class="col-3 bv-d-xs-down-none bv-d-sm-down-none"  style="padding-bottom: 20px; overflow: auto;">
    <div v-for="(c,k) in categories" :key="k" class="item-menu" @click="saveCatShow($event,c)" @mouseover="showSecondLevel(c)">
      <h2 style="font-size: 18px; padding: 25px;">{{c.name}}</h2>
    </div>
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
      categories:[],
    }
  },
  async fetch(){
    await this.getCategories()
  },
  methods:{
    async getCategories(){
        let data = await this.$axios.get('/catalog/categories/');
        this.categories = data.data.results;
    },
    showSecondLevel(cat){
      console.log(cat)
    },
    saveCatShow(e,cat){
      let arrr = document.getElementsByClassName('active-menu')
      if(e.path[0].classList.contains('active-menu')){
          e.path[0].classList.remove('active-menu')
      }else {
        for(let i of arrr){
        i.classList.remove('active-menu')
      }
        e.path[0].classList.add('active-menu')
      }

    }
  }
}
</script>

<style scoped>
.item-menu{
  transition: all 700ms ease;
  cursor: pointer;
  text-align: center;
}
.item-menu:hover{
  box-shadow: 2px 8px 12px #0e8ce4;
  color: #0d82d3;
}
.active-menu{
   color: whitesmoke;
  background-color: #0d82d3;
}
</style>
