<template>
  <div class="repair-nav" id="repairnav">
    <div class="repair-nav__header">
      <h1>报修导航</h1>
      <h2>选择你喜爱的方式</h2>
    </div>

    <div class="repair-nav__content">
      <div class="content__item">
        <cv-iconfont code="icon-cntencentwechat"></cv-iconfont>
        <h3>微信报修</h3>
        <p>使用中山学院网维报修系统进行报修，我们会优先解决</p>
        <router-link to="/repairGuide/wechat">了解更多</router-link>
      </div>

      <div class="content__item">
        <cv-iconfont code="icon-pageedit"></cv-iconfont>
        <h3>纸质报修</h3>
        <p>各个宿管处都有我们的报修表，和宿管说明你要网络报修</p>
        <router-link to="/repairGuide/paper">了解更多</router-link>
      </div>

      <div class="content__item">
        <cv-iconfont code="icon-phone"></cv-iconfont>
        <h3>电话报修</h3>
        <p>请尽量联系当天值班负责人，若联系不上，请联系其他负责人</p>
        <router-link to="/repairGuide/phone">了解更多</router-link>
      </div>

      <div class="content__item">
        <cv-iconfont code="icon-weibo"></cv-iconfont>
        <h3>微博报修</h3>
        <p>关注我们的微博，私信给我们电话号码和宿舍号等信息</p>
        <a href="http://weibo.com/zsxyww">了解更多</a>
      </div>
    </div>
  </div>
</template>

<script>
  import CvIconfont from '../../../components/cv-iconfont.vue'

  export default {
    components: { CvIconfont },
    name: 'repairNav'
  }
</script>

<style scoped>

</style>