import {Stack,Chip,Avatar} from '@mui/material'
import { Face } from '@mui/icons-material'
import { useState } from 'react'
export const MuiChip =  ()=>{
	const [chips,setChips] = useState(['chip1','chip2','chip3'])
	const deletehandler = (chipToDelete:string)=>{
		setChips(chips.filter(chip=>chip !== chipToDelete))
	}
	return (
		<Stack spacing={4}>
		<Stack direction='row' spacing={1}>
			<Chip label='Chip' color='warning' size='medium'/>
			<Chip label='Chip Outlined' color='secondary' variant='outlined'/>
			<Chip 
			label='Chip Outlined' color='secondary' variant='outlined'
			avatar={<Avatar>V</Avatar>}
			/>
			<Chip label='Chip' color='warning' size='medium'
			icon={<Face/>}
			/>
			<Chip label='Click' color='primary' size='medium' onClick={()=>alert('Clicked!')}/>
			<Chip label='Delete' color='error' size='medium' onDelete={()=>alert('Deleted')}/>
		</Stack>
		<Stack spacing={2}>
			{chips.map((chip)=>
				(<Chip size='medium' sx={{fontSize:'.9rem'}} key={chip} label={chip} color='error' onClick={()=>deletehandler(chip)} onDelete={()=>deletehandler(chip)} />)
				)}
		</Stack>
		</Stack>
	)
}