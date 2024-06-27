import React from 'react'
import './Loader4.css'
const Loader4 = ({className})=> {
  return (
    <div class={`wrapper ${className}`}>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>
  )
}

export  {Loader4}