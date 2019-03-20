<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <!-- 使用@change监听来自 子组件Alphabet.vue $emit传递过来的change事件 -->
    <city-alphabet :cities="cities" @change="HandleLetterChange"></city-alphabet>
  </div>
</template>
<script>
//引入axios发送ajax请求
import axios from "axios";

import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";

export default {
  name: "City",

  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios
        .get("http://localhost:8080/mock/city.json")
        .then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        // console.log(data);
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    HandleLetterChange(letter) {
      // 再把letter 传递给子组件List
      // console.log(letter);
      this.letter = letter;
    }
  },
  mounted() {
    //让页面挂载好之后去执行getHomeInfo()这个函数
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped>
</style>