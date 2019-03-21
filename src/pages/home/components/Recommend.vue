<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- <router-link to="/detail"> -->
      <!-- router-link 浏览器解析成a标签, 这样字体颜色会变化, 可以直接把li标签替换成router-link, 而且要加tag="li" -->
      <!-- 因为main.js引入了1px的边框解决方案, 所以这次就直接在li中加类名 border-bottom -->
      <!-- <router-link -->
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/'+item.id"
      >
        <img class="item-img" :src="item.imgUrl">

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
      <!-- </li> -->
      <!-- </router-link> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    display: block;
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      background-color: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      line-height: 0.44rem;
      margin-top: 0.16rem;
      color: #fff;
    }
  }
}
</style>