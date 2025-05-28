import React from 'react'

const Button = (props) => {
  const {imageUrl ,tit}=props;
  return (
        <button style={{cursor:'pointer'}} title={tit} >
            <img  src={imageUrl} alt='Button' style={{height:'100px',width:'100px'}}/>
        </button>
  )
}

export default Button