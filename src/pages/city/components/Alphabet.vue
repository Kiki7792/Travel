<template>
  <ul class="list">
    <li
     class="item" 
     v-for="item of letters" 
     :key="item" 
     :ref="item"
     @click="handleLetterClick" 
     @touchstart="handleTouchStart"
     @touchmove="handleTouchMove"
     @touchend="handleTouchEnd"
    >
     {{item}}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
        touchStatus: false
    }
  },
//   使用计算属性 使对象cities的变成存储字母表的数组
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
         letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if(this.touchStatus) {
        //startY 是字母A距离input下边框的高度
        const startY = this.$refs['A'][0].offsetTop;
        // console.log(startY);//74px
        //touchY 是手指距离header上边框的高度 - (header的高度+input的高度)
        const touchY = e.touches[0].clientY - 89;
        //index 是计算出来的字母下标
        const index = Math.floor((touchY - startY) / 20)
        // console.log(index);
        if(index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index]);
        }  
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>