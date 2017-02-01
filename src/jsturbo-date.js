import str from '../src/jsturbo-string'

function toStringDMY (date) {
  return [
    str.pad(date.getDate().toString(), 2),
    str.pad((date.getMonth() + 1).toString(), 2),
    str.pad(date.getFullYear().toString(), 4)
  ].join('/')
};

function isToday (date) {
  return toStringDMY(date) === toStringDMY(new Date())
};

function fromStringDMY (stringDdMmYyyy) {
  stringDdMmYyyy = stringDdMmYyyy.replace(/\D/g, '')
  var day = parseInt(stringDdMmYyyy.substr(0, 2))
  var month = parseInt(stringDdMmYyyy.substr(2, 2)) - 1
  var year = parseInt(stringDdMmYyyy.substr(4, 4))
  return new Date(year, month, day, 0, 0, 0, 0)
};

const mainExport = {
  toStringDMY: toStringDMY,
  isToday: isToday,
  fromStringDMY: fromStringDMY
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
