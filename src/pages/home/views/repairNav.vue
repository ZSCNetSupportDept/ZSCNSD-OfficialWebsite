<template>
  <div class="repair-nav" id="repairnav">
    <div class="container">
      <div class="repair-nav__header">
        <h1>报修导航</h1>
        <h2>选择你喜爱的方式</h2>
      </div>

      <div class="repair-nav__content">
        <div class="content__item">
          <cv-iconfont code="icon-cntencentwechat"></cv-iconfont>
          <h3>微信报修</h3>
          <p>使用中山学院网维报修系统进行报修，我们会优先解决</p>
          <router-link to="/repairGuide/wechat" class="btn">了解更多</router-link>
        </div>

        <div class="content__item">
          <cv-iconfont code="icon-pageedit"></cv-iconfont>
          <h3>纸质报修</h3>
          <p>各个宿管处都有我们的报修表，和宿管说明你要网络报修</p>
          <router-link to="/repairGuide/paper" class="btn">了解更多</router-link>
        </div>

        <div class="content__item">
          <cv-iconfont code="icon-phone"></cv-iconfont>
          <h3>电话报修</h3>
          <p>请尽量联系当天值班负责人，若联系不上，请联系其他负责人</p>
          <router-link to="/repairGuide/phone" class="btn">了解更多</router-link>
        </div>

        <div class="content__item">
          <cv-iconfont code="icon-weibo"></cv-iconfont>
          <h3>微博报修</h3>
          <p>关注我们的微博，私信给我们电话号码和宿舍号等信息</p>
          <a href="http://weibo.com/zsxyww" class="btn">了解更多</a>
        </div>
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
  .repair-nav {
    margin: 0 0 3rem 0;
  }

  .repair-nav__header {
    text-align: center;
  }

  .repair-nav__header h1 {
    margin-bottom: .5rem;
    font-size: 2rem;
    font-weight: 500;
    color: #5e696a;
  }

  .repair-nav__header h2 {
    margin-bottom: .8rem;
    font-size: .8rem;
    color: #5e696a;
  }

  .repair-nav__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
  }

  @media (max-width: 768px) {
    .repair-nav__content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
  }

  .content__item {
    position: relative;
    padding-bottom: 3rem;
    text-align: center;
  }

  .content__item .cv-iconfont {
    width: 43%;
    height: auto;
    fill: #606a6c;
  }

  .content__item h3 {
    margin-bottom: .5rem;
    font-size: 1.2rem;
  }

  .content__item p {
    margin-bottom: 1rem;
    font-size: .9rem;
    line-height: 1.3em;
  }

  .content__item .btn {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    display: inline-block;
    transform: translateX(-50%);

    white-space: nowrap;
  }
</style>