import Vue from 'vue'
import Storage from 'vue-ls';

let options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
};

Vue.use(Storage, options);

Vue.ls.on("cartUser", function(val){
    console.log(val,'Vue');
})
