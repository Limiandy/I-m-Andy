<!--
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-02-06 09:43:22
 * @LastEditors  : Andy
 * @LastEditTime : 2020-02-07 15:41:52
 -->
<template>
  <section id="#anchor-3" class="bg-overlay padding" :style="setBackground">
    <div class="overlay" />
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <figure class="projects-picture">
            <img src="../../../assets/youzhang.png" alt="Youzhang">
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <div class="projects-details">
            <div class="projects-badge">
              Featured
            </div>
            <h2 class="projects-title">
              Youzhang - Ionic 3 Catalogue Template
            </h2>
            <p class="projects-description">
              Youzhang is an iconic template catalog 3. This ionic template uses
              version 3 and uses the latest feature of ionic v3 that is Lazy
              Loading. With Ionic version 3 and Lazy Loading you don’t have to
              define all the components in the app.module.ts file and your
              hybrid app will get more native and it will make the app
              performance better.
            </p>
            <div class="projects-cta">
              <a href="#" class="btn btn-primary" target="_blank">
                Buy Now
              </a>
              <a href="#" class="btn btn-link" target="_blank">
                More Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Project',
  data: function() {
    return {
      setBackground: {
        backgroundImage:
          'url(' + require('../../../assets/projects.jpeg') + ')',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'center'
      }
    }
  }
}
</script>
