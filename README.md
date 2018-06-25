# Vue Priority Plus Navigation

Responsively show menu items as the horizonal space allows and hides the rest.

## Install

```
npm install --save vue-priority-plus-navigation
```

## Usage

```
<template>
  <PriorityPlus :list="menuItems">
    <div slot-scope='{ mainItems, moreItems }'>
      <a v-for='(item, index) in mainItems'
          :key='index'
          :href='item.link'
          :title='item.label'
          @click.prevent='clickItem($event, item)'>
        {{ item.label }}
      </a>
      <div v-if='moreItems.length'>
        <button type='button'>More +</button>
        <div class='dropdown'>
          <a v-for='(item, index) in moreItems'
              :key='index'
              :href='item.link'
              :title='item.label'
              @click.prevent='clickItem($event, item)'>
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
  </PriorityPlus>
</template>

<script>
import PriorityPlus from 'vue-priority-plus-navigation'

export default {
  components: [ PriorityPlus ],
  data () {
    return {
      menuItems: [
        { label: 'Page 1', link: '/page-1' },
        { label: 'Page 2', link: '/page-2' },
        { label: 'Vue PriorityPlus Navigation Readme', link: 'https://github.com/nguyenj/vue-priority-plus-navigation/blob/master/README.md' }
      ]
    }
  },
  methods: {
    clickItem (event, item) { console.log(item) }
  }
}
</script>
```

## API

| `slot-scope` variables | Type | Description |
| - | - | - |
| `mainItems` | `Array` | The visible main menu items |
| `moreItems` | `Array` | The menu items that don't fit in the main menu |


## License

MIT &copy; [John Nguyen](http://jnguyen.me/)
