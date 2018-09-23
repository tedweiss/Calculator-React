import React, { Component } from 'react'

import { digits } from './data'

export default class Calculator extends Component {
  render () {
    return (
      <div className='Calculator'>
        {digits.map(digit => {
          return <div>{digit.name}</div>
        })}
      </div>
    )
  }
}
