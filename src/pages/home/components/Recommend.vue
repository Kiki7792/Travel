<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- 因为main.js引入了1px的边框解决方案, 所以这次就直接在li中加类名 border-bottom -->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1903/93/939f4ea1d9f2f58da3.water.jpg_200x200_f57fdf8f.jpg",
          title: "深圳欢乐谷",
          desc: "狂欢无罪，够胆你就来!"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_200x200_01e78b60.jpg",
          title: "东部华侨城茶溪谷",
          desc: "茶、禅、花、竹，绿的世界，花的世界"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg",
          title: "深圳野生动物园",
          desc: "这里有优雅和呆萌并存的睫毛精"
        }
      ]
    };
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