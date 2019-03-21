<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.city}} -->
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'
export default {
  name: "HomeHeader",
  // 子组件接收父组件传来的值, 用props接收
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    //mapState把vuex里面的数据 映射到 此组件的computed属性里 
    //映射的是vuex里'city'的数据 映射到 名字叫'city' 的计算属性中, 在上面就可以直接使用 this.city
  ...mapState(['city'])
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHeight;
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      display: block;
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    background-color: #fff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    height: 0.62rem;
    line-height: 0.62rem;
    color: #ccc;
    padding-left: 0.2rem;
  }

  .header-right {
    min-width: 1.04rem;
    padding 0 .1rem
    float: right;
    text-align: center;
    color #fff

    .arrow-icon {
      font-size: 0.24rem;
    }
  }
}
</style>