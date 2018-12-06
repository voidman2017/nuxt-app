<template>
  <div class="banner-wrap">
    <ul class="clearfix">
      <li v-for="(item,index) in bannerList" :key="item.id" @mouseover="bannerStop" @mouseleave="bannerStart">
          <img :src="item.imageUrl" :alt="item.name" :class="[index == active ? 'show' : '']">
          <a :href="item.linkUrl" class="block-link"></a>
      </li>
    </ul>
    <ul class="pagenation">
      <li v-for="(item,index) in bannerList" :key="item.id" @mouseover="pagenation(index)" :class="[index == active ? 'active' : '']"></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["bannerList"],
  methods:{
    bannerStart: function(){
      this.timer =  setInterval(()=>{
        this.active = (this.active + 1) % this.bannerList.length;
      },3000)
    },
    bannerStop: function(){
      clearInterval(this.timer)
    },
    pagenation: function(index){
      this.bannerStop;
      this.active = index;
    }
  },
  created() {
    this.bannerStart();
  },
  data(){
    return{
      active: 0,
      timer: null
    }
  }
};
</script>
<style scoped>
.banner-wrap{ width: 750px;height: 396px;position: relative;float: left;overflow: hidden;zoom: 1;background: #2e3458; }
.banner-wrap li img{width: 100%;position: absolute;left: 0;top: 0;opacity: 0;transition: all 0.19s ease-in-out;	-moz-transition: all 0.19s ease-in-out; -webkit-transition: all 0.19s ease-in-out; -o-transition: all 0.19s ease-in-out;}
.banner-wrap li img.show{width: 100%;position: absolute;left: 0;top: 0;opacity: 1;}
.pagenation{position: absolute;left: 50%;bottom:10px;transform: translate(-50%, 0);z-index:999;}
.pagenation li{width: 20px;height: 20px;border-radius: 20px;background-color: #fff; display: inline-block;margin:0 10px;}
.pagenation li.active{border: solid 2px #30a2e2;}
</style>
