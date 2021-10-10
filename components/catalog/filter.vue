<template>
<div  class="accordion" role="tablist" >
        <client-only>
<!--          <b-overlay :show="show" rounded="sm" :class="show?'spiner-show':''">-->
          <b-skeleton-wrapper :loading="show">
            <template #loading>
              <b-card title="Активные">
                <div style="display: flex">
                <b-skeleton width="25%" height="70%" style="margin-right: 5%;"></b-skeleton>
                <b-skeleton width="25%" height="70%"  style="margin-right: 5%;"></b-skeleton>
                <b-skeleton width="25%" height="70%"  style="margin-right: 5%;"></b-skeleton>
                </div>

              </b-card>
              <b-card title="Фильтр">
                <b-skeleton width="85%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="65%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="70%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="80%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="60%" class="skelet-cl"></b-skeleton>
                <b-skeleton width="90%" class="skelet-cl"></b-skeleton>
              </b-card>
            </template>
          <b-card title="Активные">
            <div v-if="Array.isArray(selected)">
              <b-badge v-for="i in selected">{{i}}</b-badge>
            </div>
            <div v-else>
              <b-badge >{{selected}}</b-badge>
            </div>
          </b-card>
            <b-card title="Фильтр">
         <b-card  v-for="(f,n) in filters" :key="n" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block @click="openAccordion(n)" variant="outline-primary" style=" white-space: pre-line;"> {{f.name}}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+n" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <b-form-checkbox-group
              v-model="selected"
              stacked
              name="flavour-1"
            >
              <b-form-checkbox size="lg" @change="setFilter(val.id)" :value="val.id" v-for="(val,nn) in f.values" :key="nn">{{val.value}} {{val.unit!=='-'?val.unit:''}}</b-form-checkbox>
            </b-form-checkbox-group>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
              </b-card>
            </b-skeleton-wrapper>
<!--            </b-overlay>-->
          </client-only>

      </div>
</template>

<script>
export default {
  name: "filter_my",
  data(){
    return{
      show:false,
      filters:[],
      selected:[],
      options:[
        { text: 'Orange', value: 'orange' },
        { text: 'Orange', value: 'orange' },
        { text: 'Orange', value: 'orange' },
      ],
    }
  },
  async fetch(){
    this.selected = JSON.parse(JSON.stringify(this.$route.query.filter?this.$route.query.filter:[]))
    this.getFilters()
  },
    methods:{
      /**
       * ткрытие фильтров
       * @param n
       */
    openAccordion(n){
      this.$root.$emit('bv::toggle::collapse', 'accordion-'+n)
    },
      /**
       * полчение значение фильтров с бэка
       * @returns {Promise<void>}
       */
      async getFilters(){
        this.show = true;
      let data = await this.$axios.get(`/cat/characterisitcs?category=${this.$route.params.id}`)
        this.filters = data.data;
        this.show = false;
      },
      setFilter(val){
        this.$router.push({ path: this.$route.path, query: { filter: JSON.parse(JSON.stringify(this.selected)), page: 1 }})
      }
  }
}
</script>

<style scoped>
.skelet-cl{
  margin-top: 10%;
}
.spiner-show{
  margin-top: 80%;
}
</style>
