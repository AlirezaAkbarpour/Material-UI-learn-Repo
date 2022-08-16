import {Stack,Badge} from '@mui/material'
import {Mail} from '@mui/icons-material'
export const MuiBadge = ()=>{
	return(
		<Stack spacing={4}>
		<Stack spacing={2} direction='row'>
			<Badge badgeContent={5} color='primary'>
				<Mail/>
			</Badge>
		</Stack>
		<Stack spacing={2} direction='row'>
			<Badge badgeContent={102} color='secondary' max={50}>
				<Mail fontSize='large' />
			</Badge>
			<Badge badgeContent={0}  color='info' showZero>
				<Mail fontSize='large' />
			</Badge>
			<Badge badgeContent={20} variant='dot' color='warning' showZero invisible={false}>
				<Mail fontSize='large' />
			</Badge>
		</Stack>
		</Stack>
		
	)
}