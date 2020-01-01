<template>
  <header class="header">
    <div class="container">
      <nav class="header-nav" :class="{ 'header-nav--active': openMenu }">
        <ul>
          <li class="header-nav__item">
            <router-link to="/">首页</router-link>
          </li>

          <li class="header-nav__item">
            <router-link to="/#repairnav">报修导航</router-link>
          </li>

          <li class="header-nav__item">
            <router-link to="/#worklist">值班表</router-link>
          </li>

          <li class="header-nav__item">
            <router-link to="/guide/foreword">网络指引</router-link>
          </li>

          <li class="header-nav__item">
            <a href="javascript:void(0);">关于我们</a>
            <ul class="header-nav--nesting">
              <li class="header-nav__item--nesting">
                <a href="https://wiki.zsxyww.com" target="_blank" rel="noopener">网维wiki</a>
              </li>

              <li class="header-nav__item--nesting">
                <a href="https://baike.baidu.com/item/电子科技大学中山学院网络维护科" target="_blank" rel="noopener">百度百科</a>
              </li>

              
            </ul>
          </li>
        </ul>
      </nav>

      <div class="header-nav-btn--phone">
        <a @click.prevent="toggleMenu">
          <cv-iconfont code="icon-menu"></cv-iconfont>
        </a>
      </div>

      <div class="header-logo">
        <img src="../assets/images/logo.jpg" alt="logo">
      </div>
    </div>
  </header>
</template>

<script>

  import CvIconfont from '../components/cv-iconfont.vue'

  export default {
    components: { CvIconfont },
    name: 'PageHeader',
    data () {
      return {
        openMenu: false
      }
    },
    methods: {
      toggleMenu () {
        this.openMenu = !this.openMenu
      }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    height: 60px;
    border: 1px solid #e7e7e7;
  }

  .header-logo img {
    margin-top: 5px;
    height: 50px;
  }

  .header-nav {
    float: right;
    margin-top: 10px;
  }

  .header-nav li {
    position: relative;
    display: inline-block;
    padding: 10px 0;
    z-index: 3;
  }

  @media (max-width: 600px) {
    .header-nav {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      max-height: 0;
      margin: 0;
      overflow: hidden;
      transition: max-height .6s linear;
    }

    .header-nav--active {
      max-height: 70rem;
    }

    .header-nav li {
      display: block;
      text-align: center;
      background-color: #fff;
    }
  }

  .header-nav a {
    padding: 0 10px;
  }

  .header-nav a:hover {
    color: #3598db;
  }

  .header-nav--nesting {
    position: absolute;
    top: 47px;
    left: 0;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    text-align: center;
    z-index: 1000;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    transition: max-height .5s ease-in;
  }

  @media (max-width: 600px) {
    .header-nav--nesting {
      position: relative;
      top: 10px;
    }
  }

  .header-nav li:hover .header-nav--nesting {
    max-height: 50rem;
  }

  .header-nav--nesting li {
    padding: 0;
  }

  .header-nav--nesting a {
    display: block;
    padding: 10px 0;
  }

  .header-nav-btn--phone {
    position: relative;
    top: 15px;
    display: none;
  }

  .header-nav-btn--phone .cv-iconfont {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 600px) {
    .header-nav-btn--phone {
      display: block;
      float: right;
    }
  }
</style>
