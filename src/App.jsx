import React from 'react'
import './App.css'
import { MuiAccordion } from './components/muiAccordion'
import { MuiCard } from './components/muiCart'
import { MuiImageList } from './components/muiImgeList'
//import { MuiAutoComplete } from './components/muiAutoComplete'
//import { MuiLayout } from './components/muiLayout'
//import Muibuttons from './components/muiButtons'
//import { MuiCheckBox } from './components/muiCheckBox'
//import { MuiRadioButton } from './components/muiRadioBtn'
//import { MuiRating } from './components/muiRating'
//import { MuiSelect } from './components/muiSelect'
//import { MuiSwitch } from './components/muiSwitch'
//import { MuiTextField } from './components/muiTextField'

function App() {
  return (
    <div className="App">
     {/**<Muibuttons/> */} 
     {/*<MuiTextField/>*/}
     {/**<MuiSelect/> */} 
     {/* <MuiRadioButton/>*/}
     {/* <MuiCheckBox/>*/}
     {/*<MuiSwitch/>*/}
     { /*<MuiRating/>*/ }
     {/*<MuiAutoComplete/>*/}
     {/*<MuiLayout/>*/}
     {/*<MuiCard/>*/}
    {/* <MuiAccordion/>*/}
    <MuiImageList/>
    </div>
  )
}

export default App
