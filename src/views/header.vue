<template>
  <header class="header">
    <nav class="header-nav">
      <ul>
        <li class="header-nav__item">
          <router-link to="home">首页</router-link>
        </li>

        <li class="header-nav__item">
          <router-link to="home#repairnav">报修导航</router-link>
        </li>

        <li class="header-nav__item">
          <router-link to="home#worklist">值班表</router-link>
        </li>

        <li class="header-nav__item">
          <router-link to="home#worklist">网络指引</router-link>
        </li>

        <li class="header-nav__item">
          <a href="javascript:void(0);">关于我们</a>
          <ul class="header-nav--nesting">
            <li class="header-nav__item--nesting">
              <a href="http://wiki.sola.love">网维wiki</a>
            </li>

            <li class="header-nav__item--nesting">
              <a href="https://baike.baidu.com/item/电子科技大学中山学院网络维护科">百度百科</a>
            </li>

            <li class="header-nav__item--nesting">
              <a href="http://baike.sogou.com/v63143404.htm?fromTitle=电子科技大学中山学院网络维护科">搜狗百科</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <div class="header-logo">
      <img src="../assets/images/logo.jpg">
    </div>
  </header>
</template>

<script>

  export default {
    name: 'PageHeader'
  }
</script>

<style scoped>

</style>