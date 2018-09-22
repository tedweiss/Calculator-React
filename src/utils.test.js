import { calculateNumbers } from '../src/utils'

const testNumbers = {
  add: {
    add1: 1,
    add2: 2
  }
}
describe('calculateNumbers will calculate the numbers that are passed into it', () => {
  let add = testNumbers.add
  test('calculateNumbers will add the two numbers passed into it and return the total', () => {
    expect(calculateNumbers(add.add1, add.add2)).toEqual(3)
  })
})
