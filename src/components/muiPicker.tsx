import { Stack, TextField } from "@mui/material"
import { useState } from "react"
import dayjs, {Dayjs} from 'dayjs'
import  {DatePicker,TimePicker} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const MuiPicker = ()=>{
	// 
	const [ selectDate, setSelectDate] = useState<Date | null>(null)
	const [ selectTime, setSelectTime] = useState<Dayjs | null>(dayjs(null))

	console.log(selectDate)
	console.log(selectTime)
	return(
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Stack spacing={4} direction='column'>
				<Stack spacing={4} sx={{ width:'250px'}}>
					<DatePicker label='Date Picker' renderInput={(params)=> <TextField {...params}/>}
						value={selectDate}
						onChange={(newValue)=>{
							setSelectDate(newValue)
						}}
					/>
				</Stack>
				<Stack spacing={4} sx={{ width:'250px'}}>
					<TimePicker label='Time Picker' renderInput={(params)=> <TextField {...params}/>}
						value={selectTime}
						onChange={(newValue)=>{
							setSelectTime(newValue)
						}}
					/>

				</Stack>
			</Stack>
		
		</LocalizationProvider>
		
	)
}