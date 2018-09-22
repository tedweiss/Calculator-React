export const calculateNumbers = (num1, num2, op) => {
  let total
  // addition
  if (op === '+') {
    total = num1 + num2
    // subtration
  } else if (op === '-') {
    total = num1 - num2
  }
  return total
}
