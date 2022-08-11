import { Stack, TextField,InputAdornment } from "@mui/material";
import React from "react";

export const MuiTextField  = ()=>{
	return(
		<Stack spacing={4}>
			{/* defaults */}
			<Stack direction='row' spacing={2}>
				<TextField label='Name' variant="filled"/>
				<TextField label='Name' variant="outlined"/>
				<TextField label='Name' variant="standard"/>
			</Stack>
			{/* sizetion and colorize */}
			<Stack direction='row' spacing={2}>
				<TextField label='Small secondry' size='small' color='secondary'/>
			</Stack>
			{/* Form */}
			<Stack direction='row' spacing={2}>
				<TextField label='Form Input' required/>
				<TextField 
					label='Form Input' 
					type='password'
					disabled
					helperText='Do not share your password with anyone'
				/>
				<TextField label='Read Only ...' InputProps={{readOnly:  true}}/>
			</Stack>
			<Stack direction='row' spacing={2}>
				<TextField 
					label='Amount'
					InputProps={{
						startAdornment: 
							<InputAdornment position='start'>ریال</InputAdornment>
					}}
				/>
				<TextField 
					label='Weight'
					InputProps={{
						endAdornment: 
							<InputAdornment position='end'>Kg</InputAdornment>
					}}
				/>
			</Stack>
		</Stack>
	)
}