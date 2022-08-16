import { Box,Avatar, List , ListItem, ListItemText , ListItemIcon,ListItemAvatar,ListItemButton} from "@mui/material"
import { Mail } from "@mui/icons-material"
export const MuiList = ()=>{
	return(
		<Box sx={{width: '400px',bgcolor:'#e0dede'}}>
			<List>
				<ListItem>
					<ListItemButton>
					<ListItemAvatar>
					<Avatar>
						<Mail/>
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary='List Item 1'
						secondary='Secondary Text'
					/>	
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
					<ListItemAvatar>
					<Avatar>
						<Mail/>
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary='List Item 1'
						secondary='Secondary Text'
					/>	
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
					<ListItemAvatar>
					<Avatar>
						<Mail/>
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary='List Item 1'
						secondary='Secondary Text'
					/>	
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton >
					<ListItemAvatar>
					<Avatar>
						<Mail/>
					</Avatar>
					</ListItemAvatar>
					<ListItemText primary='List Item 1'
						secondary='Secondary Text'
					/>	
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	)
}