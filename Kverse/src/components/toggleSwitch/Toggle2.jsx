import React from 'react'
import './Toggle2.css'
 const Toggle2 = ({className}) =>{
  return (
  <label class={`switch ${className}`}>
  <input type="checkbox"/>
  <span class="slider"></span>
</label>
  )
}
export {Toggle2}