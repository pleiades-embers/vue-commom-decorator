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
  },
  plugins: [
    ts({
      tsconfig: 'tsconfig.json'
  }),
  ],
  external: ['vue', 'vue-class-component', 'reflect-metadata',"swrv"],
}
