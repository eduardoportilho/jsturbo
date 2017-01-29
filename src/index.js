
/**
 * Apeend the given char into the left of the string so change its length to the provided value.
 * ex: pad('10', 4, '-'); //> '--10'
 * @param string String to be padded
 * @param newLength Length of the padded string
 * @param padChar Char used to pad the string, default = '0'
 * @return Padded string
 */
function pad (string, newLength, padChar) {
  padChar = padChar || '0'
  let paddedString = string + ''
  return paddedString.length >= newLength ? paddedString : new Array(newLength - paddedString.length + 1).join(padChar) + paddedString
};

/**
 * Test if the string represent a valid number.
 * @param string String to be tested
 * @param decimalSeparator Character used as decimal separator, default = '.'
 * @return true|false
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

const mainExport = {
  str: {
    pad: pad,
    isNumber: isNumber
  }
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
