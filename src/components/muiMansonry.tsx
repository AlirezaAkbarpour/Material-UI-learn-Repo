import { Box, Paper } from "@mui/material";
import {Masonry} from '@mui/lab'

const heights = [
	150,30,90,70,110,150,130,80,50,90,100,150,30,50,80,18
]

export const MuiMasonry = ()=>{
	return(
		<Box sx={{width:500,minHeight:400}}>
			<Masonry columns={4} spacing={1}>
					{heights.map((height,index)=>(
						<Paper
							key={index}
							sx={{
								display:'flex',
								justifyContent:'center',
								alignItems:'center',
								height,
								border:'1px solid',
								bgcolor:Math.random()*10>5?'blue':'orange'
							}}
				
						>
						{index+1}
						</Paper>
					))}
			</Masonry>
		</Box>
	)
}