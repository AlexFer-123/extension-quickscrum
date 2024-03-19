/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    google: {
      families: ['Inter Tight:100,300,400,500,700,900'],
    },
    active: function() {
      console.log('Font ok')
    }
  })

  console.log(webFontLoader)
}
