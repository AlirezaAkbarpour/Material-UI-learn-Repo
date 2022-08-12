import {Stack,ImageList,ImageListItem,ImageListItemBar} from '@mui/material'

const itemData = [
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
	{
		img:'https://source.unsplash.com/random',
		title:'Image'
	},
]

export const MuiImageList = ()=>{
	return(
		<Stack spacing='4'>
			<ImageList 
			variant='woven'
			sx={{width:600,height:550}}
			cols={3}
			gap={4}
			>
				{
					itemData.map(item => (
						<ImageListItem key={item.img}>
							<img 
							src={`${item.img}?w=360&h=360&fit=crop&auto=format&dpr=2`} 
							alt={item.title}
							loading='lazy'
							/>
							<ImageListItemBar title={item.title}/>
						</ImageListItem>
					))
				}
			</ImageList>
		</Stack>
	)
}