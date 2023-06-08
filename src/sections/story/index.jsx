import React from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'
import ImageGallery from 'react-image-gallery';

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
            {/* <div className={clsx(cx.container, 'container')}>
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
            </div> */}
            <div className={clsx(cx.container, 'container')}>
                <h2 className='text-center'>{title}</h2>
                <Timeline position="alternate" className={cx.timelineContainer}>
                    {ourStory.story.map((item, index) => {
                        return (
                            <TimelineItem className={cx.timelineItem} key={index}>
                                <TimelineOppositeContent className={cx.timelineImage}>
                                    <img src={item.image} alt={item.title} />
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot>
                                        {item.icon}
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
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
