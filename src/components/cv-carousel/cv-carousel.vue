<template>
  <div class="cv-carousel" @mouseover="stopLoop" @mouseout="beginLoop">
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
        this.timer = setTimeout(() => {
          this.activeIndex = (this.activeIndex + 1) % this.items.length
          this.beginLoop()
        }, 5000)
      },
      stopLoop () {
        clearTimeout(this.timer)
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
