<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- 因为main.js引入了1px的边框解决方案, 所以这次就直接在li中加类名 border-bottom -->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg",
          title: "深圳欢乐谷",
          desc: "狂欢无罪，够胆你就来!"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: "东部华侨城茶溪谷",
          desc: "茶、禅、花、竹，绿的世界，花的世界"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg",
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

.item-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 38.93%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

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
}
</style>