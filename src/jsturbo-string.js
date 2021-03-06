/** @module str */

/**
 * Append the given char into the left of the string so change its length to the provided value.
 * ex: pad('10', 4, '-'); //> '--10'
 * @param {string} string String to be padded
 * @param {number} newLength Length of the padded string
 * @param {string} padChar Char used to pad the string, default = '0'
 * @return {string} Padded string
 */
function pad (string, newLength, padChar) {
  padChar = padChar || '0'
  let paddedString = string + ''
  return paddedString.length >= newLength ? paddedString : new Array(newLength - paddedString.length + 1).join(padChar) + paddedString
}

/**
 * Test if the string represent a valid number.
 * @param {string} string String to be tested
 * @param {string} decimalSeparator Character used as decimal separator, default = '.'
 * @return {boolean} String is a number?
 */
function isNumber (string, decimalSeparator) {
  var str = string
  // prevent '' to be recognized as a number
  if (!containsDigits(string)) {
    return false
  }
  if (decimalSeparator) {
    // special case: if the decimal separator is not '.', any dot make the string not a number
    if (decimalSeparator !== '.' && str.indexOf('.') >= 0) {
      return false
    }
    str = string.replace(decimalSeparator, '.')
  }
  return !isNaN(Number(str))
}

/**
 * Convert a string to a number on a pretty lenient way.
 * @param  {string} String to be converted
 * @return {number|NaN} Number or NaN if not possible
 */
function toNumber (string) {
  if (string === null || string === undefined) return NaN
  var convertedString = string
    .replace(/[^\d.,]/g, '')  // remove everything except numbers, '.' and ','
    .replace(/,/g, '.')       // replaces ',' for '.'
  var idxUltimoPonto = convertedString.lastIndexOf('.')
  if (idxUltimoPonto > 0) {
    var parteInteira = convertedString.substring(0, idxUltimoPonto).replace(/\./g, '')
    convertedString = parteInteira + '.' + convertedString.substring(idxUltimoPonto + 1)
  }
  if (convertedString.trim().length === 0) return NaN

  var signal = 1
  let signalCharCode = string.charCodeAt(0)
  // 45: Hyphen, 8722: Minus Sign
  if (signalCharCode === 45 || signalCharCode === 8722) {
    signal = -1
  }
  // make sure that the return is a number and fix the signal
  return convertedString * signal
}

/**
 * Check if the string contains at least N letters (case insensitive).
 * @param  {string} string - String to test.
 * @param  {number} [count=1] - Minimum number of letters to return true.
 * @return {Boolean}
 */
function containsAlpha (string, count) {
  var matches = string.match(/[a-z]/gi)
  return (matches != null) && (matches.length >= (count || 1))
}

/**
 * Check if the string contains at least N digits.
 * @param  {string} string - String to test.
 * @param  {number} [count=1] - Minimum number of digits to return true.
 * @return {Boolean}
 */
function containsDigits (string, count) {
  var matches = string.match(/\d/g)
  return (matches != null) && (matches.length >= (count || 1))
}

const mainExport = {
  pad: pad,
  isNumber: isNumber,
  toNumber: toNumber,
  containsAlpha: containsAlpha,
  containsDigits: containsDigits
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
