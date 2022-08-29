import {Box,TextField} from '@mui/material'
import {DateRangePicker,DateRange} from '@mui/x-date-pickers-pro/DateRangePicker'
import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';

export const MuiDateRangePicker = ()=>{
	const [value,setValue] = useState<DateRange<Date>>([null,null])
	return(
		<LocalizationProvider dateAdapter={AdapterDayjs}>
		<Box width='500px'>
			<DateRangePicker
				startText='Check-in'
				endText='Check-out'
				value={value}
				onChange={(newVal)=>{
					setValue(newVal)
				}}
				renderInput={(startProps, endProps)=>{
					<>
						<TextField {...startProps}/>
						<Box sx={{mx:2}}>to</Box>
						<TextField {...endProps}/>
					</>
				}}
			/>
		</Box>
		</LocalizationProvider>
		
	)
}