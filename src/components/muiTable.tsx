import { 
TableContainer,
Table,
TableHead
,TableBody
,TableRow
,TableCell
,Paper } from "@mui/material"
import {dataTable} from './../assets/datas' 

export const MuiTable = ()=>{
	console.log(dataTable)
	return(
		<TableContainer component={Paper} sx={{maxHeight: '585px'}}>
			<Table aria-label='simple table' stickyHeader>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>First name</TableCell>
						<TableCell>Last name</TableCell>
						<TableCell align='center'>Email</TableCell>
					</TableRow>
				</TableHead>
				<TableBody >
					{dataTable.map((row)=>(
							<TableRow key={row.id}
							 sx={{'&:last-child td, &:last-child th': {border:0}}}
							>
								<TableCell>{row.id}</TableCell>
								<TableCell>{row.first_name}</TableCell>
								<TableCell>{row.last_name}</TableCell>
								<TableCell align='center'>{row.email}</TableCell>
							
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}