import { Box,FormControlLabel,Switch } from "@mui/material"
import React, { useState } from "react";

export const MuiSwitch = ()=>{
	const [checked,setChecked] =  useState(false)
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
		setChecked(event.target.checked)
	}
	return(
		<Box color='black'>
			<FormControlLabel 
				label='Dark Mode'
				control={<Switch checked={checked} onChange={handleChange}/>}
			/>
		</Box>
	);
}