function foo () {
  return 'bar'
}

const mainExport = {
  foo: foo
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
