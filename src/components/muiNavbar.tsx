import { CatchingPokemon,KeyboardArrowDown,KeyboardArrowUp } from "@mui/icons-material"
import { AppBar,IconButton,Toolbar, Typography ,Stack,Button ,Menu,MenuItem } from "@mui/material"
import { useState } from "react"

export const MuiNavbar = ()=>{
	const [anchorE1,setAnchorE1] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorE1)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
		setAnchorE1(event.currentTarget)
	}
	const handleClose =()=>{
		setAnchorE1(null)
	}
	return(
		<AppBar position="static" sx={{padding:2}}>
			<Toolbar >
				<IconButton size='large' edge='start' color='inherit' aria-label='logo'>
					<CatchingPokemon/>
				</IconButton>
				<Typography variant='h6' component='div' sx={{flexGrow: 1 }}> 
					Pockemon App
				</Typography>
				
				<Stack spacing={2} direction={innerWidth<580?'column':'row'}>
					<Button variant='outlined' color='inherit'>Features</Button>					<Button variant='outlined' color='inherit'>About</Button>
					<Button variant='outlined' color='inherit' id='resources-button'
					onClick={handleClick}
					aria-controls={open?'resources-menu':undefined}
					aria-haspopup='true'
					aria-expanded={open? 'true':undefined}
					endIcon={anchorE1?<KeyboardArrowUp/>:<KeyboardArrowDown/>}
					>Resources</Button>
					<Button variant='contained' >Login</Button>
				</Stack>
				<Menu id='resources-menu' anchorEl={
					anchorE1
				} open={open}
				MenuListProps={{
					'aria-labelledby':'resources-button'
				}}
				onClose={handleClose}
				anchorOrigin={{
					vertical:'bottom',
					horizontal:'right',
				}}
				transformOrigin={{
					vertical:'top',
					horizontal:'right'
				}}
				>
					<MenuItem>Menu</MenuItem>
					<MenuItem>Podcasts</MenuItem>
				</Menu>	
				
			</Toolbar>
		</AppBar>
	)
}