import React from 'react'
import './Loader2.css'
const Loader2 = ({className}) =>{
  return (
  <div class={`loader ${className}`}>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>

  )
}

export {Loader2}