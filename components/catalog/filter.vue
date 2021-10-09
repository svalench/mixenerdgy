<template>
<div  class="accordion" role="tablist" >
        <client-only>
         <b-card v-for="(f,n) in filters" :key="n" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block @click="openAccordion(n)" variant="outline-primary"> {{f.name}}</b-button>
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
          </client-only>
      </div>
</template>

<script>
export default {
  name: "filter_my",
  data(){
    return{
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
      let data = await this.$axios.get(`/cat/characterisitcs?category=${this.$route.params.id}`)
        this.filters = data.data;
      },
      setFilter(val){
        this.$router.push({ path: this.$route.path, query: { filter: this.selected, page: 1 }})
      }
  }
}
</script>

<style scoped>

</style>
