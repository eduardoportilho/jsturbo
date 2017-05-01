/** @module date */

import str from './jsturbo-string'

/**
 * Converts a date to string in the format 'dd/MM/yyyy'
 * @param  {Date} Date object
 * @return {string}
 */
function toStringDMY (date) {
  return [
    str.pad(date.getDate().toString(), 2),
    str.pad((date.getMonth() + 1).toString(), 2),
    str.pad(date.getFullYear().toString(), 4)
  ].join('/')
}

/**
 * Check if a date object represents the current day
 * @param  {Date}
 * @return {Boolean}
 */
function isToday (date) {
  return toStringDMY(date) === toStringDMY(new Date())
}

/**
 * Create a Date object based on a string in the format 'dd/MM/yyyy'
 * @param  {string} string with a date in the format 'dd/MM/yyyy'
 * @return {Date}
 */
function fromStringDMY (stringDdMmYyyy) {
  stringDdMmYyyy = stringDdMmYyyy.replace(/\D/g, '')
  var day = parseInt(stringDdMmYyyy.substr(0, 2))
  var month = parseInt(stringDdMmYyyy.substr(2, 2)) - 1
  var year = parseInt(stringDdMmYyyy.substr(4, 4))

  if (year < 0 || year > 9999 ||
    month < 0 || month > 11 ||
    day < 1 || day > 31) {
    throw new Error('Invalid date')
  }

  return new Date(year, month, day, 0, 0, 0, 0)
}

/**
 * Lenient date parser.
 * @param {string} string - Date in a reasonable format.
 * @return {Date}
 * @throws {Error} If the date couldn't be parsed.
 */
function fromString (string) {
  var year, month, day
  try {
    var tokens = string.split(/\D/)

    // DD-MM
    if (tokens.length === 2) {
      day = tokens[0]
      month = tokens[1]
      year = new Date().getFullYear()
    } else if (tokens.length === 3) {
      if (tokens[0].length === 4) {
        // YYYY-XX-XX
        year = tokens[0]
        month = tokens[1]
        day = tokens[2]
      } else {
        // DD-MM-YYYY
        day = tokens[0]
        month = tokens[1]
        year = tokens[2]
      }
    } else {
      throw new Error('invalid length')
    }

    if (parseInt(month) > 12) {
      var temp = month
      month = day
      day = temp
    }
    return fromStringDMY(day + '/' + month + '/' + year)
  } catch (any) {
    throw new Error('Could not format date [' + string + '] (' + any.message + ')')
  }
}

const mainExport = {
  toStringDMY: toStringDMY,
  isToday: isToday,
  fromStringDMY: fromStringDMY,
  fromString: fromString
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
