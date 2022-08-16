import { Tooltip, IconButton } from "@mui/material"
import {Delete} from '@mui/icons-material'
export const MuiTooltip = ()=>{
	return(<Tooltip title='Delete' placement="left" arrow
		enterDelay={200} leaveDelay={500}
	>
		<IconButton>
			<Delete/>
		</IconButton>
	</Tooltip>)
}