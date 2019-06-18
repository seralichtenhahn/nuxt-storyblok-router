const { resolve } = require('path')

const accessToken = 'pdkyV4RUmoFzi3IpAwbTrQtt'

module.exports = {
  rootDir: resolve(__dirname, '../'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  env: {
    accessToken
  },
  modules: [resolve(__dirname, '../')],
  plugins: ['./plugins/storyblokapi.js'],
  storyblokRouter: {
    accessToken,
    defaultLanguage: 'en',
    contentTypeDir: 'example/pages'
  }
}
