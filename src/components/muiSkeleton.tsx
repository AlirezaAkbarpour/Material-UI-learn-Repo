import {Stack,Skeleton}  from '@mui/material'

export const MuiSkeleton = ()=>{
	return(
		<Stack spacing={2}>
			<Skeleton variant='text'/>
			<Skeleton variant='circular' width='43px' height='43px'/>
			<Skeleton variant='rectangular' />
			<Skeleton variant='rectangular' width='450px' height='450px'
			animation='pulse' />
		</Stack>
	)
}