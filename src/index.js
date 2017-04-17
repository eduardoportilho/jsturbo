const mainExport = {
  str: require('./jsturbo-string'),
  num: require('./jsturbo-number'),
  obj: require('./jsturbo-object'),
  date: require('./jsturbo-date'),
  matrix: require('./jsturbo-matrix')
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
