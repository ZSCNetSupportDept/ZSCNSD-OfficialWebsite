<template>
  <a class="go-top" @click="goTop" v-show="show">
    <cv-iconfont code="icon-up"></cv-iconfont>
  </a>
</template>

<script>
  import CvIconfont from '../components/cv-iconfont.vue'
  import {throttle} from '../util/throttle'

  export default {
    components: { CvIconfont },
    name: 'goTop',
    data () {
      return {
        show: false
      }
    },
    methods: {
      goTop () {
        window.scrollTo(0, 0)
      },
      isShow () {
        this.show = window.scrollY >= 250
      }
    },
    mounted () {
      window.onscroll = throttle(this.isShow, 200, 200)
    },
    destroyed () {
      window.onscroll = null
    }
  }
</script>

<style scoped>
  .go-top {
    position: fixed;
    left: 50%;
    bottom: 3rem;

    width: 2rem;
    height: 2rem;

    background-color: #1ebc9d;
    opacity: .4;
    cursor: pointer;

    transition: all .5s linear;
  }

  .go-top:hover {
    opacity: 1;
  }

  .go-top .cv-iconfont {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -50%);

    fill: #fff;
  }

  @media (max-width: 800px) {
    .go-top {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .go-top {
      transform: translateX(370px);
    }
  }

  @media (min-width: 992px) {
    .go-top {
      transform: translateX(480px);
    }
  }

  @media (min-width: 1200px) {
    .go-top {
      transform: translateX(590px);
    }
  }
</style>