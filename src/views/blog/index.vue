<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-08 14:55:27
 * @LastEditors: Andy
 * @LastEditTime: 2020-03-02 09:06:43
 -->
<template>
  <div class="blog">
    <div class="article-read">
      <div class="article-read-inner">
        <div class="article-back">
          <a
            href="javascript:;"
            class="btn btn-outline-primary"
            @click="goback"
          ><i class="ion ion-chevron-left" />Back</a>
        </div>
        <h1 class="article-title">{{ bowen.title }}</h1>
        <div class="article-metas">
          <div class="meta">{{ bowen.date }}</div>
          <div class="meta">{{ bowen.category }}</div>
          <div class="meta">{{ bowen.author }}</div>
        </div>
        <figure class="article-picture"><img :src="bowen.srcPath" alt=""></figure>
        <div class="article-content" v-html="bowen.content" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  data: function() {
    return {
      bowen: null
    }
  },
  computed: {
    showBowen: function() {
      return this.$store.state.bowen
    }
  },
  watch: {
    showBowen: function() {
      this.bowen = this.$store.state.bowen
    }
  },
  methods: {
    goback: function() {
      this.$store.commit('chenagePage', 'home')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/article.css";
</style>
