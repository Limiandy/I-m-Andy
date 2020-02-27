<!--
 * @Descripttion: 
 * @version: 
 * @Author: Andy
 * @Date: 2020-02-05 13:43:49
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-23 12:44:25
 -->
<template>
  <section class="padding" id="#anchor-1">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 col-sm-12" v-for="(feature, index) in features" :key="index">
          <div class="list-item">
            <div class="icon">
              <i :class="feature.icon"></i>
            </div>
            <div class="desc">
              <h2>{{ feature.title}}</h2>
              <p>{{ feature.desc }}</p>
              <a href="https://github.com/Limiandy/I-m-Andy" target="_blink" class="more">了解更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'features',
  data: function () {
    return {
      features: [
        {
          title: '以 vue.js 2.6 为基础构建',
          desc: '项目以 vue.js 为基础构建而成进行前端路由交换与数据渲染，UI使用 Bootstrap 4 框架构建。',
          icon: 'ion-code'
        },
        {
          title: '项目源码',
          desc: '本项目源码保存在 Github 上进行托管，以用做学习交流使用，如需要交流可以留言评论。',
          icon: 'ion-social-github'
        },
        {
          title: '源码定制',
          desc: '项目源码托管于 Github 如有需要自行 clone 于本地，install 后 run dev 进行开发。',
          icon: 'ion-paintbrush'
        }
      ]
    }
  }
}
</script>
