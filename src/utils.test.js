import { calculateNumbers } from '../src/utils'

const testNumbers = {
  add: {
    op: '+',
    add1: 1,
    add2: 2
  },
  sub: {
    op: '-',
    sub1: 7,
    sub2: 3,
    sub3: 9
  }
}
describe('calculateNumbers will calculate the numbers that are passed into it', () => {
  let add = testNumbers.add
  let sub = testNumbers.sub
  test('calculateNumbers will add the two numbers passed into it and return the total', () => {
    expect(calculateNumbers(add.add1, add.add2, add.op)).toEqual(3)
  })
  test('calculateNumbers will subtract the two numbers passed into it and return the total', () => {
    expect(calculateNumbers(sub.sub1, sub.sub2, sub.op)).toEqual(4)
  })
  test('calculateNumbers will subtract the two numbers passed into it and return a negative total', () => {
    expect(calculateNumbers(sub.sub2, sub.sub3, sub.op)).toEqual(-6)
  })
})
