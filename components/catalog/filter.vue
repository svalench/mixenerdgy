<template>
<div  class="accordion" role="tablist" >
        <client-only>
         <b-card v-for="n in 26" :key="n" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block @click="openAccordion(n)" variant="outline-primary"> Фильтр {{n}}</b-button>
      </b-card-header>
      <b-collapse :id="'accordion-'+n" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <b-form-checkbox-group
              v-model="selected"
              stacked
              name="flavour-1"
            >
              <b-form-checkbox size="lg" :value="'orange'+nn" v-for="nn in 12" :key="nn">sdfsdf {{nn}}</b-form-checkbox>
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
      selected:[],
      options:[
        { text: 'Orange', value: 'orange' },
        { text: 'Orange', value: 'orange' },
        { text: 'Orange', value: 'orange' },
      ],
    }
  },
    methods:{
    openAccordion(n){
      console.log(n)
      this.$root.$emit('bv::toggle::collapse', 'accordion-'+n)
    }
  }
}
</script>

<style scoped>

</style>
