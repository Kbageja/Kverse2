import React from 'react'
import './Button6.css'
import PropTypes from "prop-types";

const Button6 =({onClick, children = "Subscribe", className, ...rest})=>{
  return (
    <div className="contain">
    <button className={` btn-gradhover ${className}`} onClick={onClick} {...rest} role='button'>
    {children}
</button>
</div>
  )
}
Button6.propTypes = {
    className: PropTypes.string,
  };
  
export {Button6};