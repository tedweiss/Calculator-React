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
  }
  return total
}
