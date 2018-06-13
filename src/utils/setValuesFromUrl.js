import falsificate from './falsificate'

import makeHash from './makeHash'

function generateHashMap(d) {
  const M = {}

  d.plugins.forEach(p => {
    const name = 'plugin.' + p.name
    const hash = makeHash(name)
    M[hash] = name
  })

  d.loaders.forEach(fileType => {
    const fname = 'loader.' + fileType.__name
    const hash = makeHash(fname)
    M[hash] = fname

    fileType.config.use.forEach(loader => {
      const lname = fname + '.' + loader.loader
      const hash = makeHash(lname)
      M[hash] = lname

      if (loader.options == null) {
        return null
      }

      Object.keys(loader.options).forEach(key => {
        if (typeof loader.options[key] == 'boolean') {
          const optionName = `${lname}.${key}`
          const hash = makeHash(optionName)
          M[hash] = optionName
        }
      })
    })
  })

  return M
}

function restore(d, flattened) {
  const hash = generateHashMap(d)
}

const sections = {
  L: 'loaders',
  P: 'plugins'
}

function validate(arrayOfHashes) {
  const invalid = arrayOfHashes.find(
    hash => typeof hash != 'string' || hash.length != 4
  )
  return invalid == null
}

export default function setValuesFromUrl(d, ls) {
  // set all boolean values to false recursively
  d = falsificate(d)

  const chunks = ls.slice(1).match(/.{1,4}/g)

  if (!validate(chunks)) {
    return d
  }

  const HMap = generateHashMap(d)
  console.log(HMap)

  const S = chunks.map(x => {
    const c = HMap[x]
    return c
  })

  // iterate, compare and set truthy values true finally
  d.plugins.forEach(x => {
    if (S.includes(`plugin.${x.name}`)) {
      x.active = true
    }
  })

  d.loaders.forEach(ftype => {
    if (S.includes(`loader.${ftype.__name}`)) {
      ftype.__active = true
    }

    ftype.config.use.forEach(l => {
      if (S.includes(`loader.${ftype.__name}.${l.loader}`)) {
        l.__active = true

        if (l.options == null) {
          return null
        }

        Object.keys(l.options).forEach(key => {
          if (S.includes(`loader.${ftype.__name}.${l.loader}.${key}`)) {
            l.options[key] = true
          }
        })
      }
    })
  })

  return d
}
