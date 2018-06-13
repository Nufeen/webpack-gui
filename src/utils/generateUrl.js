import makeHash from './makeHash'

export default function updateUrl(d) {
  const S =
    '?' +
    flatten(d)
      .map(makeHash)
      .join('')
  history.pushState(S, Math.random(), S)
}

// Compress to flat structure containing boolean fields only
// Everything not mentioned considered false
function flatten(d) {
  const DS = ''
  const DT = ''

  const P = d.plugins
    .filter(p => p.active)
    .map(p => 'plugin.' + p.name)

  const L = d.loaders
    .reduce(
      (a, x) => a.concat(processFileType(x)),
    [])

  return P.concat(L)
}

// d == certain filetype config section
function processFileType(d) {
  if (!d.__active) {
    return []
  }

  const filetype = `loader.${d.__name}`

  const acc = [filetype]

  const loaders = d.config.use
    .filter(x => x.__active)
    .forEach(x => {
      const l = `${filetype}.${x.loader}`
      acc.push(l)

      if (x.options == null) {
        return null
      }

      Object.keys(x.options).forEach(key => {
        if (x.options[key] === true) {
          const s = `${l}.${key}`
          acc.push(s)
        }
      })
    })

  return acc
}
