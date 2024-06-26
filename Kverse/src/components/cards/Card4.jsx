import React from 'react'
import './Card4.css'
import PropTypes from "prop-types";

const Card4 =({imgUrl,className,...rest}) =>{
  return (
    <div className={`card ${className}`}>
    <img src={imgUrl} alt=".." />
    </div>
  )
}
Card4.propTypes = {
    imgUrl:PropTypes.string,
    className: PropTypes.string,
  };
  
  export { Card4 };