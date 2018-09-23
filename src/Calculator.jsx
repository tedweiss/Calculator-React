import React, { Component } from 'react'

import Button from './Button'
import { digits, operators } from './data'

export default class Calculator extends Component {
  render () {
    return (
      <div className='Calculator'>
        <div className='digits'>
          {digits.map((digit, idx) => {
            return <Button key={idx} id={digit.id} name={digit.name} value={digit.value} />
          })}
        </div>
        <div className='operators'>
          {operators.map((operator, idx) => {
            return <Button key={idx} id={operator.id} name={operator.value} value={operator.value} />
          })}
        </div>
      </div>
    )
  }
}
