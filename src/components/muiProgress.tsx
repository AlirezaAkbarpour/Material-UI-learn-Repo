import {Stack,CircularProgress,LinearProgress} from '@mui/material'

export const MuiProgress = ()=>{
	return(
		<Stack spacing={4}>
		<Stack spacing={2}>
			<CircularProgress />
			<CircularProgress color='warning'/>
			<CircularProgress color='success' variant='determinate' value={60}/>
		</Stack>

		<Stack spacing={2}>
			<LinearProgress />
			<LinearProgress color='warning'/>
			<LinearProgress color='success' variant='determinate' value={60}/>
		</Stack>
		</Stack>
	)
}