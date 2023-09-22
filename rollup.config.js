import ts from 'rollup-plugin-typescript2'
import path from 'path'
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
    // format: 'umd',
    // name:"VueCommonDecorator"
    // sourcemap: true, 
  },
  plugins: [
    ts({
      tsconfig: 'tsconfig.json'
  }),
  ],
  external: ['vue', 'vue-class-component', 'reflect-metadata',"swrv"],
}
