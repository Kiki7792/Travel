<template>
  <transition>
    <!-- slot是外部组件插进来的插槽 代表的是Banner.vue里的fade-animation -->
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: "FadeAnimation"
};
</script>
<style lang="stylus" scoped>
.v-enter, .v-leave-to {
  opacity: 0;
}

.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
</style>