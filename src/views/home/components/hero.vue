<!--
 * @Descripttion: 
 * @version: 
 * @Author: Andy
 * @Date: 2020-02-05 11:55:43
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-24 13:13:46
 -->
<template>
  <section class="hero bg-overlay" id="#anchor-0" :style="setBackground">
    <div class="overlay"></div>
    <div class="text">
      <h3>Andy</h3>
      <p class="lead">道可道非常道名可名非常名</p>
      <p class="lead">无名天地之始</p>
      <h3>BLOG</h3>
      <div class="external-link d-inline-flex">
        <div class="external-link-item"><a href="#" target="_blank">简 书</a></div>
        <div class="external-link-item"><a href="https://github.com/Limiandy" target="_blank">Github</a></div>
      </div>
      <div class="cta">
        <a href="#" class="btn btn-primary smooth-link">快速打开博客</a>
      </div>
      <div class="other-navlinks">
        <div class="other-navlinks-left">
          <div class="other-navlinks-content">
            <div class="other-navlinks-item border-right">
              <a href="#">介绍</a>
            </div>
            <div class="other-navlinks-item"><a href="#">工具</a></div>
          </div>
        </div>
        <div class="other-navlinks-right">
          <div class="other-navlinks-content">
            <div class="other-navlinks-item border-right">
              <a href="#">作者</a>
            </div>
            <div class="other-navlinks-item"><a href="#footer">友链</a></div>
          </div>
        </div>
      </div>
      <div class="link">
        <a href="#"
          >向下滑动快速浏览最新内容
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </a>
      </div>
    </div>
    <div class="mr-auto"></div>
  </section>
</template>
<script>
export default {
  name: "hero",
  data: function() {
    return {
      setBackground: {
        backgroundImage: "url(" + require("../../../assets/gen.svg") + ")",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "center"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  left: 0;
  right: 0;
  top: auto;
  bottom: auto;
  margin: auto;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}
.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}
.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}
.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: #fff;
}
.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}
.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}
@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}
.external-link {
  padding: 20px 0;
  .external-link-item {
    margin: 0 15px;
    border-bottom: 1px dashed #fff;
    font-style: oblique;
    a {
      color: #999;
      text-decoration: none;
      &:hover {
        color: #fff;
      }
    }
  }
}
.other-navlinks {
  overflow: hidden;
  margin-top: 25px;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 70%;
    background-color: #fff;
    top: 416px;
    left: 0;
    right: 0;
    bottom: auto;
    margin: auto;
  }
  .other-navlinks-left {
    float: left;
    width: 50%;
    padding-top: 30px;
    border-right: 1px solid #fff;
    .other-navlinks-content {
      border-left: 1px solid #fff;
      border-radius: 2px 0 0 2px;
    }
  }
  .other-navlinks-right {
    float: right;
    width: 50%;
    padding-top: 30px;
    .other-navlinks-content {
      border-right: 1px solid #fff;
      border-radius: 0 2px 2px 0;
    }
  }
  .other-navlinks-content {
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    overflow: hidden;
    .other-navlinks-item {
      width: 50%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      float: left;
      letter-spacing: 5px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
.text {
  .link {
    margin-top: 15px;
    a {
      color: #fff;
      font-size: 12px;
      text-decoration: none;
      text-transform: none;
      color: #999;
      font-weight: 600;
      letter-spacing: 0.3px;
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
