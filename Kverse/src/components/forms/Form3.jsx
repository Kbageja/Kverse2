import React from 'react'
import PropTypes from "prop-types"
import './Form3.css'
const Form3 = ({className , ...rest}) =>{
  return (
    
<div class={`form-container ${className}`}>
    <div class="form">
        <span class="heading">Get in touch</span>
        <input placeholder="Name" type="text" class="input"/>
        <input placeholder="Email" id="mail" type="email" class="input"/>
        <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
        <div class="button-container">
        <div class="send-button">Send</div>
        <div class="reset-button-container">
            <div id="reset-btn" class="reset-button">Reset</div>
        </div>
    </div>
</div>
</div>
  )
}

Form3.propTypes = {
    className: PropTypes.string,
  };
  
  export { Form3};