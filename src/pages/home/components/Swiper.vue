<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of SwiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        >
      </swiper-slide>
      <!-- 小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 删除了左右箭头 灰色滚动条 -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        //图片上的小圆点
        pagination: ".swiper-pagination",
        // 无限循环为true
        loop: true
      },
      //swiper-img的数组
      SwiperList: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/0a8f7c789d0e62966e2485d33bf7ebd3.jpg_750x200_b455610d.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/700528b360c39d630dda13930a92a1a6.jpg_750x200_80f6150c.jpg'
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.67%;
  background-color: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>