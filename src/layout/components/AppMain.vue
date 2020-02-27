<!--
 * @Descripttion: 
 * @version: 
 * @Author: Andy
 * @Date: 2020-02-05 08:58:36
 * @LastEditors  : Andy
 * @LastEditTime : 2020-02-05 16:23:03
 -->
<template>
  <section class="app-main">
    <router-view/>
  </section>
</template>
<script>
export default {
  name: 'AppMain'
}
</script>
<style lang="scss" scoped>
.app-main {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>