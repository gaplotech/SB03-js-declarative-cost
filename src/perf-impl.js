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
 * You may assume the possible size of array are in {1, 10, 100, 1000, 10000, 100000, 1000000}.
 *
 * You are suggested to develop two version that
 *   1. the implementation is the "fastest" way to finish the tasks.
 *
 *   2. use functional approach to is written in "declarative" style that is relatively
 *   simpler to understand, debug and trace.
 *
 *   3. Optimization often requires a trade-off. Try to sacrifice some of the
 *   readability to optimize the performance while maintain the declarative style
 *   of the implementation written in 2.
 *
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
