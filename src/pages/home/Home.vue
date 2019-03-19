<template>
  <div>
    <!-- f父组件给子组件传值 :city -->
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
//引入axios发送ajax请求
import axios from 'axios'

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  //函数就是方法, 一般定义在methods里面
  methods: {
    getHomeInfo() {
      // axios.get('/api/index.json').then(this.getHomeInfoSucc)
      axios.get('http://localhost:8080/mock/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
       res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList

      }
     
    }
  },
  mounted() {
    //让页面挂载好之后去执行getHomeInfo()这个函数
    this.getHomeInfo()
  }
};
</script>

<style>

</style>