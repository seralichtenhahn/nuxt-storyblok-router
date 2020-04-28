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
  },
  build: {
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
