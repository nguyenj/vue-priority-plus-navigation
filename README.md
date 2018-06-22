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
      <span v-for='(item, index) in mainItems' :key='index'>
        <span @click='clickItem(item)'>{{ item.label }}</span>
      </span>
      <div v-if='moreItems.length'>
        <button type='button'>More +</button>
        <span v-for='(item, index) in moreItems' :key='index'>
          <span @click='clickItem(item)'>{{ item.label }}</span>
        </span>
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
        { label: 'Page 1' },
        { label: 'Page 2' }
      ]
    }
  },
  methods: {
    clickItem (item) { console.log(item) }
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
