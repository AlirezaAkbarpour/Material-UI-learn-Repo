import React from 'react'
import './App.css'
import Muibuttons from './components/muiButtons'
import { MuiCheckBox } from './components/muiCheckBox'
import { MuiRadioButton } from './components/muiRadioBtn'
import { MuiRating } from './components/muiRating'
import { MuiSelect } from './components/muiSelect'
import { MuiSwitch } from './components/muiSwitch'
import { MuiTextField } from './components/muiTextField'

function App() {
  return (
    <div className="App">
     {/**<Muibuttons/> */} 
     {/*<MuiTextField/>*/}
     {/**<MuiSelect/> */} 
     {/* <MuiRadioButton/>*/}
     {/* <MuiCheckBox/>*/}
     {/*<MuiSwitch/>*/}
      <MuiRating/> 
    </div>
  )
}

export default App
