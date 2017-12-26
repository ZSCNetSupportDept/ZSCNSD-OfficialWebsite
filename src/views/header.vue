<template>
  <header class="header">
    <div class="container">
      <nav class="header-nav">
        <ul>
          <li class="header-nav__item">
            <router-link to="/home">首页</router-link>
          </li>

          <li class="header-nav__item">
            <router-link to="/home#repairnav">报修导航</router-link>
          </li>

          <li class="header-nav__item">
            <router-link to="/home#worklist">值班表</router-link>
          </li>

          <li class="header-nav__item">
            <router-link to="/guide/foreword">网络指引</router-link>
          </li>

          <li class="header-nav__item">
            <a href="javascript:void(0);">关于我们</a>
            <ul class="header-nav--nesting">
              <li class="header-nav__item--nesting">
                <a href="http://wiki.sola.love" target="_blank">网维wiki</a>
              </li>

              <li class="header-nav__item--nesting">
                <a href="https://baike.baidu.com/item/电子科技大学中山学院网络维护科" target="_blank">百度百科</a>
              </li>

              <li class="header-nav__item--nesting">
                <a href="http://baike.sogou.com/v63143404.htm?fromTitle=电子科技大学中山学院网络维护科" target="_blank">搜狗百科</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="header-logo">
        <img src="../assets/images/logo.jpg">
      </div>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'PageHeader'
  }
</script>

<style scoped>
  .header {
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
    z-index: 2;
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
</style>