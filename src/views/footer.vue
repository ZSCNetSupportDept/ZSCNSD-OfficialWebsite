<template>
  <div class="footer">
    <div class="footer-main container">
      <div class="footer-main__contact">
        <div class="footer-main__header">
          <h2 @click="changeShow('联系我们')">联系我们</h2>
        </div>

        <address class="footer-main__content" :class="{ 'footer-main__content--active': nowOpen === '联系我们' }">
          (+86)0760-88332760<br>
          <a href="mailto:#">admin@zsxyww.com</a><br>
          微信公众号：zsxyww<br>
          微博：中山学院网络维护科<br>
          电子科技大学中山学院实验楼 B 幢 207 室
        </address>
      </div><!-- / footer-main__contact -->

      <div class="footer-main__tools">
        <div class="footer-main__header">
          <h2 @click="changeShow('便捷工具')">便捷工具</h2>
        </div>

        <div class="footer-main__content" :class="{ 'footer-main__content--active': nowOpen === '便捷工具' }">
          <ul>
            
            <li><a href="http://gd.189.cn/webpay/chongzhi/czindex.jsp" target="_blank" rel="noopener">宽带充值</a></li>
            <li><a href="http://www2.zsc.edu.cn/xxzx" target="_blank" rel="noopener">信息中心官方网址</a></li>
            <li><a href="http://jwgln.zsc.edu.cn/" target="_blank" rel="noopener">教务系统</a></li>
          </ul>
        </div>
      </div><!-- / footer-main__tools -->

      <div class="footer-main__aboutus">
        <div class="footer-main__header">
          <h2 @click="changeShow('网维百科')">网维百科</h2>
        </div>

        <div class="footer-main__content" :class="{ 'footer-main__content--active': nowOpen === '网维百科' }">
          <ul>
            <li><a href="https://wiki.zsxyww.com" target="_blank" rel="noopener">网维wiki</a></li>
            <li><a href="http://baike.baidu.com/view/6287923.htm" target="_blank" rel="noopener">百度百科</a></li>
          </ul>
        </div>
      </div><!-- / footer-main__aboutus -->
    </div><!-- / footer-main -->

    <p>Copyright © 2020 电子科技大学中山学院网络维护科</p>
  </div>
</template>

<script>
  export default {
    name: 'PageFooter',
    data () {
      return {
        nowOpen: ''
      }
    },
    methods: {
      changeShow (open) {
        this.nowOpen = open === this.nowOpen ? '' : open
      }
    }
  }
</script>

<style scoped>
  .footer {
    padding: 2rem 0 1rem 0;
    color: #5f6a6b;
    background-color: #eee;
  }

  .footer > p {
    margin-top: 1rem;
    font-size: .8rem;
    text-align: center;
  }

  .footer h2 {
    font-size: 1.7rem;
    font-weight: 700;
    color: #5e696a;
    margin-bottom: 1rem;
  }

  .footer address {
    font-size: .9rem;
    line-height: 1.5em;
  }

  .footer a {
    font-size: .9rem;
    line-height: 1.4em;
    color: #3598db;
  }

  .footer-main > div {
    display: inline-block;
    width: 27%;
    vertical-align: top;
  }

  .footer-main > div:first-of-type {
    width: 40%;
  }

  @media (max-width: 767px) {
    .footer-main > div {
      width: 100%;
      margin-bottom: .5rem;
      overflow: hidden;
    }

    .footer-main__header h2 {
      cursor: pointer;
    }

    .footer-main__content {
      max-height: 0;
      transition: max-height .6s linear;
    }

    .footer-main__content--active {
      max-height: 20rem;
    }
  }

  @supports (display: grid) {
    .footer-main {
      display: grid;
      grid-template-columns: 1.6fr 1.3fr 1fr;
    }

    .footer-main > div {
      width: auto;
    }

    .footer-main > div:first-of-type {
      width: auto;
    }

    @media (max-width: 767px) {
      .footer-main {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
