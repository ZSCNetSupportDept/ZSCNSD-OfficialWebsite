<template>
  <div class="cv-carousel" @mouseenter="stopLoop" @mouseleave="beginLoop">
    <slot></slot>

    <div class="cv-carousel-nav">
      <ul>
        <li v-for="(_, index) in items" :class="{ active: index === activeIndex }">
          <a @click.prevent="setActiveItem(index)"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cv-carousel',
    data () {
      return {
        items: [],
        activeIndex: 0,
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
      },
      beginLoop () {
        this.timer = setInterval(() => {
          this.activeIndex = (this.activeIndex + 1) % this.items.length
        }, 5000)
      },
      stopLoop () {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    mounted () {
      this.setActiveItem(this.activeIndex)

      this.beginLoop()
    },
    beforeDestroy () {
      this.stopLoop()
    }
  }
</script>
