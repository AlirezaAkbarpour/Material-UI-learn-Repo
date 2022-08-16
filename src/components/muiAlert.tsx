import { Stack, Alert,AlertTitle, Button } from "@mui/material"
import { Check
 } from "@mui/icons-material"
export const MuiAlert = ()=>{
	return(
		<Stack spacing={4}>
			<Stack spacing={2}>
				<Alert severity="error">This is a Error Alert</Alert>
					<Alert severity="warning">This is a Warning Alert</Alert>
						<Alert severity="info">This is a Info Alert</Alert>
							<Alert severity="success">This is a Success Alert</Alert>
			</Stack>
			<Stack spacing={2}>
				<Alert severity="error" variant="outlined">This is a Error Alert</Alert>
					<Alert severity="warning" variant="outlined" >This is a Warning Alert</Alert>
						<Alert severity="info" variant="outlined">This is a Info Alert</Alert>
							<Alert severity="success" variant="outlined" >This is a Success Alert</Alert>
			</Stack>
			<Stack spacing={2}>
				<Alert severity="error" variant="filled">This is a Error Alert</Alert>
					<Alert severity="warning" variant="filled" >This is a Warning Alert</Alert>
						<Alert severity="info" variant="filled">This is a Info Alert</Alert>
							<Alert severity="success" variant="filled" >This is a Success Alert</Alert>
			</Stack>
			<Stack spacing={2}>
				<Alert severity="error" variant="filled"><AlertTitle>Eror</AlertTitle>This is a Error Alert</Alert>
					<Alert severity="warning" variant="filled" ><AlertTitle>Warning</AlertTitle>This is a Warning Alert</Alert>
						<Alert onClose={m=>{alert('Remove')}}  severity="info" variant="filled"><AlertTitle>Info</AlertTitle>This is a Info Alert</Alert>
							<Alert 
							icon={<Check />} severity="success" variant="filled"
							
							action={
								<Button color='inherit' size='small'>Undo</Button>
							}
							>
								<AlertTitle>Success</AlertTitle>
								This is a Success Alert
							</Alert>
			</Stack>
		</Stack>
	
		
	)
}