import {Button, Dialog,DialogContent,DialogTitle,DialogContentText,DialogActions} from '@mui/material'
import { useState } from 'react'

export const MuiDialog = ()=>{
	const [open,setOpen] = useState(false)
	
	return  <>
		<Button onClick={()=>setOpen(true)}>Open dialog</Button>
		<Dialog aria-labelledby='dialog-title' aria-aria-describedby='dialog-description' open={open}
			onClose={()=> setOpen(false)}
		>
			<DialogTitle id='dialog-title'>Submmit the Test?</DialogTitle>
			<DialogContent>
				<DialogContentText id='dialog-description'>
					Are you sure submit this test? you will not be able to edit afer submited?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={()=> setOpen(false)}>Cancel</Button>
				<Button onClick={()=> setOpen(false)} autoFocus>Submit</Button>
			</DialogActions>
		</Dialog>
	</>
}