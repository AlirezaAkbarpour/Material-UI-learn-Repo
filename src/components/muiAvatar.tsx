import { Stack,Avatar ,AvatarGroup} from "@mui/material"

export const MuiAvatar = ()=>{
	return(
		<Stack spacing={4}>
		<Stack spacing={2} direction='row'>
		<AvatarGroup max={3}>
			<Avatar sx={{bgcolor:'primary.light'}}>Bwssss</Avatar>
			<Avatar sx={{bgcolor:'success.light'}}>Monday</Avatar>
			<Avatar src='https://source.unplash.com/random'/>
			<Avatar src='https://source.unplash.com/random'/>
			<Avatar src='https://source.unplash.com/random'/>
		</AvatarGroup>
		</Stack>
		<Stack spacing={2} direction='row'>
			<Avatar sx={{bgcolor:'secondary.light'}}>Bw</Avatar>
			<Avatar variant='rounded' sx={{bgcolor:'warning.light',heght:'48px',width:'48px'}}>Mo</Avatar>
		</Stack>
		</Stack>
		
	)
}