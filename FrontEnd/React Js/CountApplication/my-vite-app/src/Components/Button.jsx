import React from 'react'

const Button = ({imageUrl}) => {
  return (
        <button>
            <img  src={imageUrl} alt='Button' style={{height:'100px',width:'100px'}}/>
        </button>
  )
}

export default Button