<!--
 * @Descripttion: 
 * @version: 
 * @Author: Andy
 * @Date: 2020-02-08 12:02:41
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-23 13:08:56
 -->
<template>
  <section class="padding bg-grey" id="#contact">
    <div class="container">
      <h2 class="section-title text-center">联系我们</h2>
      <p class="section-lead text-center text-muted">
        向我们发送您的询问，我们将为您提供帮助并尽快答复
      </p>
      <div class="section-body">
        <div class="row col-spacing">
          <div class="col-12 col-md-5">
            <p class="contact-text">
              您可以通过电子邮件联系我们，我们会在第一时间解答您的疑问
            </p>
            <ul class="contact-icon">
              <li>
                <i class="ion ion-ios-email"></i>
                <div>limengkai_a@163.com</div>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-7">
            <form class="contact row" id="contact-form">
              <div class="form-group col-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="名字"
                  name="name"
                  required=""
                />
              </div>
              <div class="form-group col-6">
                <input
                  type="email"
                  class="form-control"
                  placeholder="邮箱"
                  name="email"
                  required=""
                />
              </div>
              <div class="form-group col-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="主题"
                  name="subject"
                  required=""
                />
              </div>
              <div class="form-group col-12">
                <textarea
                  class="form-control"
                  placeholder="内容"
                  name="message"
                  required
                ></textarea>
              </div>
              <div class="form-group col-12 mt-2">
                <button class="btn btn-primary">
                  发送邮件
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'contact'
}
</script>