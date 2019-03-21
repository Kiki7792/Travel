<template>
  <div>
    <router-link tag="div" to="/" v-show="showAbs" class="header-abs">
      <div class="iconfont header-abs-back">&#xe613;</div>
    </router-link>
    <!-- 给header-fixed 动态绑定一个style属性 opacity -->
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      //因为全局绑定的scroll事件, 所以滚动时, detail会一直打印scroll, 点击back返回首页, scroll也会一直打印
      // console.log('scroll');
      const top = document.documentElement.scrollTop;
      // 在60~140之间header-fixed有一个渐渐出现的效果
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity; //opacity最大值只能是1
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header-abs {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
    padding-left: 0.2rem;
  }
}

.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.32rem;

  .header-fixed-back {
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
  }
}
</style>