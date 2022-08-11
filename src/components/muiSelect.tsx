import { Box,TextField,MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = ()=>{
	//use State
	const [country,setCountry] = useState<string[]>([])
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
		const value = event.target.value;
		setCountry(typeof value === 'string' ? value.split(','): value)
	}
	console.log({country})
	return <Box width='300px'>
		<TextField 
		label='Select country' 
		select
		value={country}
		onChange={handleChange}
		fullWidth
		SelectProps={{
			multiple: true
		}}
		helperText='Please select your country...'
		>
			<MenuItem value='IN'>India</MenuItem>
			<MenuItem value='US'>USA</MenuItem>
			<MenuItem value='AU'>Austraia</MenuItem>
			<MenuItem value='IR'>Iran</MenuItem>
			
		</TextField>
	</Box>
}