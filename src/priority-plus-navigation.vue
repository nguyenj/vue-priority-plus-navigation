<script>
function getWidth(el) {
  const styles = window.getComputedStyle(el)
  const margin = parseFloat(styles['marginLeft']) +
    parseFloat(styles['marginRight'])

  return Math.ceil(el.getBoundingClientRect().width + margin)
}

export default {
  name: 'PriorityPlusMenu',

  props: {
    list: {
      type: Array,
      required: true,
      default () { return [] }
    }
  },

  data () {
    return {
      accumItemWidths: [],
      isOverflowing: false
    }
  },

  render () {
    return this.$scopedSlots.default({
      mainItems: this.mainItems,
      moreItems: this.moreItems,
      isOverflowing: this.isOverflowing
    })
  },

  beforeCreate () {
    this.$options.propsData.list.forEach((item) => {
      this.$set(item, 'hidden', false)
    })
  },

  async mounted () {
    await this.$nextTick()

    this.storeItemWidths()
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    storeItemWidths () {
      let sum = 0
      this.list.forEach((item, index) => {
        this.$set(item, 'width', getWidth(this.$el.children[index]))
        sum += item.width
        this.$set(this.accumItemWidths, index, sum)
      })
    },

    getContainerWidth () {
      return Math.ceil(this.$el.getBoundingClientRect().width)
    },

    getAdjustedContainerWidth () {
      let offset = 0

      if (this.isOverflowing) {
        offset = getWidth(this.$el.children[this.$el.children.length - 1])
      }

      return this.getContainerWidth() - offset
    },

    getLastVisibleItemIndex () {
      let index = 0
      const adjustedContainerWidth = this.getAdjustedContainerWidth()
      while (index < this.accumItemWidths.length) {
        if (this.accumItemWidths[index] > adjustedContainerWidth) {
          index--
          break
        }
        index++
      }

      return index
    },

    async handleResize () {
      this.isOverflowing = this.accumItemWidths[this.accumItemWidths.length - 1] > this.getContainerWidth()

      await this.$nextTick()

      const lastVisibleItemIndex = this.getLastVisibleItemIndex()

      this.list.forEach((item, index) => {
        item.hidden = index > lastVisibleItemIndex
      })
    }
  },

  computed: {
    mainItems () {
      return this.list.filter((item) => !item.hidden)
    },

    moreItems () {
      return this.list.filter((item) => item.hidden)
    }
  }
}
</script>
