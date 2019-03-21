<template>
  <div>
    <!-- f父组件给子组件传值 :city -->
    <!-- header使用vuex -->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
//引入城市
import { mapState } from "vuex";
//引入axios发送ajax请求
import axios from "axios";

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
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  //函数就是方法, 一般定义在methods里面
  methods: {
    getHomeInfo() {
      // axios.get('/api/index.json').then(this.getHomeInfoSucc)
      axios
        // 更改请求参数
        .get("http://localhost:8080/mock/index.json?city=" + this.city)
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  computed: {
    ...mapState(["city"])
  },
  mounted() {
    this.lastCity = this.city;
    //让页面挂载好之后去执行getHomeInfo()这个函数
    this.getHomeInfo();
  },
  // APP.vue使用keepalive缓存请求数据, 但是同时多了一个生命周期函数 activated 改变keep-alive缓存中的数据
  activated() {
    //判断当前城市, 与选择城市是否相同, 如果不相同就再次发送ajax请求
    if(this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo();
    }
  }
};
</script>

<style>
</style>