import React , {useState} from "react";
import { Menu } from "@mui/icons-material";
import { Drawer , Box, Typography, IconButton} from "@mui/material";

export const MuiDrawer = ()=>{
	const [isDrawerOpen,setIsDrawerOpen] = useState(false)

	return(
		<>
		<Box position='static' bgcolor='purple' width='100px' height='100px'
			sx={{
				borderRadius:'0 0 50px 0'
			}}
		>
		<IconButton size='large' edge='start' color='inherit' aria-label='logo'
			onClick={()=> setIsDrawerOpen(true)}
			sx={{
				margin:3
			}}
		>
			<Menu/>
		</IconButton>
		</Box>
		<Drawer anchor="left"
			open={isDrawerOpen}
			onClose={()=> setIsDrawerOpen(false)}
		>
			<Box p={2} width='250px' textAlign='center' role='presentation'>
				<Typography color='black' variant='h6' component='div'>
				Side Panel
				</Typography>
			</Box>
		</Drawer>
		
		</>
		
	)
}