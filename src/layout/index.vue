<!--
 * @Descripttion: 
 * @version: 
 * @Author: Andy
 * @Date: 2020-02-04 12:35:36
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-25 12:10:18
 -->
<template>
  <div class="app-wrapper">
    <transition name="fade">
      <div v-if="changeView">
        <Navbar />
        <AppMain />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="changeView">
        <Blog />
      </div>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import AppMain from "./components/AppMain";
import { mapState } from 'vuex'
const Blog = () => import('../views/blog')
export default {
  name: "Layout",
  components: { AppMain, Navbar, Blog },
  // data: function() {
  //   return {
  //     page: this.$store.state.page
  //   };
  // },
  computed: {
    // getStoreChenage: function() {
    //   return this.$store.state.page;
    // }
    ...mapState({
      view: state => state.app.view
    }),
    changeView() {
      return {
        view: this.view
      }
    }
  },
  // watch: {
  //   getStoreChenage: function() {
  //     this.page = this.$store.state.page;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
