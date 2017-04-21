/** @module matrix */

/**
 * Callback used in matrix operations.
 *
 * @callback matrixCallback
 * @param {currentValue}  The current element being processed in the matrix.
 * @param {row}           The row index.
 * @param {col}           The column index.
 * @param {matrix}        The matrix being processed.
 */

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

/**
 * Executes a provided function once for each matrix element.
 * @param {array} matrix - The matrix that forEach() is being applied to.
 * @param {matrixCallback} fn - Function to execute for each element
 */
function forEach (matrix, fn) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      fn(matrix[i][j], i, j, matrix)
    }
  }
}

/**
 * Creates a new matrix with the results of calling a provided function on every element in this array.
 * @param  {array} matrix - Original matrix.
 * @param  {matrixCallback} fn - Function that produces an element of the new matrix.
 * @return {array} A new matrix with each element being the result of the callback function.
 */
function map (matrix, fn) {
  var mapped = []
  for (var i = 0; i < matrix.length; i++) {
    mapped.push([])
    for (var j = 0; j < matrix[i].length; j++) {
      mapped[i].push(fn(matrix[i][j], i, j, matrix))
    }
  }
  return mapped
}

const mainExport = {
  coordToIndex: coordToIndex,
  indexToCoord: indexToCoord,
  forEach: forEach,
  map: map
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
