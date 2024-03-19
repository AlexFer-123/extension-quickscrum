const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      defaultAssets: {
        font: {
          family: 'Inter Tight'
        }
      }
		}
  }
})
