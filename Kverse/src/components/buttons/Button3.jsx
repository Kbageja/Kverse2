import React from 'react'
import './Button3.css'
import PropTypes from "prop-types";

const Button3 =({onClick, children = "Send", className, ...rest})=>{
  return (
    <button className={` btn-hover-over ${className}`} onClick={onClick} {...rest} role='button'>
    {children}
</button>
  )
}
Button3.propTypes = {
    className: PropTypes.string,
  };
  
export {Button3};