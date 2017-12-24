<template>
  <div class="announcement">
    <cv-carousel>
      <cv-carousel-item>
        <div class="container">
          <h2>中山学院<br>校园网络指引</h2>
          <p>此文档旨在帮助中山学院的学子了解如何设置上网、电信新客户端的一些新功能、常见问题的处理及网络故障的报修方式.</p>

          <router-link to="/guide/foreword">点 击 查 看</router-link>
        </div>
      </cv-carousel-item>

      <cv-carousel-item>
        <div class="container">
          <h2>关于我们</h2>
          <p>网络维护科是由学院信息中心直接领导的学生组织，主要职责包括保障校内师生的正常上网，处理和协助处理校园.</p>

          <button>观 看 视 频</button>
          <a href="http://zx.zsxyww.com" target="_blank">加入我们</a>
        </div>
      </cv-carousel-item>
    </cv-carousel>
  </div>
</template>

<script>
  import CvCarousel from '../../../components/cv-carousel/cv-carousel.vue'
  import CvCarouselItem from '../../../components/cv-carousel/cv-carousel-item.vue'

  export default {
    components: {
      CvCarouselItem,
      CvCarousel
    },
    name: 'announcement'
  }
</script>

<style scoped>
  .announcement {
    margin: 0 0 3rem 0;
  }

  .cv-carousel {
    width: 100%;
    height: 550px;
    overflow: hidden;
  }
</style>