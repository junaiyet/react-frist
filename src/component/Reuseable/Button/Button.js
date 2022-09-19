import React from 'react'
import "./button.css"
function Button({title}) {
  return (
    <>
      <a href="#" className='btn'>{title}</a>
    </>
  )
}

export default Button