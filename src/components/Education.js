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
import { motion } from "framer-motion";

const educationList = [
    {
        name: "淡江大學統計學系 四年級",
        time: "2023",
    }
]

const Education = () => {
    return (
        <div>
            <Timeline
                sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2, }, }}>
                {educationList.map((edu, index) => (
                    <motion.div variants={{
                        initial: { y: 40, opacity: 0 },
                        animate: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: index * 2 / 10,
                                duration: 0.8,
                                ease: [0.2, -0.05, 0.01, 0.9],
                            },
                        },
                    }} initial="initial" animate="animate">
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
                    </motion.div>
                ))}
            </Timeline>
        </div>
    )
}

export default Education
