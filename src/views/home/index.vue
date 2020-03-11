<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-05 11:32:06
 * @LastEditors  : Andy
 * @LastEditTime : 2020-02-09 10:55:34
 -->
<template>
  <div class="home">
    <Hero />
    <Features />
    <News />
    <Project />
    <Contact />
    <Callout />
    <Footer />
  </div>
</template>
<script>
import { Hero, Features, News, Project, Callout, Contact, Footer } from './components'
export default {
  name: 'Home',
  components: {
    Hero,
    Features,
    News,
    Project,
    Callout,
    Contact,
    Footer
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/home.css';
.home {
  position: relative;
  height: 100%;
}
</style>
