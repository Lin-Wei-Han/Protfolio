import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const educationList = [
    {
        name: "淡江大學統計學系 三年級",
        time: "2023",
    }
]

const Education = () => {
    return (
        <div>
            <Timeline
                sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2, }, }}>
                {educationList.map((edu, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent color="text.secondary">
                            {edu.time}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            {index === educationList.length - 1 ? "" : <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{edu.name}</TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}

export default Education
