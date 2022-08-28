import { Stack, Typography } from "@mui/material"

export const Home = ()=>{
	return(
		<Stack direction='column' spacing={2}>
			<Typography variant="h3" component='h3'
			sx={{
				textAlign:'center',
				padding:2,
				bgcolor:'#fff',
				color:'#000ddd',
				fontFamily:'Poppins,IranSans,sans-serif'
			}}
			>به فارسی Material UI Document</Typography>
		</Stack>
	)
}