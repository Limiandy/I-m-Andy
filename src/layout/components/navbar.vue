<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-04 13:58:43
 * @LastEditors: Andy
 * @LastEditTime: 2020-02-29 12:27:08
 -->
<template>
  <nav class="navbar navbar-expand-lg main-navbar" :class="{'bg-dark': isTrue}">
    <div class="container-fluid">
      <a href="javasrcipt:;" class="navbar-brand">
        <img src="../../assets/logo.png" alt="">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"><i class="ion-navicon" /></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <div class="mr-auto" />
        <ul class="navbar-nav">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="nav-item"
            :class="navIndex === index ? 'active' : ''"
            @click="addClassandgoAnchor('#anchor-'+index, index)"
          >
            <a href="javascript:;" class="nav-link smooth-link">{{
              item.name
            }}</a>
          </li>
        </ul>
        <form class="form-inline">
          <a
            class="btn smooth-link align-middle btn-primary"
            href="javascript:;"
            @click="addClassandgoAnchor('#contact')"
          >联系作者?</a>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      isTrue: false,
      scrollTop: '',
      items: [
        {
          name: '主页'
        },
        {
          name: '关于博客'
        },
        {
          name: '最新博文'
        },
        {
          name: '我的项目'
        }
      ],
      index: 0,
      navIndex: 0
    }
  },
  beforeCreate: function() {
    window.addEventListener(
      'scroll',
      () => {
        this.addBgColor()
      },
      true
    )
  },
  methods: {
    addClassandgoAnchor: function(selector, index) {
      // 实现锚点定位及平滑过渡效果
      // 兼容性参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
      // document.getElementById(selector).scrollIntoView({ behavior: "smooth", block: "start"})
      /** 原生JS写法，兼容各浏览器
       * 实现思路：当点击事件被触发，获取元素需要的偏移量和当前滚动条所在的位置
       *  以当前滚动条所在的位置为基点，使用 requestAnimationFrame() 函数控制动画效果
       *  使用 window.scrollTo() 函数控制滚动距离
       *  判断滚动条当前的位置与元素当前位置的关系，决定是向上滚动还是向下滚动
      */
      const total = document.getElementById(selector).offsetTop - 55 // 偏移量
      let currentScrollTop = this.scrollTop || 0 // 当前滚动条位置(如果刚刚加载完页面，滚动条事件没有被触发，就为0)
      const speedControl = 30 // 滚动速度控制变量（每一贞偏移量）
      currentScrollTop < total ? window.requestAnimationFrame(smoothDown) : window.requestAnimationFrame(smoothUp)

      index !== undefined ? this.navIndex = index : ''

      /**
     * @name: smoothDown
     * @msg: 控制滚动条平滑向下滚动
     */
      function smoothDown() {
        currentScrollTop += speedControl
        window.scrollTo(0, currentScrollTop)
        // 递归调用自己，使元素滚动到目标位置，直到条件不满足
        if (currentScrollTop < total) {
          window.requestAnimationFrame(smoothDown)
        }
      }
      /**
     * @name: smoothUp
     * @msg: 控制滚动条平滑向上滚动
     */
      function smoothUp() {
        currentScrollTop -= speedControl
        window.scrollTo(0, currentScrollTop)
        if (currentScrollTop > total) {
          window.requestAnimationFrame(smoothUp)
        }
      }
    },
    addBgColor: function() {
      const scrollTop =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset
      this.scrollTop = scrollTop
      scrollTop > 613 ? this.isTrue = true : this.isTrue = false
      if (scrollTop > 659 && scrollTop < 1016) {
        this.index = 1
        this.navIndex = 1
      } else if (scrollTop > 1016 && scrollTop < 2595) {
        this.index = 2
        this.navIndex = 2
      } else if (scrollTop > 2595) {
        this.index = 3
        this.navIndex = 3
      } else {
        this.index = 0
        this.navIndex = 0
      }
    }
  },
  Destroyed: function() {
    window.removeEventListener('scroll', () => {
      this.addBgColor()
    }, true)
  }
}
</script>
<style lang="scss" scoped>
.navbar-toggler {
  border-color: #fff;
  color: #fff;
}
.navbar {
  &.main-navbar {
    position: fixed;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    z-index: 99999;
    &.bg-dark {
      background-color: #000 !important;
    }
    .navbar-brand {
      width: 50px;
      height: 50px;
      text-align: center;
      padding: 3px;
      line-height: 0;
      border: 2px solid #fff;
      border-radius: 50%;
      img {
        width: 40px;
        transform:rotate(30deg)
      }
    }
    .nav-link {
      color: #fff;
      padding: 0 20px;
      font-size: 14px;
      letter-spacing: 1px;
      color: rgba($color: #fff, $alpha: 0.75);
      position: relative;
      transition: all 0.5s;
      &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        width: 0;
        background-color: #fff;
        transition: all 0.5s;
      }
      &:hover {
        color: #fff;
        &:after {
          width: 20px;
        }
      }
    }
    .nav-item {
      &.active {
        .nav-link {
          &:after {
            width: 20px;
          }
        }
      }
    }
    .form-inline {
      margin-left: 15px;
      .btn {
        border-radius: 30px;
        border-width: 2px;
        padding: 0 20px;
        font-size: 14px;
        letter-spacing: 1px;
        background-color: transparent;
        border-color: #fff;
        &:hover {
          background: #fff;
          color: #000;
          opacity: 1;
        }
      }
    }
  }
}
</style>
