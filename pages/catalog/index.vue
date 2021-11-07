<template>
<div class="container" >
  <div class="row" style="padding-top:30px; ">
    <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
  <el-breadcrumb-item>Каталог</el-breadcrumb-item>
</el-breadcrumb>
  </div>
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
          <div class="col-4-sm col-12" v-for="(i,k) in tempSecondCat" :key="k">
            <b-card class=" card-style-subcat"  style="text-align: center;" @click="gotocat(i.id)">
              <b-card-header>{{i.name}}</b-card-header>
              <b-card-body>
              </b-card-body>
            </b-card>
          </div>
        </div>
        <div v-else>
             <div class="col name_group" v-for="(i,k) in categories" :key="k">
                <div style="display: block;"><h2 style="font-size: 24px;">{{i.name}}</h2><hr></div>
               <div class="row">
                 <div style="margin-top: 20px;" class="col-lg-4 col-12" v-for="(j,c) in i.child" :key="c">
            <b-card class=" card-style-subcat" @click="gotocat(j.id)"
              :img-alt="j.name"
            >
              <b-row align-v="center">
                <b-col cols="5">
                   <b-card-img :src="j.img" style="width: 50%" fluid></b-card-img>
                </b-col>
                <b-col cols="7" style="white-space: pre-line;">
                  <b-card-title style="font-size: 16px;padding-top: 10px;">{{j.name}}</b-card-title>
                </b-col>
              </b-row>

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
    /**
     *  переход в категорию
     * @param id
     */
    gotocat(id){
      this.$router.push(`/catalog/${id}`)
    },
    /**
     * получение категорий с API
     * @returns {Promise<void>}
     */
    async getCategories(){
        let data = await this.$axios.get('/catalog/categories/');
        this.categories = data.data.results;
    },
    /**
     * not ued todo delete this
     */
    showSeted(){
      this.timer = setTimeout(()=>{
        this.tempSecondCat = JSON.parse(JSON.stringify(this.seted))
      },200)

    },
    /**
     * todo delete
     * @param cat
     */
    showSecondLevel(cat){
      clearTimeout(this.timer)
      this.tempSecondCat = JSON.parse(JSON.stringify(cat.child))
    },
    /**
     * not ued todo delete this
     */
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
    /**
     * not ued todo delete this
     */
    hideSelected(){
      if(this.tempSecondCat.length) {
        this.$refs.menu.classList.remove('active-menu-list')
        this.$refs.cats.classList.remove('global-childcat-hover')
      }
       this.showSeted()
    },
    /**
     * not ued todo delete this
     */
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
.card-style-subcat img{
  width: 30%;
  margin-left: 33%;
}
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
.card-style-subcat h4 {
  font-size: 20px;
}
.card-style-subcat{
  height: 90%;
  min-height: 100px;
  transition: all 700ms ease;
  cursor: pointer;
}
.card-style-subcat:hover{
  box-shadow: 10px 12px 14px #0e8ce4;
  color: #0d82d3;
}
.item-menu{
  transition: all 500ms;
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
h4{
  text-align: center;
}
.name_group{
margin-top: 50px;
  padding: 10px;
  transition: .4s;
}
.name_group:hover{
  color: #0d82d3;
}
</style>
