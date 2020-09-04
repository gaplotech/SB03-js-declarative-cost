const Benchmark = require('benchmark')
const { fastest, declarative, declarativeOptimized } = require('./perf-impl')
const { createArr } = require('./common')

// you can increase this for better precision
if (process.env.PRECISE_MODE === '1') {
  Benchmark.options.initCount = 10
  Benchmark.options.minSamples = 200
} else {
  Benchmark.options.initCount = 1
  Benchmark.options.minSamples = 5
  Benchmark.options.maxTime = 2
}

async function main() {
  for (const size of [1, 10, 100, 1000, 10000, 100000, 1000000]) {
    // assert the answer is correct before running the benchmark
    const arr = createArr(size)

    await new Promise(resolve => {
      const suite = new Benchmark.Suite(`Standard Array Processing (size=${size})`)
      suite
        .add('fastest', function () {
          fastest(arr)
        })
        .add('declarative', function () {
          declarative(arr)
        })
        .add('declarative-optimized', function () {
          declarativeOptimized(arr)
        })
        .on('start', function () {
          console.log(this.name)
        })
        .on('cycle', function (event) {
          const currentBench = event.target
          console.log(String(currentBench))
        })
        .on('complete', function () {
          console.log('Fastest is ' + this.filter('fastest').map('name'))
          resolve()
        })
        .run({ async: false })
    })
  }
}

main()
