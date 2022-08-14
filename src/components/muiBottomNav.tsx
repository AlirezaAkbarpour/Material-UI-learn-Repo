import { BottomNavigation,BottomNavigationAction } from "@mui/material"
import {Home, Favorite, Person} from '@mui/icons-material'
import { useState } from "react"
export const MuiBottomNavigation = ()=>{
	const [value,setValue] = useState(0)
	console.log({value})
	return (
	<BottomNavigation 
	sx={{width:'100%',position:'absolute',bottom:'0'}}
	showLabels
	value={value}
	onChange={(event,newValue)=> {setValue(newValue)}}
	>
		<BottomNavigationAction label='Home' icon={<Home/>}/>
		<BottomNavigationAction label='Favorites' icon={<Favorite/>}/>
		<BottomNavigationAction label='Profile' icon={<Person/>}/>
	</BottomNavigation>
	)
}