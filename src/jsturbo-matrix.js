/** @module matrix */

/**
 * Convert a matrix coordinate into the index of it's serialized representation.
 * @param  {Object} coord         Matrix coordinate (r, c)
 * @param  {number} coord.r       Row index
 * @param  {number} coord.c       Column index
 * @param  {Object} matrixSize    Matrix size
 * @param  {number} matrixSize.R  Number of rows
 * @param  {number} matrixSize.C  Number of columns
 * @return {number}               Corresponding index on the serialized matrix
 */
function coordToIndex (coord, matrixSize) {
  if (coord.r < 0 ||
    coord.c < 0 ||
    coord.r >= matrixSize.R ||
    coord.c >= matrixSize.C) {
    throw new Error('Index out of bounds.')
  }

  return (coord.r * matrixSize.C) + coord.c
}

/**
 * Convert the index of a serialized matrix into it's original coordinate.
 * @param  {number} index         Index of the serialized matrix
 * @param  {Object} matrixSize    Matrix size
 * @param  {number} matrixSize.R  Number of rows
 * @param  {number} matrixSize.C  Number of columns
 * @return {Object} coord         Matrix coordinate (r, c)
 * @return {number} coord.r       Row index
 * @return {number} coord.c       Column index
 */
function indexToCoord (index, matrixSize) {
  if (index < 0) {
    throw new Error('Index out of bounds.')
  }
  let r = Math.floor(index / matrixSize.C)
  let c = index % matrixSize.C
  if (r >= matrixSize.R || c >= matrixSize.C) {
    throw new Error('Index out of bounds.')
  }
  return {r: r, c: c}
}

const mainExport = {
  coordToIndex: coordToIndex,
  indexToCoord: indexToCoord
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
