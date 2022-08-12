import {Box,Card,CardContent,Typography,CardActions,Button, CardMedia} from '@mui/material'

export const MuiCard = ()=>{
	return(
		<Box width='300px'>
			<Card>
				<CardMedia 
					component='img'
					height='140px'
					image='https://source.unsplash.com/random'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						React
					</Typography>
					<Typography variant='body2' color='text.secondry'>
						React is javascript Library for building user interface.
						React can be used as a base in the development of singal-page or
						applications.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Share</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>
		</Box>
	)
}