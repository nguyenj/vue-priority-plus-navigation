import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/priority-plus-navigation.vue',
  output: {
    name: 'PriorityPlusNavigation',
    dir: 'dist',
    sourcemap: true,
    format: 'es'
  },
  plugins: [
    commonjs(),
    vue(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ]
}
