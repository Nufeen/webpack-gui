// sets all boolean values in out structure to false recursively
export default function falsificate(x) {
  if (x == null) {
    return x
  }
  if (Array.isArray(x)) {
    x = x.map(falsificate)
  } else if (typeof x == 'object') {
    Object.keys(x).forEach(key => {
      x[key] = falsificate(x[key])
    })
  } else if (x === true) {
    x = false
  }
  return x
}
