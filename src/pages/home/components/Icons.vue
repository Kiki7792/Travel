<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  //   因为数据不能写死, 所以定义数组, 用来保存iconList
  data() {
    return {
      swiperOption: {
        // 去除了swiper的自动轮播
        pagination: ".swiper-pagination", //图片上的小圆点
      }
    };
  },
  //计算属性
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        //   console.log(item)
        const page = Math.floor(index / 8);
        //   console.log(page)
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons >>> .swiper-pagination-bullet-active {
  background: $bgColor;
}

.icons {
  .icon {
    overflow: hidden;
    float: left;
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    position: relative;
    text-align: center;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
        margin-top: 0.1rem;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkColor;
      ellipsis();
    }
  }
}
</style>
