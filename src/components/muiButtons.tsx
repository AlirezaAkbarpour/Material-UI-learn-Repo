import React ,{useState}from 'react';
import {
Stack,
Button,
IconButton,
ButtonGroup,
ToggleButtonGroup,
ToggleButton} from '@mui/material';

import { 
Send,
FormatBold,
FormatItalic,
FormatUnderlined} from '@mui/icons-material'

const Muibuttons = () => {
	const [formats,setFormats] = useState<string|null>(null)
	console.log({formats})
	const handleFormatChange= (_event:React.MouseEvent<HTMLElement>,updatedFormats:string|null)=>{
		setFormats(updatedFormats)
	}
	return (
		<div>
			<Stack spacing={4}>
				<Stack spacing={2} direction="row">
				<Button variant='text'>Text</Button>
				<Button variant='contained'>Contained</Button>
				<Button variant='outlined'>Outlined</Button>
				</Stack>
				{/* Coloration */}
				<Stack spacing={2} direction='row'>
				<Button variant='contained' color='primary'>Primary</Button>
				<Button variant='contained' color='secondary'>Secondary</Button>
				<Button variant='contained' color='warning'>warning</Button>
				<Button variant='contained' color='error'>Error</Button>
				<Button variant='contained' color='success'>Success</Button>
				<Button variant='contained' color='info'>Info</Button>
				</Stack>
				{/* Sizes */}
				<Stack spacing={2} direction='row'>
				<Button variant='contained' size='small'>Small</Button>
				<Button variant='contained' size='medium'>Medium</Button>
				<Button variant='contained' size='large'>Large</Button>
				</Stack>
				{/* Icon button */}
				<Stack spacing={2} direction='row'>
				<Button variant='contained' startIcon={<Send/>}>Send</Button>
				<Button variant='contained' endIcon={<Send/>}>Send</Button>
				<IconButton aria-label='send' color='primary' size='large'>
					<Send/>
				</IconButton>
				</Stack>
				{/*Button Group */}
				<Stack spacing={2} direction='row'>
					<ButtonGroup variant='contained'>
						<Button aria-label='left'>Left</Button>
						<Button aria-label='center'>Center</Button>
						<Button aria-label='right'>Right</Button>
					</ButtonGroup>
				</Stack>
				{/* Toggle Button*/}
				<Stack direction='column'>
					<ToggleButtonGroup aria-label='text formatting' size='small'  color='primary' orientation='horizontal' value={formats} onChange={handleFormatChange}>
						<ToggleButton value='bold' aria-label='bold'><FormatBold/></ToggleButton>
						<ToggleButton value='italic' aria-label='italic'><FormatItalic/></ToggleButton>
						<ToggleButton value='underlined' aria-label='underlined'><FormatUnderlined/></ToggleButton>
					</ToggleButtonGroup>
				</Stack>
    			</Stack>
		</div>
	);
}

export default Muibuttons;
