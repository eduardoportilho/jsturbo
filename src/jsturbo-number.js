/** @module num */

import str from './jsturbo-string'
import obj from './jsturbo-object'

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

/**
 * Test if a value is an integer
 * @param  {any} value to be tested
 * @return {Boolean} true if the paramter is an integer number
 */
function isInt (number) {
  return typeof number === 'number' && isFinite(number) && (number % 1 === 0)
};

/**
 * Test if a value is an number
 * @param  {any} value to be tested
 * @return {Boolean} true if the paramter is a number
 */
function isNumber (number) {
  return typeof number === 'number' && isFinite(number)
}

/**
 * Convert a value to a number
 * @param  {any}
 * @return {number}
 */
function toNumber (any) {
  if (obj.isEmpty(any)) return NaN
  return str.toNumber(any.toString())
};

const mainExport = {
  format: format,
  isInt: isInt,
  isNumber: isNumber,
  toNumber: toNumber
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
