const mainExport = {
  str: require('./jsturbo-string'),
  num: require('./jsturbo-number'),
  obj: require('./jsturbo-object')
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
