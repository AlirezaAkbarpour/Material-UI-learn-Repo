import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import  {TimelineOppositeContent}  from '@mui/lab';
export const MuiTimeLine = ()=>{
	return(
		<>
		<Timeline position='alternate'>
			<TimelineItem>
				<TimelineOppositeContent color='text.secondary'>1/3</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color='success' variant='filled'/>
					<TimelineConnector  sx={{ bgcolor: 'success.main' }}/>
				</TimelineSeparator>
				<TimelineContent>City A</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color='success'/>
					<TimelineConnector/>
				</TimelineSeparator>
				<TimelineContent>City B</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot/>
				</TimelineSeparator>
				<TimelineContent>City C</TimelineContent>
			</TimelineItem>
		</Timeline>
		
		</>
		
	)
}