<template>
  <div class="cv-carousel-item" :style="{
    transform: `translateX(${ translate }px)`
  }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'cv-carousel-item',
    data () {
      return {
        translate: 0
      }
    },
    methods: {
      translateItem (index, activeIndex) {
        let parentWidth = this.$parent.$el.offsetWidth
        this.translate = (index - activeIndex) * parentWidth
      }
    },
    created () {
      this.$parent && this.$parent.updateItems()
    },
    destroyed () {
      this.$parent && this.$parent.updateItems()
    }
  }
</script>
