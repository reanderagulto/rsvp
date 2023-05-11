import React from 'react'
import parse from 'html-react-parser'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import clsx from 'clsx'

// Assets
import * as cx from './Story.module.scss'
import header from '@images/header.png'

// Data
import { pageInfo } from '@data/info'

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
                <div className={cx.slider}>
                    <img className={cx.item} src={pageInfo.gallery[0]} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story
