import { Stack , Rating } from "@mui/material"
import { Favorite } from "@mui/icons-material"
import { FavoriteBorder } from "@mui/icons-material"
import React, { useState } from "react"
export const MuiRating = ()=>{
	const [value,setValue] = useState<number | null>(3)
	const consoleLog = e => console.log({e})
	consoleLog(value)
	const handleChange = (_event:React.ChangeEvent<{}>,newValue:number | null)=>{
		setValue(newValue);		
	}
 	return(
		<Stack>
			<Rating 
				value={value} 
				onChange={handleChange}
				precision={0.5}
				icon={<Favorite fontSize="inherit" color='error'/>}
				emptyIcon={<FavoriteBorder fontSize="inherit"/>}
				readOnly
				highlightSelectedOnly
			/>
		</Stack>
	)
}