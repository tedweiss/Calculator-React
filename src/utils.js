export const calculateNumbers = (num1, num2, op) => {
  let total
  // addition
  if (op === '+') {
    total = num1 + num2
    // subtration
  } else if (op === '-') {
    total = num1 - num2
    // multiplication
  } else if (op === '*') {
    total = num1 * num2
    // division
  } else if (op === '/') {
    total = num1 / num2
    if (total === Infinity) {
      total = 'Error'
    }
  }
  return total
}
export const displayNumbers = (num1, num2, total) => {
  if (num2) {
    return num2
  } else if (num1) {
    return num1
  } else {
    return total
  }
}
