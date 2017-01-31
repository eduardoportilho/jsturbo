/**
 * Test is a value is undefined, null, empty string, empty array or empty object
 * @param  {any} value
 * @return {Boolean}
 */
function isEmpty (any) {
  if (any === undefined || any === null) {
    return true
  }
  if (typeof any === 'string') {
    return any.trim().length <= 0
  }
  if (Array.isArray(any)) {
    return any.length <= 0
  }
  if (typeof any === 'object') {
    return Object.keys(any).length <= 0
  }
  return false
}

const mainExport = {
  isEmpty: isEmpty
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
