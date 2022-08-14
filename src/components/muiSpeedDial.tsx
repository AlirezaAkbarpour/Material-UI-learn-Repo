import { SpeedDial,SpeedDialAction,SpeedDialIcon } from "@mui/material"
import { CopyAll,Print,Share ,Edit} from "@mui/icons-material"
export const MuiSpeedDial = ()=>{
	return(
		<SpeedDial ariaLabel="Navigation speed dial"
		sx={{position:'absolute',bottom:16,right:16}}
		icon={<SpeedDialIcon openIcon={<Edit/>}/> }

		>
			<SpeedDialAction icon={<CopyAll/>}  tooltipTitle='Copy' />
			<SpeedDialAction icon={<Print/>}  tooltipTitle='Print' />
			<SpeedDialAction icon={<Share/>}  tooltipTitle='Share' />
		</SpeedDial>
	)
}