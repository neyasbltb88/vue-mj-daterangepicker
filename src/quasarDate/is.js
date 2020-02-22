export function isDate (v) {
  return Object.prototype.toString.call(v) === '[object Date]'
}