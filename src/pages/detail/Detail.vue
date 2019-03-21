<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";

import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: [],
      lastId: this.$route.params.id
    };
  },
  methods: {
    getDetailInfo() {
      // 因为id是动态添加进去的, 所以可以通过this.$route.params.id获取添加的id
      // axios.get("http://localhost:8080/mock/detail.json?id="+this.$route.params.id) //与下面同样有效
      axios
        .get("http://localhost:8080/mock/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      // console.log(res);
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        // console.log(data);
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  },
  // APP.vue使用keepalive缓存请求数据, 但是同时多了一个生命周期函数 activated 改变keep-alive缓存中的数据
  activated() {
    //判断当前项目id, 与选择项目的id是否相同, 如果不相同就再次发送ajax请求
    if (this.lastCity !== this.$route.params.id) {
      this.lastCity = this.$route.params.id;
      this.getDetailInfo();
    }
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>