export default function generateNpmCommand(data) {
    const w = 'webpack webpack-cli webpack-dev-server'

    const p = data.plugins.reduce((acc, x) => {
      if (x.npm != null && x.active == true) {
        acc += x.npm + ' '
      }
      return acc
    }, '')

    const l = loader =>
      loader.config.use.reduce((acc, x) => {
        if (x.__npm != null && x.__active == true) {
          acc += x.__npm + ' '
        }

        return acc
      }, '')

    const ll = data.loaders.reduce((a, x) => a + l(x), '')

    return `npm i -D ${w} ${ll} ${p}`
  }
