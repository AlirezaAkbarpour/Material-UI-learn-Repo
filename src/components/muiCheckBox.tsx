import { Box, FormControlLabel, Checkbox,FormLabel, Button, FormControl,FormGroup} from '@mui/material'
import React, { ReactComponentElement, useState } from 'react'
import { BookmarkAdded } from '@mui/icons-material'
export const MuiCheckBox = ()=>{
	const [acceptInC,setAcceepptInC] = useState(false)
	const [skills,setSkills] = useState<string[]>([])
	console.log({acceptInC})
	console.log({skills})
	const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
		setAcceepptInC(event.target.checked)
	}
	const handleSkillChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
		const index = skills.indexOf(event.target.value)
		if(index === -1){
			setSkills([...skills,event.target.value])
		} else{
			setSkills(skills.filter((skill)=> skill !== event.target.value))
		}
	}
	return(
		<Box>
			<Box color={'black'}>
				<FormControlLabel 
					label='I accept terms and conditions' 
					control={<Checkbox checked={acceptInC} onChange={handleChange} required/>}
				/>
				
			</Box>
			<Box>
				<Checkbox  icon={<BookmarkAdded/>} checked={acceptInC}
				onChange={handleChange}/>
			</Box>
			<Button
				variant='contained' 
				aria-label='Login' 
				color='primary' 
				disabled={acceptInC===false?true:false}
			>
			Login
			</Button>
			<Box color={'black'} >
				<FormControl>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel 
						label='HTML' 
						value='html'
						control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange}
						/>}
						/>
						<FormControlLabel 
						label='CSS' 
						value='css'
						control={<Checkbox checked={skills.includes('css')}  onChange={handleSkillChange}/>}
						/>
						<FormControlLabel 
						label='Js' 
						value='javascript'
						control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}
						/>
					</FormGroup>
				</FormControl>
			</Box>
		</Box>
		
	)
}