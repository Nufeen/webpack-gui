// variant of DJB2:
// http://www.cse.yorku.ca/~oz/hash.html
// https://softwareengineering.stackexchange.com/questions/49550/which-hashing-algorithm-is-best-for-uniqueness-and-speed/145633#145633
// https://stackoverflow.com/a/22429679
export default function makeHash(str) {
  let hash10 = 0
  for (let i = 0; i < str.length; i++) {
    hash10 = ~~((hash10 << 5) - hash10 + str.charCodeAt(i))
  }
  const hash32x4 = Math.abs(hash10)
    .toString(32)
    .slice(0, 4)
  return hash32x4
}
