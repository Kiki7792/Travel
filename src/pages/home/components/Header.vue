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
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  // 子组件接收父组件传来的值, 用props接收
  props: {
    city: String
  }
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
    width: 1.24rem;
    float: right;
    text-align: center;
    color #fff

    .arrow-icon {
      font-size: 0.24rem;
    }
  }
}
</style>