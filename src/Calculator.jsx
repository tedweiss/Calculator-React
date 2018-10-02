import React, { Component } from 'react'

import Button from './Button'
import { digits, operators } from './data'
import { calculateNumbers, displayNumbers } from './utils'

export default class Calculator extends Component {
  constructor () {
    super()
    this.state = {
      num1: 0,
      num2: '',
      total: 0,
      op: ''
    }
  }
  updateState = (name, value) => {
    let stateObj = {}
    stateObj[name] = value
    this.setState(stateObj)
  }
  handleDigitClick = value => {
    const { num1, num2, op } = this.state
    let name
    let number
    if (!op) {
      number = num1 + value
      name = 'num1'
    } else {
      number = num2 + value
      name = 'num2'
    }
    this.updateState(name, number)
  }
  handleOpClick = opClick => {
    const { num1, num2, op } = this.state
    if (opClick === '=') {
      let total = calculateNumbers(parseFloat(num1), parseFloat(num2), op)
      this.setState({ num1: '', num2: '', total, op: opClick })
    } else {
      // update state of the the operator
      this.updateState('op', opClick)
    }
  }
  render () {
    const { num1, num2, total } = this.state
    return (
      <div className='Calculator'>
        <div>{displayNumbers(num1, num2, total)}</div>
        <div className='digits'>
          {digits.map((digit, idx) => {
            return (
              <Button key={idx} id={digit.id} name={digit.name} onClick={this.handleDigitClick} value={digit.value} />
            )
          })}
        </div>
        <div className='operators'>
          {operators.map((operator, idx) => {
            return (
              <Button
                key={idx}
                id={operator.id}
                name={operator.value}
                onClick={this.handleOpClick}
                value={operator.value}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
