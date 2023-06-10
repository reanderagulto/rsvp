import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'

// Assets
import './react-gallery.scss'
import * as cx from './Story.module.scss'
import header from '@images/header.png'

import { ourStory } from '@data';

// Timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import AOS from 'aos'

const Story = ({
    title, 
    paragraphs,
    gallery
}) => {

    useEffect(() => {
        AOS.refresh()
    }, [])

    return (
        <section className={cx.wrapper} id="story">
            <div 
                className={cx.mask} 
                style={{
                    backgroundImage: `url(${header})`
                }}
            />
            <div className={clsx(cx.container, 'container')}>
                <h2 className='text-center' data-aos="fade-up">{title}</h2>
                <Timeline position={screen.width > 768 ? "alternate": "right"} className={cx.timelineContainer}>
                    {ourStory.story.map((item, index) => {
                        return (
                            <TimelineItem className={clsx(cx.timelineItem, screen.width < 768 && cx.mobilTimeline )} key={index} data-aos="fade-up" data-aos-duration="1050" data-aos-easing="linear">
                                <TimelineOppositeContent className={cx.timelineImage}>
                                    <img src={item.image} alt={item.title} />
                                </TimelineOppositeContent>
                                {screen.width > 768 && 
                                    <TimelineSeparator>
                                        <TimelineDot className={cx.timelineDot}>
                                            {item.icon}
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                }
                                <TimelineContent className={cx.timelineContent}>
                                    <h3>{parse(item.title)}</h3> 
                                    {item.p.map((pTags, pIndex) => {
                                        return (<p key={pIndex}>{parse(pTags)}</p>)
                                    })}
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}
                </Timeline>
            </div>
        </section>
    )
    }

export default Story
