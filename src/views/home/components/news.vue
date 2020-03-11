<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-06 08:54:08
 * @LastEditors: Andy
 * @LastEditTime: 2020-03-02 08:53:35
 -->
<template>
  <section id="#anchor-2" class="padding bg-grey">
    <div class="container">
      <h2 class="section-title">最新发布的博客文章</h2>
      <p class="section-lead text-muted">
        我们写了一些关于脑海中的事物的文章，大多数人都喜欢。
      </p>
      <div class="section-body">
        <div class="row col-spacing">
          <div
            v-for="(newsItem, index) in newsList"
            :key="index"
            class="col-12 col-md-6 col-lg-4"
          >
            <article class="card">
              <img
                :src="newsItem.image_url"
                :alt="newsItem.imgTitle"
                class="card-img-top"
              >
              <div class="card-body">
                <div class="card-subtitle mb-2 text-muted">
                  by <a href="#">{{ newsItem.author }}</a> on
                  {{ newsItem.display_time }}
                </div>
                <h4 class="card-title">
                  <a href="#" data-toggle="read" data-id="1">{{
                    newsItem.title
                  }}</a>
                </h4>
                <p class="card-text">{{ newsItem.content }}</p>
                <div class="text-right">
                  <a
                    href="javascript:;"
                    class="card-more"
                    @click="getNews(index)"
                  >Read More <i
                    class="ion-ios-arrow-right"
                  /></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="row align-items-center mt-5">
        <div class="col-12 col-md-6">
          <h2>别错过博主的文章</h2>
          <p class="text-muted">
            只要输入您的电子邮件，我们就会发送有关最新文章的电子邮件
          </p>
        </div>
        <div class="col-12 col-md-6">
          <form action="#" class="subscribe">
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="请输入邮箱"
            >
            <button class="btn btn-primary">订阅</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { fetchList } from '@/api/article'
export default {
  name: 'Blog',
  data: function() {
    return {
      newsList: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 6
      }
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNews: function(index) {
      console.log('i to click' + index)
      this.$store.dispatch('app/switchViews', { view: 'blog' })
    },
    getNewsList: function() {
      fetchList(this.listQuery).then(response => {
        console.log(response.data.items)
        this.newsList = response.data.items
      })
    }
  }
}
</script>
