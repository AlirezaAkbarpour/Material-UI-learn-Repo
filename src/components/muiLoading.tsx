import { Stack } from "@mui/material"
import { LoadingButton } from '@mui/lab'
import {Save} from '@mui/icons-material'
export const MuiLoading = ()=>{
	return(
		<Stack direction='row' spacing={2}>
			<LoadingButton variant='outlined'>Submit</LoadingButton>
			<LoadingButton loading variant='outlined'>
				Submit	
			</LoadingButton>
			<LoadingButton variant='outlined' loadingIndicator='Loading...'>
				Fetch Data
			</LoadingButton>
			<LoadingButton loading variant='outlined' loadingIndicator='Loading...'>
				Fetch Data
			</LoadingButton>
			<LoadingButton color="success" variant='outlined'  startIcon={<Save/>}>
				Save Data
			</LoadingButton>
			<LoadingButton  loading variant='outlined' loadingPosition="start" startIcon={<Save/>}>
				Save
			</LoadingButton>	
		</Stack>
	)
}