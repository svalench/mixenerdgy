<template>
<div class="container" >
  <div class="row" >
    <div class="col-1 d-xs-block d-sm-none" > > </div>
<!--    <div class="col-3 bv-d-xs-down-none bv-d-sm-down-none" ref="menu"  style="padding-bottom: 20px; overflow: auto;">-->
<!--    <div v-for="(c,k) in categories" :key="k" class="item-menu" @click="saveCatShow($event,c)" @mouseout="showSeted()" @mouseover="showSecondLevel(c)">-->
<!--      <h2 style="font-size: 18px; padding: 25px;">{{c.name}}</h2>-->
<!--    </div>-->
<!--    </div>-->
    <div class="col  global-childcat" ref="cats"  @mouseout="hideSelected()" @mouseover="saveSelected()">
      <div class="row">
        <div v-if="tempSecondCat.length">
          <div class="col-4" v-for="i in tempSecondCat">
            <b-card class=" card-style-subcat" @click="gotocat(i.id)">
              <b-card-header>{{i.name}}</b-card-header>
              <b-card-body>
              </b-card-body>
            </b-card>
          </div>
        </div>
        <div v-else>
             <div class="col" v-for="i in categories">
                <div style="display: block;"><h2>{{i.name}}</h2><hr></div>
               <div class="row">
                 <div class="col-3" v-for="j in i.child">
            <b-card class=" card-style-subcat" @click="gotocat(j.id)">
              <b-card-header>{{j.name}}</b-card-header>
              <b-card-body>
              </b-card-body>
            </b-card>
          </div>
               </div>
             </div>
        </div>
  </div>
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
      tempSecondCat:[],
      seted:[],
      timer:null,
    }
  },
  async fetch(){
    await this.getCategories()
  },
  methods:{
    gotocat(id){
      this.$router.push(`/catalog/${id}`)
    },
    async getCategories(){
        let data = await this.$axios.get('/catalog/categories/');
        this.categories = data.data.results;
    },
    showSeted(){
      this.timer = setTimeout(()=>{
        this.tempSecondCat = JSON.parse(JSON.stringify(this.seted))
      },200)

    },
    showSecondLevel(cat){
      clearTimeout(this.timer)
      this.tempSecondCat = JSON.parse(JSON.stringify(cat.child))
    },
    saveCatShow(e,cat){
       clearTimeout(this.timer)

      this.showSeted()
      let arrr = document.getElementsByClassName('active-menu')
      if(e.path[0].classList.contains('active-menu')){
          e.path[0].classList.remove('active-menu')
        this.seted = [];
      }else {
        this.seted = cat.child;
        for(let i of arrr){
        i.classList.remove('active-menu')
      }
        e.path[0].classList.add('active-menu')
      }
    },
    hideSelected(){
      if(this.tempSecondCat.length) {
        this.$refs.menu.classList.remove('active-menu-list')
        this.$refs.cats.classList.remove('global-childcat-hover')
      }
       this.showSeted()
    },
    saveSelected(){
      if(this.tempSecondCat.length){
        this.$refs.menu.classList.add('active-menu-list')
        this.$refs.cats.classList.add('global-childcat-hover')
      }

      clearTimeout(this.timer)
    }
  }
}
</script>

<style scoped>
.global-childcat{
  padding: 10px;
  border-radius: 10px;
   transition: all 700ms ease;
}
.global-childcat-hover{
  box-shadow: 20px 2px 40px #0e8ce4;
 }
.active-menu-list{
  box-shadow: 2px 2px 10px #0e8ce4;
}
.card-style-subcat{
  transition: all 700ms ease;
  cursor: pointer;
  margin-bottom: 20px;
}
.card-style-subcat:hover{
  box-shadow: 2px 8px 12px #0e8ce4;
  color: #0d82d3;
}
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
