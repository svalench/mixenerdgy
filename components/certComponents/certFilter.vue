<template>
<div>
  <b-skeleton-wrapper :loading="show">
            <template #loading>
              <b-card title="Фильтр">
                <div>
                 <b-skeleton width="85%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="65%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="70%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="80%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="60%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="90%" class="skelet-cl"></b-skeleton>
                </div>
              </b-card>
            </template>
     <b-card title="Фильтр" style="background-color: white">
        <b-form-checkbox-group
              v-model="selected"
              stacked
              name="flavour-1"
            >
          <b-row v-for="(val,nn) in filters" :key="nn">
              <b-form-checkbox  size="lg" ref="checkb" @change="setFilter()" :value="val.id">{{val.name}}</b-form-checkbox>
        </b-row>
        </b-form-checkbox-group>
         </b-card>
  </b-skeleton-wrapper>
</div>
</template>

<script>
export default {
  name: "certFilter",
  data(){
    return{
      filters:[],
      selected:[],
      show:false,
    }
  },
  mounted() {
    this.getSelected()
    this.getFilters();
  },
  watch: {
    '$route.query'(nv) {
      this.getSelected()
    },
  },
  methods:{
    /**
     * получение значений фильтров
     * @returns {Promise<void>}
     */
    async getFilters(){
        this.show = true;
      let data = await this.$axios.get(`/catalog/categories/?limit=99999`);
      console.log(data)
        this.filters = data.data.results;
      // this.filters.push({name:"Без категории",id:0})
        this.show = false;
      },
     /**
       * добавление фильтров в путь
       */
      setFilter(){
        this.$router.push({ path: this.$route.path, query: { filter: JSON.parse(JSON.stringify(this.selected)), page: 1 }})
      },
      getSelected(){
        var selected = JSON.parse(JSON.stringify(this.$route.query.filter?this.$route.query.filter:[]))
        if(Array.isArray(selected)){
          selected = selected.map(x=>(x-0))
        }else{
          selected = [selected-0]
        }
        this.selected = selected
      },
  },
}
</script>

<style scoped>

</style>
