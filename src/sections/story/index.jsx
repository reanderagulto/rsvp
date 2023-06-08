import React from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'
import ImageGallery from 'react-image-gallery';

// Assets
import './react-gallery.scss'
import * as cx from './Story.module.scss'
import header from '@images/header.png'

// Timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const Story = ({
    title, 
    paragraphs,
    gallery
}) => {
  return (
    <section className={cx.wrapper} id="story">
        <div 
            className={cx.mask} 
            style={{
                backgroundImage: `url(${header})`
            }}
        />
        <div className={clsx(cx.container, 'container')}>
            <h2 className='text-center'>{title}</h2>
            <div className={cx.content}>
                <div className={clsx(cx.innner, cx.contentInner)}>
                    {paragraphs.map((item, index) => {
                        return (
                            <p key={index}>{parse(item)}</p>
                        )
                    })}
                </div>
                <div className={clsx(cx.slider, cx.contentInner)}>
                    <ImageGallery 
                        items={gallery} 
                        infinite={true}
                        showNav={true}
                        showFullscreenButton={true}
                        showBullets={true}
                        showPlayButton={false}
                        autoPlay={true}
                        slideInterval={5000}
                    />
                </div>
            </div>
        </div>
        <div className={clsx(cx.container, 'container')}>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    09:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    12:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    9:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    </section>
  )
}

export default Story
