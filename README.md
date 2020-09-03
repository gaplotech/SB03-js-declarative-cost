【Skill Boost Plan】SB03 javascript declarative cost

## Question

Given that, there are two black-box functions and one array with the following
declarations,

```js
const arr = [
  {
    id: number,
    name: string,
    someNum: number,
  },
]
const someTransform = ({ someNum }) => number | null
const someCalculation = number => number
```

The possible size of `arr` are in `{1, 10, 100, 1000, 10000, 100000, 1000000}`.

Computational Tasks(order is important):

1.  apply a black-box function `someTransform` on each value in `arr`
2.  remove null values in `arr`
3.  remove duplicate values in `arr`
4.  apply a black-box function `someCalculation` on each value in `arr`
5.  calculate the sum of the values
6.  return the total sum

---

For a pure learning purpose, you are suggested to develop three versions:

1. A "fastest" version to compute all the tasks.

2. A "declarative" style version that is the simplest to understand, debug and trace.
   (functional approach)

3. Based on 2, try to optimize 2 to a faster "declarative" style implementation.

P.S. Optimization often requires a trade-off but try to sacrifice as little as possible to
optimize the performance and maintain the simplicity. You could use any js library to
complete those implementations.

## Getting Start

1. Clone this project and install npm modules

```
git clone https://github.com/gaplotech/SB03-js-declarative-cost
npm install
```

2. Complete your implementation in `src/perf-impl.js`

3. Test your implementation correctness

```
npm run test
```

4. Test the performance

```
npm run benchmark
```

5. You could submit your pull request and ask for review and discussion before the
   official answer release.

## Answer

<details>
  <summary>Check Answers</summary>
https://github.com/gaplotech/skill-boost-plan/pull/4
</details>
