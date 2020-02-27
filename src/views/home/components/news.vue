<!--
 * @Descripttion: 
 * @version: 
 * @Author: Andy
 * @Date: 2020-02-06 08:54:08
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-23 12:53:45
 -->
<template>
  <section class="padding bg-grey" id="#anchor-2">
    <div class="container">
      <h2 class="section-title">最新发布的博客文章</h2>
      <p class="section-lead text-muted">
        我们写了一些关于脑海中的事物的文章，大多数人都喜欢。
      </p>
      <div class="section-body">
        <div class="row col-spacing">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="(newsItem, index) in newslist"
            :key="index"
          >
            <article class="card">
              <img
                :src="newsItem.src"
                :alt="newsItem.imgTitle"
                class="card-img-top"
              />
              <div class="card-body">
                <div class="card-subtitle mb-2 text-muted">
                  by <a href="#">{{ newsItem.auth }}</a> on
                  {{ newsItem.releaseDate }}
                </div>
                <h4 class="card-title">
                  <a href="#" data-toggle="read" data-id="1">{{
                    newsItem.title
                  }}</a>
                </h4>
                <p class="card-text">{{ newsItem.briefly }}</p>
                <div class="text-right">
                  <a
                    href="javascript:;"
                    class="card-more"
                    @click="getNews(index)"
                    >Read More <i class="ion-ios-arrow-right"></i
                  ></a>
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
            />
            <button class="btn btn-primary">订阅</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "blog",
  data: function() {
    return {
      newslist: this.$store.state.newslist
    }
  },
  methods: {
    getNews: function(index) {
      this.axios({
        method: 'get',
        url: '/parameter/query',
        data: index
      }).then(response => {
        if (response.data.status === 200) {
          setTimeout(() => {
            this.$store.commit("chenagePage", "blog");
            this.$store.commit("setBowen", response.data.data);
          }, 300);
        } else {
          console.log("error");
        }
      })
    },
    getNewsList: function () {
      this.axios.get('/newslist/query').then(response => {
        // console.log(response.data)
        if (response.data.status === 200) {
          this.$store.state.newslist = response.data.data
        }
      })
    }
  },
  mounted: function () {
    this.getNewsList()
  },
  computed: {
    showNewsList: function () {
      return this.$store.state.newslist
    }
  },
  watch: {
    showNewsList: function () {
     this.newslist = this.$store.state.newslist
    }
  }
};
</script>
