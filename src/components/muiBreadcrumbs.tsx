import {Box,Breadcrumbs,Link,Typography} from '@mui/material'

export const MuiBreadcrumbs = ()=>{
	return(
		<Box m={2}>
			<Breadcrumbs 
			aria-label='breadcrumbs' 
			separator='>'
			maxItems={2}
			itemsAfterCollapse={2}
			>
				<Link underline='hover' href='#'>Home</Link>
				<Link underline='hover' href='#'>Catalog</Link>
				<Link underline='hover' href='#'>Accessories</Link>
				<Typography>Shoes</Typography>
			</Breadcrumbs>
		</Box>
	)
}