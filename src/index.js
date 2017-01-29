
/**
 * Apeend the given char into the left of the string so change its length to the provided value.
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
};

/**
 * Test if the string represent a valid number.
 * @param {string} string String to be tested
 * @param {string} decimalSeparator Character used as decimal separator, default = '.'
 * @return {boolean} String is a number?
 */
function isNumber (string, decimalSeparator) {
  var str = string
  if (decimalSeparator) {
    // special case: if the decimal separator is not '.', any dot make the string not a number
    if (decimalSeparator !== '.' && str.indexOf('.') >= 0) {
      return false
    }
    str = string.replace(decimalSeparator, '.')
  }
  return !isNaN(Number(str))
};

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

  var signal = string.indexOf('-') === 0 ? -1 : 1
  // make sure that the return is a number and fix the signal
  return convertedString * signal
};

const mainExport = {
  str: {
    pad: pad,
    isNumber: isNumber,
    toNumber: toNumber
  }
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
