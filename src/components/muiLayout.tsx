import {Stack ,Box, Divider, Grid, Paper} from '@mui/material'

export const MuiLayout = ()=>{
	return(
	<Paper sx={{padding: '32px'}} elevation={4}>
	<Stack
		sx={{border:'1px solid black'}} 
		direction='row' 
		spacing={2}
		divider={<Divider orientation='vertical' flexItem/>}
	>
		<Box
			sx={{
				backgroundColor:'primary.main',
				color:'white',
				height:'100px',
				width:'100px',
				padding:'16px',
				'&:hover': {
					backgroundColor:'primary.light'
				}
			}}
		>
			Hi
		</Box>

		<Box component='h3' display='flex' height='100px' width='100px' bgcolor='success.light'>Welcome</Box>
	</Stack>

	<Grid container my={4} spacing={2}>
			<Grid item xs={12} sm={6}>
				<Box bgcolor={'primary.light'} p={2}>Box 1</Box>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Box bgcolor={'primary.light'} p={2} >Box 2</Box>
			</Grid>
			<Grid item  xs={12} sm={6}>
				<Box bgcolor={'primary.light'} p={2}>Box 3</Box>
			</Grid>
			<Grid item  xs={12} sm={6}>
				<Box bgcolor={'primary.light'} p={2}>Box 4</Box>
			</Grid>
	</Grid>
	</Paper>	
	)
}