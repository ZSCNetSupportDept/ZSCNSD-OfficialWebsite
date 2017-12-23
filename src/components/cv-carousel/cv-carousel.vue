<template>
  <div class="cv-carousel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'cv-carousel',
    data () {
      return {
        items: [],
        activeIndex: -1,
        timer: null
      }
    },
    watch: {
      activeIndex (val) {
        this.setActiveItem(val)
      }
    },
    methods: {
      updateItems () {
        this.items = this.$children.filter(child => child.$options.name === 'cv-carousel-item')
      },
      setActiveItem (index) {
        this.activeIndex = index

        this.items.forEach((item, index) => {
          item.translateItem(index, this.activeIndex)
        })
      }
    },
    mounted () {
      this.activeIndex = 0
    }
  }
</script>
