import React, { Component } from 'react'

import Button from './Button'
import { digits } from './data'

export default class Calculator extends Component {
  render () {
    return (
      <div className='Calculator'>
        {digits.map((digit, idx) => {
          return <Button key={idx} id={digit.id} name={digit.name} value={digit.value} />
        })}
      </div>
    )
  }
}
