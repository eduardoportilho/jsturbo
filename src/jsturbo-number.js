/**
 * Convert a number to a formated string
 * @param  {number} number The number to be formated
 * @param  {number} options.decimalPlaces The number of decimal places of the output (optional)
 * @param  {string} options.decimalSeparator The character used as a decimal separator (default: '.')
 * @return {string} The formatted number
 */
function format (number, options) {
  options = options || {}
  var formatted = number.toString()
  if (options.decimalPlaces) {
    formatted = number.toFixed(options.decimalPlaces)
  }
  if (options.decimalSeparator) {
    formatted = formatted.replace(/\./, options.decimalSeparator)
  }
  return '' + formatted
}

const mainExport = {
  format: format
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
