<template>
  <div >
<div style="cursor:pointer;" @click="$bvModal.show('modal-xl')" class="cart_container d-flex flex-row align-items-center justify-content-end" >
  <div class="cart_icon" style="width: 51px;">
    <img  src="/img/cart.png" alt="">
    <div class="cart_count"><span>{{lenCart}}</span></div>
  </div>
  <div class="cart_content">
    <div class="cart_text"><span>Корзина</span>
    </div>
<!--    <div class="cart_price">0.00 руб</div>-->
    <div class="cart_price">{{count}} единиц</div>
  </div>
</div>
     <b-modal size="xl" id="modal-xl" title="Корзина">
     <div>
       <div style="height: 40vh; overflow: auto;">
         <div v-if="cart.length">
          <b-card v-for="(c,k) in cart" :key="k" >
        <b-row>
          <b-col cols="2">
            <b-card-img :src="`https://api.mixenerdgy.by/media/${c.product.img}`"></b-card-img>
          </b-col>
          <b-col>
            <b-row>
              <b-col><b-card-title>{{c.product.name}}</b-card-title></b-col>
            </b-row>
            <b-row>
               <b-col><b-card-sub-title>{{c.product.article}}</b-card-sub-title></b-col>
            </b-row>
          </b-col>
        </b-row>
        <div class="w-100">
             <div class="float_right"><b-card-sub-title>количество - {{c.count}}</b-card-sub-title></div>
        </div>
      </b-card>
         </div>
         <div v-else>В корзине пусто</div>
       </div>
        <div class="w-100" style="padding: 5px;">
          Количество продуктов в корзине - {{cart.length}}
        </div>
       <div class="w-100" style="padding: 5px;">
          Количество единиц товара в корзине - {{cart.length?cart.map(x=>x.count).reduce(reducer):0}}
        </div>
       <div class="w-80 " v-if="cart.length" style="margin: 5%; border: #333333 solid; border-width: 1px; padding: 2%; border-radius: .3em" >
         <b-container fluid >
         <b-row style="margin: 1%;">
           <b-col sm="4">
               <label for="email">Введите email</label>
           </b-col>
           <b-col sm="8">
          <b-form-input ref="email" id="email" placeholder="электронная почта" @input="validateEmail" v-model="email" size="30" required type="email"></b-form-input>
             <span v-if="msg['email'] && msg['email'].length">{{msg['email']}}</span>
           </b-col>
         </b-row>
           <b-row style="margin: 1%;">
           <b-col sm="4">
               <label for="email">Введите телефон</label>
           </b-col>
           <b-col sm="8">
          <b-form-input ref="phone" id="phone" @input="validatePhone" v-model="phone"  required placeholder="+375" type="tel"></b-form-input>
              <span v-if="msg['phone'] && msg['phone'].length">{{msg['phone']}}</span>
           </b-col>
         </b-row>
            <b-row style="margin: 1%;">
           <b-col sm="4">
               <label for="email">Введите наименование организации</label>
           </b-col>
           <b-col sm="8">
          <b-form-input ref="name" id="name" v-model="name" placeholder="название огранизации" type="text"></b-form-input>
           </b-col>
         </b-row>
         </b-container>
       </div>
       </div>
         <template #modal-footer>
        <div class="w-100" v-if="cart.length">
          <b-button class="float-right"  @click="sendCart" style="background-color: #0d82d3">Заказать</b-button>
        </div>
           <div v-else>
              <b-button class="float-right"  @click="$bvModal.hide('modal-xl')" style="background-color: #1e2f4c">Закрыть</b-button>
           </div>
         </template>
  </b-modal>

    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartComponentHeader",
  data() {
    return {
      dialogVisible:false,
      email:'',
      phone:'',
      name:'',
      msg:{},
      reducer: (previousValue, currentValue) => previousValue + currentValue,

    }
  },
  mounted() {
    console.log(this.cart)
  },
  computed:{
     ...mapGetters({
        cart:'cart/cart',
        count:'cart/count',
      }),
    lenCart(){
       return this.cart.length;
    }
  },
  methods:{
    ...mapActions({
           CLEAR_CART: 'cart/CLEAR_CART'
        }),
    async sendCart(){
      console.log(this.cart);
      if(this.validateEmail()){
        this.$message({message:'Не верный формат почты',type:'warning'});
        this.$refs.email.focus();
        return;
      }
      if(this.validatePhone()){
        this.$message({message:'Не верный формат телефона',type:'warning'});
        this.$refs.phone.focus();
        return;
      }
      if(this.name.length<3){
        this.$message({message:'Короткое название',type:'warning'});
        this.$refs.name.focus();
        return;
      }
      let data = {user_name:this.name, user_email:this.email, user_phone:this.phone,products:this.cart.map(x=>x.id)}
      let res = await this.$axios.$post('/users/user/cart/', data).catch(e=>{
        this.$message({message:'Возникла ошибка. Обратитесь по телефонам.',type:'error'});
        return;
      })
      this.$bvModal.hide('modal-xl')
      this.CLEAR_CART();
      this.$message({message:'Заказ успешно отправлен',type:'success'});
    },
    validatePhone(){
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (!re.test(this.phone)) {
        this.msg['phone'] = 'телефон не верного формата';
        return true;
    } else {
        this.msg['phone'] = '';
        return false;
    }
    },
    validateEmail() {
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(this.email).toLowerCase())) {
        this.msg['email'] = 'Email не верного формата';
        return true;
    } else {
        this.msg['email'] = '';
        return false;
    }
}
  }
}
</script>

<style scoped>
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
   object-fit: contain;

}
</style>
