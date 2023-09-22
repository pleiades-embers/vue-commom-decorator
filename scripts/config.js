const path = require('path')
const version = process.env.VERSION || require('../package.json').version
const alias = require('@rollup/plugin-alias')
const ts = require('rollup-plugin-typescript2')
// const cjs = require('@rollup/plugin-commonjs')

const banner =
    '/*!\n' +
    ` * vue-common-decorator v${version}\n` +
    ' * Released under the MIT License.\n'
' */'
const aliases = require('./alias')


const resolve = p => {
    const base = p.split('/')[0]
    if (aliases[base]) {
      return path.resolve(aliases[base], p.slice(base.length + 1))
    } else {
      return path.resolve(__dirname, '../', p)
    }
}

const builds = {
    'full-dev': {
        entry: resolve('lib/index.js'),
        dest: resolve('lib/index.umd.js'),
        env: 'development',
        format: 'umd',
        // banner
    },
    
}


function genConfig(name) {
    const opts = builds[name]
    const isTargetingBrowser = !(
        opts.transpile === false || opts.format === 'cjs'
      )
    const config = {
        input: opts.entry,
        external: ['vue', 'vue-class-component', 'reflect-metadata'],
        plugins: [
          alias({
            entries: Object.assign({}, aliases, opts.alias)
          }),
          ts({
            tsconfig: path.resolve(__dirname, '../', 'tsconfig.json'),
            cacheRoot: path.resolve(__dirname, '../', 'node_modules/.rts2_cache'),
            tsconfigOverride: {
              compilerOptions: {
                //  if targeting browser, target es5
                //  if targeting node, es2017 means Node 8
                target: isTargetingBrowser ? 'es5' : 'es2017'
              },
              include: isTargetingBrowser ? ['src'] : ['src'],
              exclude: ['test', 'test-dts','jest',"swrv"]
            }
          })
        ].concat(opts.plugins || []),
        output: {
          file: opts.dest,
          format: opts.format,
        //   banner: opts.banner,
          name: 'VueCommonDecorator',
          globals: {
            vue: 'Vue',
            'vue-class-component': 'VueClassComponent',
          },
          exports: 'named'
        }
     }
}

if (process.env.TARGET) {
    module.exports = genConfig(process.env.TARGET)
  } else {
    // exports.getBuild = genConfig
    // exports.getAllBuilds = () => Object.keys(builds).map(genConfig)
}