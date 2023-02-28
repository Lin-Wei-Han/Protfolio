import React from 'react';
import { css } from '@emotion/css/macro';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { workList } from '../data/work';
import { contestList } from '../data/contest';
import { motion } from "framer-motion";

const Experience = () => {

    return (
        <div className={style()}>
            <div className='exp-left'>
                <Timeline sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                    {workList.map((work, index) => (
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
                                <TimelineSeparator>
                                    <TimelineDot sx={{
                                        backgroundColor: '#dc143c'
                                    }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={timeline()}>
                                    <div className='title'>{work.title}</div>
                                    <div className='description'>
                                        <div className='secondary'>{work.secondary}</div>
                                        <p className='content-list'>{work.description}</p>
                                        {work.skillList ?
                                            <>{work.skillList.map((skill, index) => (
                                                <p className='skill-list' key={index}>
                                                    {skill.title}
                                                    {skill.content ?
                                                        <ul>
                                                            {skill.content.map((detail, index) => (
                                                                <li key={index}>{detail.contentDetail}</li>
                                                            ))}
                                                        </ul>
                                                        : ""}
                                                </p>
                                            ))}</>
                                            : ""}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </motion.div>
                    ))}
                </Timeline>
            </div>
            <div className='exp-right'>
                <Timeline sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                    {contestList.map((work, index) => (
                        <motion.div variants={{
                            initial: { y: 40, opacity: 0 },
                            animate: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: index * 3 / 10,
                                    duration: 0.8,
                                    ease: [0.2, -0.05, 0.01, 0.9],
                                },
                            },
                        }} initial="initial" animate="animate">
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot sx={{
                                        backgroundColor: '#006aa6'
                                    }} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent className={timeline()}>
                                    <div className='title'>{work.title}</div>
                                    <div className='description'>
                                        <div className='secondary'>{work.secondary}</div>
                                        <p className='content-list'>{work.description}</p>
                                        {work.skillList ?
                                            <>{work.skillList.map((skill, index) => (
                                                <p className='skill-list' key={index}>
                                                    {skill.title}
                                                    {skill.content ?
                                                        <ul>
                                                            {skill.content.map((detail, index) => (
                                                                <li key={index}>{detail.contentDetail}</li>
                                                            ))}
                                                        </ul>
                                                        : ""}
                                                </p>
                                            ))}</>
                                            : ""}
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        </motion.div>
                    ))}
                </Timeline>
            </div>
        </div>
    )
}

export default Experience

const style = () => css`
    display: grid;
    grid-template-columns: 1fr 1fr;

    .exp-right .title{
        color: #006AA6;
    }

    .exp-left .title{
        color: #DC143C;
    }

@media screen and (max-width:768px) { 
    grid-template-columns: 1fr ;
}    
    
`

const timeline = () => css`
.title{
    font-size:1.2rem;
    font-weight:500;
}
.description{
    padding-left:1.2rem;
    .content-list{
        line-height:24px;
        padding-top:10px;
        font-size:14px;
    }
    .skill-list{
        padding-left:20px;
        line-height:24px;
        font-size:14px;
        ul li {
            margin-left:40px;
        }
    }
}

@media screen and (max-width:768px) { 
.title{
    font-size:1.5rem;
}
.description{
    .secondary{
        font-size:18px;
    }
    .content-list{
        font-size:18px;
    }
    .skill-list{
        font-size:16px;
    }
}
}    
@media screen and (max-width:520px) { 
.title{
    font-size:1.2rem;
}
.description{
    .secondary{
        font-size:16px;
    }
    .content-list{
        font-size:16px;
    }
    .skill-list{
        font-size:14px;
    }
}
}   
`