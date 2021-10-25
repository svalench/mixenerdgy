<template>
<div class="galery">
        <div class="galery-index">
             <el-image
                :src="productItems.img"
                :preview-src-list="srcList">
            </el-image>
        </div>
        <div class="galery-extra">
            <div
            v-for="(img,index) in srcList.slice(1, 3)" :key="img.id"
            class="galery-extra-block">
            <el-image
                :src="img"
                :preview-src-list="srcList">
            </el-image>
            <div class="galery-extra-plus" v-if="index == 1 && srcList.length > 3">
                <strong>{{ srcList.length }}</strong>
                <span>+</span>
            </div>
            </div>
        </div>

    </div>
</template>

<script>


export default {
  name: "GaleryProduct",
    async fetch(){
    },
    data() {
        return {
            srcList:[]
        };
    },
  props:['productItems'],
    computed:{

    },
    methods:{
        imgGalery(){
          console.log(this.productItems)
          if(this.productItems.images===undefined){
            return;
          }
             this.productItems.img = `https://api.mixenerdgy.by/media/${this.productItems.img}`;
            this.srcList = this.productItems.images.map((key)=>key.img);
            this.srcList.unshift(this.productItems.img);
        },
    },
    mounted(){
        this.imgGalery()
    },
    created() {

    },

}
</script>

<style scoped>
.galery{
    float: left;
}
.galery-index .el-image{
    height: 100%;
    width: 100%;
    border: #0d82d3 solid;
  border-width: 3px;
}
.galery-index{
    float: left;
    width: 70%;
    /*height: 280px;*/
    padding: 5px;
}
.galery-extra{
    float: left;
  height: 30%;
    width: 30%;
    position: relative;
}
.galery-extra-block{
    float: left;
    width: 100%;
    padding: 5px;
  margin-top: 10%;
      border: #0d82d3 solid;
  border-width: 1px;
    position: relative;
}
.galery-extra .el-image{
    height: 100%;
    width: 100%;
}
.galery-extra img,.galery-index img{
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border: 1px solid #efefef;
    border-radius: 7px;
    padding: 5px;
}
.galery-extra-plus{
    position: absolute;
    top: 5px;
    right: 5px;
    left: 5px;
    bottom: 5px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 23px;
    font-weight: 700;
    color: #fff;
    background: rgb(51 51 51 / 22%);
    border-radius: 7px;
    pointer-events: none;
}
.el-image:hover~.galery-extra-plus{
    transition: .2s;
    background: rgb(51 51 51 / 32%);
}
/* .galery-extra-plus span{

} */
.galery-extra-plus strong{
    font-weight: 600;
    cursor: pointer;
}

</style>
