import stringify from 'stringify-object'
import Prism from 'prismjs'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js'
import 'prismjs/themes/prism.css'

import { plugins, devServer, removeMetaData, conditionalize } from './utils'

const np = Prism.plugins.NormalizeWhitespace

const unwrap = s => {
  return s
    .replace(/\'@@(\w+)@@\'/g, "args.mode == 'development' ? $1 : false")
    .replace("args.mode == 'development' \? false : false", 'false')
}

export default function generateCode(data) {
  const deps = data.plugins
    .filter(x => x.active && x.npm != null)
    .map(x => `import ${x.name} from '${x.npm}'\n`)
    .join('')

  const devtool =
    data.devtool == null || data.devtool == 'none'
      ? ''
      : `\n  devtool: '${data.devtool}'`

  const loadersCode = data.loaders.reduce((s, l) => {
    const d = removeMetaData(l.config)
    s += stringify(conditionalize(d)) + ','
    return unwrap(s)
  }, '')

  const loaders = `module: {
    rules: [
${np.normalize(loadersCode, { indent: 2 })}
    ]
  },`

  const exports = data =>
    `
${deps}
module.exports = (env, args) => ({
  ${loaders}
  ${plugins(data)}
  devServer: ${devServer(data)}
  ${devtool}
})`

  const code = np.normalize(`${exports(data)}`, {
    'remove-trailing': true,
    'left-trim': true,
    'remove-initial-line-feed': true,
    indent: 0
  })

  return code
}
