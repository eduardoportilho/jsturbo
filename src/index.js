const mainExport = {
  str: require('./jsturbo-string'),
  num: require('./jsturbo-number')
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
