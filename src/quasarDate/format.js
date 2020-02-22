export function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function pad (v, length = 2, char = '0') {
  if (v === void 0 || v === null) {
    return v
  }

  let val = '' + v
  return val.length >= length
    ? val
    : new Array(length - val.length + 1).join(char) + val
}

export default {
  capitalize,
  pad
}
