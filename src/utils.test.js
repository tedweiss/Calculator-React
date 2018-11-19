import { calculateNumbers, displayNumbers } from '../src/utils'

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
  },
  mult: {
    op: '*',
    mult1: 2,
    mult2: 4,
    mult3: -5,
    mult4: -3
  },
  divide: {
    op: '/',
    divide1: 8,
    divide2: 2,
    divide3: 1
  }
}
const testDisplayNumbers = {
  num1: '1',
  num2: '2',
  total: 3
}
describe('calculateNumbers will calculate the numbers that are passed into it', () => {
  let add = testNumbers.add
  let sub = testNumbers.sub
  let mult = testNumbers.mult
  let divide = testNumbers.divide
  test('calculateNumbers will add the two numbers passed into it and return the total', () => {
    expect(calculateNumbers(add.add1, add.add2, add.op)).toEqual(3)
  })
  test('calculateNumbers will subtract the two numbers passed into it and return the total', () => {
    expect(calculateNumbers(sub.sub1, sub.sub2, sub.op)).toEqual(4)
  })
  test('calculateNumbers will subtract the two numbers passed into it where the second number is larger than the first and return a negative total', () => {
    expect(calculateNumbers(sub.sub2, sub.sub3, sub.op)).toEqual(-6)
  })
  test('calculateNumbers will multiply the two numbers passed into it and return the total', () => {
    expect(calculateNumbers(mult.mult1, mult.mult2, mult.op)).toEqual(8)
  })
  test('calculateNumbers will multiply the two numbers passed into it where one is nevagite and return a negative total', () => {
    expect(calculateNumbers(mult.mult3, mult.mult2, mult.op)).toEqual(-20)
  })
  test('calculateNumbers will multiply the two numbers passed into it where both are nevagite and return a positive total', () => {
    expect(calculateNumbers(mult.mult3, mult.mult4, mult.op)).toEqual(15)
  })
  test('calculateNumbers will divide the two numbers passed into it and return the total', () => {
    expect(calculateNumbers(divide.divide1, divide.divide2, divide.op)).toEqual(4)
  })
  test('calculateNumbers will divide the two numbers passed into it and return a decimal', () => {
    expect(calculateNumbers(divide.divide3, divide.divide2, divide.op)).toEqual(0.5)
  })
  test('calculateNumbers will divide a number by 0 and return an Error', () => {
    expect(calculateNumbers(divide.divide3, 0, divide.op)).toEqual('Error')
  })
})

describe('displayNumbers will return the correct number that is passed into it', () => {
  test('displayNumbers will return the first number passed in', () => {
    expect(displayNumbers(testDisplayNumbers.num1, '', 0)).toEqual('1')
  })
  test('displayNumbers will return the second number passed in', () => {
    expect(displayNumbers(testDisplayNumbers.num1, testDisplayNumbers.num2, 0)).toEqual('2')
  })
  test('displayNumbers will return the third number passed in', () => {
    expect(displayNumbers('', '', testDisplayNumbers.total)).toEqual(3)
  })
})
