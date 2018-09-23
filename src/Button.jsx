import React from 'react'

const Button = props => {
  const { id, name } = props
  return <div id={id}>{name}</div>
}

export default Button
