import Prism from 'prismjs'
import stringify from 'stringify-object'

const np = Prism.plugins.NormalizeWhitespace

const plugins = data => {
const d = data.plugins.filter(x => x.active)
return `
  plugins:[${d.map(x => '\n' + np.normalize(x.chunk, { indent: 2 }))}
  ],
`
}

const devServer = data =>
  `${np.normalize(stringify(data.devServer), {
    indent: 1,
    'tabs-to-spaces': 2,
    'remove-initial-line-feed': false
  })},`

function removeMetaData(config) {
  const out = Object.assign({}, config)
  out.use = out.use.filter(x => x.__active).map(clear)
  return out
}

function clear(obj) {
  const out = Object.assign({}, obj)
  for (const key in out) {
    if (key.includes('__')) {
      delete out[key]
    }
  }
  return out
}

const conditionalKeys = ['sourceMap', 'minimize']

function conditionalize(src) {
  const out = Object.assign({}, src)
  out.use = out.use.map(cnd)
  return out
}

const wrap = x => {
  return '@@' + x.toString() + '@@'
}

function cnd(obj) {
  if (!obj.options) {
    return obj
  }

  const out = deepcopy(obj)
  Object.keys(obj.options).forEach(key => {
    if (conditionalKeys.includes(key)) {
      out.options[key] = wrap(obj.options[key])
    }
  })
  return out
}

function deepcopy(x) {
  const recurseObj = x => (typeof x === 'object' ? deepcopy(x) : x)
  const cloneObj = (y, k) => {
    y[k] = recurseObj(x[k])
    return y
  }
  if (!x) {
    return x
  }
  if (Array.isArray(x)) {
    return x.map(recurseObj)
  }
  return Object.keys(x).reduce(cloneObj, {})
}

export { plugins, devServer, removeMetaData, conditionalize }
