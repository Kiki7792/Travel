<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_600x330_e7a26e24.jpg"
      >
      <div class="banner-info">
        <p class="banner-number">
          <span class="iconfont banner-icon">&#xe663;</span>18
        </p>
        <p class="banner-title">东部华侨城茶溪谷</p>
      </div>
    </div>
    <common-gallary
     :imgs="imgs" 
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
  components: {
    commonGallary
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
      ]
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