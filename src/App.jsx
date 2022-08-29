import { createTheme , colors, ThemeProvider} from '@mui/material'
import React from 'react'
import './App.css'
import { MuiResponsiveness } from './components/muiResponsiveness'
//import { MuiMasonry } from './components/muiMansonry'
//import { MuiTabs } from './components/muiTabs'
//import { MuiTimeLine } from './components/muiTimeLine'
//import { MuiDateRangePicker } from './components/muiDateRangePicker'
//import {MuiPicker} from './components/muiPicker'
//import { MuiLoading } from './components/muiLoading'
//import { MuiProgress } from './components/muiProgress'
//import { MuiSkeleton } from './components/muiSkeleton'
//import { MuiDialog } from './components/muiDialog'
//import { MuiSnackbar } from './components/muiSnackbar'
//import { MuiAlert } from './components/muiAlert'
//import { MuiTooltip } from './components/muiTooltip'
//import { MuiChip } from './components/muiChip'
//import { MuiList } from './components/muiList'
//import { MuiBottomNavigation } from './components/muiBottomNav'
//import { MuiSpeedDial } from './components/muiSpeedDial'
//import { MuiBreadcrumbs } from './components/muiBreadcrumbs'
//import { MuiDrawer } from './components/muiDrawer'
//import { MuiLink } from './components/muiLink'
//import { MuiAccordion } from './components/muiAccordion'
//import { MuiCard } from './components/muiCart'
//import { MuiImageList } from './components/muiImgeList'
//import { MuiAutoComplete } from './components/muiAutoComplete'
//import { MuiLayout } from './components/muiLayout'
//import Muibuttons from './components/muiButtons'
//import { MuiCheckBox } from './components/muiCheckBox'
//import { MuiRadioButton } from './components/muiRadioBtn'
//import { MuiRating } from './components/muiRating'
//import { MuiSelect } from './components/muiSelect'
//import { MuiSwitch } from './components/muiSwitch'
//import { MuiTextField } from './components/muiTextField'
//import {MuiNavbar} from './components/muiNavbar'
//import { MuiAvatar } from './components/muiAvatar'
//import { MuiBadge } from './components/muiBadge'
//import { MuiTable } from './components/muiTable'
//import {Home} from './pages/home'

const theme = createTheme(
  { 
    status:{
          danger: colors.red[700]
    },
    palette:{
        secondary:{
          main: colors.lime[500]
        }
    }
  }
)

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/*<Home/>*/}
     {/*<Muibuttons/>*/}
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
     {/*<MuiImageList/>*/}
     {/*<MuiNavbar/>*/}
     {/*<MuiLink/>*/}
     {/*<MuiBreadcrumbs/>*/}
     {/*<MuiDrawer/>*/}
     {/*<MuiSpeedDial/>*/}
     {/*<MuiBottomNavigation/>*/}
     {/*<MuiAvatar/>*/}
     {/*<MuiBadge/>*/}
     { /*<MuiList/>*/}
      {/*<MuiChip/>*/}
      {/*<MuiTooltip/>*/}
     {/* <MuiTable/>*/}
     {/*<MuiAlert/>*/}
     {/*<MuiSnackbar/>*/}
    {/* <MuiDialog/>*/}
    {/* <MuiProgress/>*/}
    {/*<MuiSkeleton/>*/}
    {/*<MuiLoading/>*/}
    {/*<MuiPicker/>*/}
    {/*<MuiDateRangePicker/>*/ }
    {/*<MuiTabs/>*/}
    {/*<MuiTimeLine/>*/}
     { /*<MuiMasonry/>*/}
     <MuiResponsiveness/>
    </div>
    </ThemeProvider>
  )
}

export default App
