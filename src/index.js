
/**
 * Apeend the given char into the left of the string so change its length to the provided value
 * ex: pad('10', 4, '-'); //> '--10'
 */
function pad (string, newLength, padChar) {
  padChar = padChar || '0'
  let paddedString = string + ''
  return paddedString.length >= newLength ? paddedString : new Array(newLength - paddedString.length + 1).join(padChar) + paddedString
};

const mainExport = {
  str: {
    pad: pad
  }
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
