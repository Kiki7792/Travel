<template>
  <div id="app">
    <!-- exclude的作用是除了Detail.vue其他页面都会被缓存  exclude="Detail" 这样一做的话, Detail页面的header-fix就有问题了 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
