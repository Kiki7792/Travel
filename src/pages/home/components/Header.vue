<template>
  <div class="header">
    <div class="header-left"><span class="iconfont back-icon"> &#xe624;</span></div>
    <div class="header-input"><span class="iconfont"> &#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
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
  @import '~@/assets/styles/varibles.styl'
  .header {
    display flex
    line-height .86rem
    background-color $bgColor
    color #fff
    .header-left {
      width .64rem
      float left
      .back-icon {
        display block
        text-align center
        font-size .4rem
      }
    }
    .header-input {
      flex 1
      background-color #fff
      border-radius .1rem
      margin-top .12rem
      margin-left .2rem
      height .62rem
      line-height .62rem
      color #ccc
      padding-left .2rem
    }
    .header-right {
      width 1.24rem
      float right 
      text-align center
      .arrow-icon {
        font-size .24rem
      }
    }
    
  }
</style>