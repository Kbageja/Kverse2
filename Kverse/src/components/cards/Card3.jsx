import React from 'react'
import PropTypes from "prop-types";
import './Card3.css'

const Card3 = ({ className, ...rest})  =>{
  return (
    <div className={`box ${className}`}>
    <span></span>
    <div class="content">
     <h2>Hover me!</h2>
    </div>
  </div>
  )
}

Card3.propTypes = {
    className: PropTypes.string,
  };
  
  export { Card3 };