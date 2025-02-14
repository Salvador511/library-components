import React from 'react'
import './Button.css'

const Button = ({ label = 'Click Me' }) => {
  return (
    <button>{label}</button>
  )
}

const Wrapper = (props: any) => {
  return (
    <Button {...props} />
  )
}

export default Wrapper