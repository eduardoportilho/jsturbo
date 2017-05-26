/** @module date */

import str from './jsturbo-string'

// Possible date separators: '\', '/', '-', ' ', '.'
const DATE_SEPARATORS_REGEXP = /[\\/-\s.]/
const MONTH_ABBREVIATIONS = {
  'jan': '01',
  'feb': '02',
  'fev': '02',
  'febr': '02',
  'mar': '03',
  'mars': '03',
  'apr': '04',
  'abr': '04',
  'april': '04',
  'may': '05',
  'mai': '05',
  'maj': '05',
  'jun': '06',
  'june': '06',
  'juni': '06',
  'jul': '07',
  'july': '07',
  'juli': '07',
  'ago': '08',
  'aug': '08',
  'set': '09',
  'sep': '09',
  'sept': '09',
  'out': '10',
  'oct': '10',
  'okt': '10',
  'nov': '11',
  'dez': '12',
  'dec': '12'
}

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
  // TODO This function is huge and should be refactored
  var year, month, day
  try {
    var tokens = string.split(DATE_SEPARATORS_REGEXP)
    let currentYear = new Date().getFullYear()

    if (tokens.length < 2 || tokens.length > 3) {
      throw new Error('invalid length')
    }

    var monthAbbrevIndex = tokens.findIndex(isMonthAbbreviation)
    if (monthAbbrevIndex >= 0) {
      month = MONTH_ABBREVIATIONS[tokens[monthAbbrevIndex]]
      // dd MMM
      // MMM dd
      if (tokens.length === 2) {
        let dayIndex = monthAbbrevIndex === 1 ? 0 : 1
        day = tokens[dayIndex]
        year = currentYear
      } else {
        // dd MMM yyyy
        // yyyy MMM dd
        if (tokens[0].length === 4) {
          year = tokens[0]
          day = tokens[2]
        } else {
          year = tokens[2]
          day = tokens[0]
        }
      }
    } else if (tokens.length === 2) {
      // DD-MM
      day = tokens[0]
      month = tokens[1]
      year = currentYear
    } else {
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

/**
 * Check if a string can be converted to a valid date.
 * @param {string} string - String to check.
 * @return {Boolean}
 */
function isDate (string) {
  // 0: if contains letters, check if is date wih abbrev month
  if (string.search(/[a-z]/gi) >= 0) {
    return isDateWithMonthAbbreviation(string)
  }
  // 1: contains any char other than digits, '/', '-' or space?
  var invalidChar = string.search(/[^\d/-\s]/g)
  if (invalidChar >= 0) {
    return false
  }
  try {
    // 2: try to convert
    fromString(string)
    return true
  } catch (any) {
    return false
  }
}

/**
 * Check if a string represent an abbreviated month.
 * @param {string} string - String to check.
 * @return {Boolean}
 */
function isMonthAbbreviation (text) {
  if (!/^[a-z]{3,4}$/i.test(text)) {
    return false
  }
  return MONTH_ABBREVIATIONS[text.toLowerCase()] !== undefined
}

/**
 * Check if the string is a date with abbreviated month.
 * @param {string} string - String to check.
 * @return {Boolean}
 */
function isDateWithMonthAbbreviation (text) {
  // [space] ([Day or Year] [separator])? [Month abbreviation] ([separator] [Day or Year])? [space]
  let space = '\\s*'
  let dayOrYear = '\\d{1,4}'
  let separator = '[/-\\s\\.]'
  let monthAbbrev = '[a-z]{3,4}'
  let regex = new RegExp(`^${space}(${dayOrYear}${separator})?${monthAbbrev}(${separator}${dayOrYear})?${space}$`, 'i')
  return regex.test(text)
}

const mainExport = {
  toStringDMY: toStringDMY,
  isToday: isToday,
  fromStringDMY: fromStringDMY,
  fromString: fromString,
  isDate: isDate
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
