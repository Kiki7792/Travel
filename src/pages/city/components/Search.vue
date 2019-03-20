<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <!-- v-if的作用: 数组长度为0, 才显示下面的li标签内容 -->
        <li class="search-item border-bottom" v-if="hasNoData">没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  // 监听keyword的变化, 并使用timer 节流函数
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      // 如果keyword不存在, 直接让list变成[]
      if (!this.keyword) {
        this.list = [];
        return false;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          // console.log(this.cities[i]);
          this.cities[i].forEach(value => {
            // console.log(value);
            if (
              value.spell.indexOf(this.keyword) != -1 ||
              value.name.indexOf(this.keyword) != -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
        // console.log(this.list);
      }, 100);
    }
  },
  //页面DOM元素挂载完之后, 执行mounted() {}
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.search {
  height: 0.72rem;
  background-color: $bgColor;
  padding: 0.1rem;

  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0 0.1rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>