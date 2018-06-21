import VuePlugin from 'rollup-plugin-vue'

export default {
  input: 'src/priority-plus-navigation.vue',
  output: {
    name: 'PriorityPlusNavigation',
    file: 'priority-plus-navigation.js',
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    VuePlugin()
  ]
}
