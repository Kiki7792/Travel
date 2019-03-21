<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
         v-for="(item, index) in imgs" 
         :key="index"
        >
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <!-- 小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "commonGallary",
  props: {
    imgs: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        //paginationType 修改小点点
        pagination: ".swiper-pagination", //图片上的小圆点
        paginationType: "fraction",
        observer: true,
        observeParents: true,
        autoplay: false //可设置数值来指定播放速度
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  }
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  .swiper-pagination-fraction {
    color: #fff;
    font-size: 0.3rem;
    bottom: -1rem;
  }

  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  z-index: 99;
  width: 100%;

  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  .gallary-img {
    width: 100%;
  }
}
</style>