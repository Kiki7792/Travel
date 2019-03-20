<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">深圳</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  //页面DOM元素挂载完之后, 执行mounted() {}
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    //   监听letter的变化, 当letter变化时, 使cities 数组渲染 当前letter的区域
    letter() {
      //console.log(this.letter); //A B C D...
      //借用BScroll的一个方法, 使得滚动区域自动滚到某个元素上
      if (this.letter) {
        //在citties遍历数组的地方 :ref="key", 获取当前滚动字母的元素
        // const element = this.$refs[this.letter];
        // console.log(element); //[div.area]
        const element = this.$refs[this.letter][0];
        // console.log(element); //DOM树
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.border-topbottom {
  &:before, &:after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.8rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        text-align: center;
        padding: 0.1rem 0;
        margin: 0.1rem;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}
</style>