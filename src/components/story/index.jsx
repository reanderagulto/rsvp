import React from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'
import ImageGallery from 'react-image-gallery';

// Assets
import './react-gallery.scss'
import * as cx from './Story.module.scss'
import header from '@images/header.png'

// Data
import { pageInfo } from '@data'

const Story = () => {
  return (
    <section className={cx.wrapper} id="story">
        <div 
            className={cx.mask} 
            style={{
                backgroundImage: `url(${header})`
            }}
        />
        <div className={clsx(cx.container, 'container')}>
            <h2 className='text-center'>{pageInfo.story.title}</h2>
            <div className={cx.content}>
                <div className={cx.innner}>
                    {pageInfo.story.paragraphs.map((item, index) => {
                        return (
                            <p key={index}>{parse(item)}</p>
                        )
                    })}
                </div>
                <div className={clsx(cx.slider, 'container')}>
                    <ImageGallery 
                        items={pageInfo.galleryItems} 
                        infinite={true}
                        showNav={true}
                        showFullscreenButton={true}
                        showBullets={true}
                        showPlayButton={false}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story
