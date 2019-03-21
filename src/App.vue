<template>
  <div id="app">
    <!-- exclude的作用是除了Detail.vue其他页面都会被缓存 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
