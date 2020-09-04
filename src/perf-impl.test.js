const { fastest, declarative, declarativeOptimized } = require('./perf-impl')
const { answers, createArr } = require('./common')
const each = require('jest-each').default

const sizes = [1, 10, 100, 1000, 10000, 100000, 1000000]
const sizesWithAns = sizes.map(it => [it, answers[`_${it}`]])

each(sizesWithAns).test('fastest when array size=%d', (size, expected) => {
  const arr = createArr(size)
  expect(fastest(arr)).toBe(expected)
})

each(sizesWithAns).test('declarative when array size=%d', (size, expected) => {
  const arr = createArr(size)
  expect(declarative(arr)).toBe(expected)
})

each(sizesWithAns).test('declarativeOptimized when array size=%d', (size, expected) => {
  const arr = createArr(size)
  expect(declarativeOptimized(arr)).toBe(expected)
})
