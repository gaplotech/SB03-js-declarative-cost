const { someTransform, someCalculation } = require('./common')

/**
 * Question:
 * Given that, there are one array and two black-box functions with the following declaration,
 * ```
 * const arr = [{
 *    id: number,
 *    name: string,
 *    someNum: number,
 * }]
 * const someTransform = ({ someNum }) => number | null
 * const someCalculation = (number) => number
 * ```
 *
 * Tasks(Order is important):
 *   1. apply a black-box function `someTransform` on each value in `arr`
 *   2. remove null values
 *   3. remove duplicate values
 *   4. apply a black-box function `someCalculation` on each value in `arr`
 *   5. calculate the sum of the values
 *   6. return the total sum
 *
 * The possible `arr` sizes are in `{1, 10, 100, 1000, 10000, 100000, 1000000}`.
 *
 * Computational Tasks(order is important):
 *
 * 1.  apply a black-box function `someTransform` on each value in `arr`
 * 2.  remove null values in `arr`
 * 3.  remove duplicate values in `arr`
 * 4.  apply a black-box function `someCalculation` on each value in `arr`
 * 5.  calculate the sum of the values
 * 6.  return the total sum
 *
 * ---
 *
 * For a pure learning purpose, you are suggested to develop three versions:
 *
 * 1. A "fastest" version to compute all the tasks.
 *
 * 2. A "declarative" style version that is the simplest to understand, debug and trace.
 * (functional approach)
 *
 * 3. Based on 2, try to optimize 2 to a faster "declarative" style implementation.
 *
 * P.S. Optimization often requires a trade-off but try to sacrifice as little as possible to
 * optimize the performance and maintain the simplicity. You could use any js library to
 * complete those implementations.
 */

/**
 * Write a "fastest" implementation.
 */
function fastest(arr) {
  // TODO: fastest implementation
  return null
}

/**
 * A declarative style implementation that is simpler to understand, debug and trace.
 */
function declarative(arr) {
  // TODO: declarative implementation
  return null
}

/**
 * An optimized declarative implementation in a trade-off of readability
 */
function declarativeOptimized(arr) {
  // TODO: declarativeOptimized implementation
  return null
}

module.exports = {
  fastest,
  declarative,
  declarativeOptimized,
}
