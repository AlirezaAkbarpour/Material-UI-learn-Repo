import {Box, FormControl, FormControlLabel, RadioGroup , Radio, FormLabel} from '@mui/material'
import React, { useState } from 'react'
export const MuiRadioButton = ()=>{
	const [value,setValue] = useState('')
	console.log({value})
	//  event handler
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setValue(event.target.value)
	}

	return( <Box color={'black'}>
		<FormControl>
			<FormLabel id='job-experience-group-label' error>Years of experience</FormLabel>
			<RadioGroup 
				name='job-experience' 
				aria-labelledby='job-experience-group-label'
				onChange={handleChange}
				row
			>
				<FormControlLabel control={<Radio color='primary'/>} label='0-2' value='0-2'/>
				<FormControlLabel control={<Radio color='error'/>} label='3-5' value='3-5'/>
				<FormControlLabel control={<Radio color='warning'/>} label='6-10' value='6-10'/>
			</RadioGroup>
		</FormControl>
	</Box>)
}