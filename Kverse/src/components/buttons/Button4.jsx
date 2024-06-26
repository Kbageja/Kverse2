import React from 'react'
import './Button4.css'
import PropTypes from "prop-types";

const Button4 =({onClick, children = "Subscribe", className, ...rest})=>{
  return (
    <button className={` btn-subscribe ${className}`} onClick={onClick} {...rest} role='button'>
    {children}
</button>
  )
}
Button4.propTypes = {
    className: PropTypes.string,
  };
  
export {Button4};