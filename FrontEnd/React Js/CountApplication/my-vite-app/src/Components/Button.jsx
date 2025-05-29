import React from 'react'

const Button = (props) => {
  
  return (
    <button style={{ cursor: 'pointer' }} onClick={props.clickHandler}>
      <img src={props.imageUrl} alt='Button' style={{ height: '100px', width: '100px' }} title={props.tit} />
    </button>

  )
}

export default Button