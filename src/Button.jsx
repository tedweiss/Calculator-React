import React from 'react'

const Button = props => {
  const { id, name, onClick, value } = props
  return (
    <div
      id={id}
      onClick={() => {
        onClick(value)
      }}>
      {name}
    </div>
  )
}

export default Button
