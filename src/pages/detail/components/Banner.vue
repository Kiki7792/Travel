<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
      >
      <div class="banner-info">
        <p class="banner-number">
          <span class="iconfont banner-icon">&#xe663;</span>{{this.bannerImgs.length}}
        </p>
        <p class="banner-title">{{this.sightName}}</p>
      </div>
    </div>
    <common-gallary
     :imgs="bannerImgs" 
     v-show="showGallary" 
     @close="handleGallaryClose"
    >
    </common-gallary>
  </div>
</template>
<script>
import commonGallary from "../../../common/gallary/Gallary";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    commonGallary
  },
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  width: 100%;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));

    .banner-title {
      font-size: 0.32rem;
      padding-left: 0.2rem;
    }

    .banner-number {
      padding: 0 0.3rem;
      line-height: 0.4rem;
      height: 0.4rem;
      width: 0.6rem;
      border-radius: 0.2rem;
      font-size: 0.26rem;
      background-color: rgba(0, 0, 0, 0.3);

      .banner-icon {
        font-size: 0.2rem;
        margin-right: 0.05rem;
      }
    }
  }
}
</style>