<template>
  <div class="announcement">
    <cv-carousel>
      <cv-carousel-item class="carousel-guide">
        <div class="container">
          <div class="carousel-guide__content">
            <h2>中山学院<br>校园网络指引</h2>
            <p>此文档旨在帮助中山学院的学子了解如何设置上网、电信新客户端的一些新功能、常见问题的处理及网络故障的报修方式.</p>

            <router-link to="/guide/foreword" class="btn">点 击 查 看</router-link>
          </div>
        </div>
      </cv-carousel-item>

      <cv-carousel-item class="carousel-about">
        <div class="container">
          <div class="carousel-about__content">
            <h2>关于我们</h2>
            <p>网络维护科是由学院信息中心直接领导的学生组织，主要职责包括保障校内师生的正常上网，处理和协助处理校园.</p>

            <a class="btn" @click="watchVideo">观 看 视 频</a>
            <a href="http://zx.zsxyww.com" target="_blank">加入我们</a>
          </div>
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
    name: 'announcement',
    methods: {
      watchVideo () {
        this.$emit('watchVideo')
      }
    }
  }
</script>

<style scoped>
  .announcement {
    margin: 0 0 3rem 0;
  }

  .announcement .btn {
    display: inline-block;
    padding: 8px 30px;
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    .announcement .btn {
      padding: 4px 10px;
      font-size: .9rem;
    }
  }

  .announcement .btn:hover,
  .announcement .btn:focus {
    color: #fff;
    background-color: #1BBC8B;
    outline: none;
  }

  .cv-carousel {
    position: relative;
    width: 100%;
    height: 550px;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    .cv-carousel {
      height: 300px;
    }
  }

  .cv-carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    background-size: 100% 100%;
    background-attachment: local;
    color: #fff;
    transition: all .7s linear;
  }

  .cv-carousel-item:first-of-type {
    z-index: 1;
  }

  .carousel-guide {
    background-image: url("../image/an_img1.png");
  }

  .carousel-guide__content {
    position: absolute;
    bottom: 5rem;
    width: 50%;
  }

  @media (max-width: 600px) {
    .carousel-guide__content {
      bottom: 3rem;
    }
  }

  @media (max-width: 992px) {
    .carousel-guide__content {
      width: 70%;
    }
  }

  .carousel-guide h2 {
    margin-bottom: .5rem;
    font-size: 3rem;
    letter-spacing: .4em;
    line-height: 1.2em;
  }

  .carousel-guide p {
    margin-bottom: 1rem;
    font-size: .95rem;
    line-height: 1.5em;
  }

  @media (max-width: 600px) {
    .carousel-guide h2 {
      font-size: 1.6rem;
    }

    .carousel-guide p {
      margin-bottom: .5rem;
      font-size: .85rem;
    }
  }

  .carousel-about {
    background-image: url("../image/an_img2.png");
  }

  .carousel-about h2 {
    margin-bottom: .5rem;
    font-size: 3rem;
    letter-spacing: .4em;
    line-height: 1.2em;
  }

  .carousel-about p {
    margin-bottom: 1rem;
    font-size: .95rem;
    line-height: 1.5em;
  }

  @media (max-width: 600px) {
    .carousel-about h2 {
      font-size: 1.6rem;
    }

    .carousel-about p {
      margin-bottom: .5rem;
      font-size: .85rem;
    }
  }

  .carousel-about__content {
    position: absolute;
    bottom: 5rem;
    width: 50%;
  }

  @media (max-width: 600px) {
    .carousel-about__content {
      bottom: 3rem;
    }
  }

  @media (max-width: 992px) {
    .carousel-about__content {
      width: 70%;
    }
  }

  .carousel-about .btn {
    margin-right: 1rem;
  }

  .carousel-about .btn + a {
    color: #fff;
  }

  @media (max-width: 600px) {
    .carousel-about .btn {
      margin-right: .7rem;
    }

    .carousel-about .btn + a {
      font-size: .85rem;
    }
  }

  .carousel-about .btn + a:hover {
    color: #1BBC8B;
  }
</style>