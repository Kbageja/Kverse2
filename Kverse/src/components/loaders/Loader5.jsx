import React from 'react'
import './Loader5.css'
const Loader5 = ({className}) =>{
  return (
   
  <section class={`loader-w ${className}`}>

  <div class="slider" style="--i:0">
  </div>
  <div class="slider" style="--i:1">
  </div>
  <div class="slider" style="--i:2">
  </div>
  <div class="slider" style="--i:3">
  </div>
  <div class="slider" style="--i:4">
  </div>
</section>



  )
}

export {Loader5}