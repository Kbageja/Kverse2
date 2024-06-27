import React from 'react'

import './App.css'
import { Card2 } from './components/cards/Card2'
import { Card3 } from './components/cards/Card3'
import { Card4 } from './components/cards/Card4'
import { Form3 } from './components/forms/Form3'
import Toggle2 from './components/toggleSwitch/Toggle2'
import Loader2 from './components/loaders/Loader2'
function App() {
  return (
    <>
    <h1>Kverse</h1>
    <Form3 /> 
       <Toggle2/>
       <Loader2/>
    </>
  )
}

export default App