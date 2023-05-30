import React, {useState, useEffect} from 'react'
import clsx from 'clsx'
import parse from 'html-react-parser'

// Data
import { pageInfo, getFirebaseData } from '@data'

// Assets
import * as cx from './Banner.module.scss'
import banner from '@images/topfold-banner.jpg'

const Banner = () => {    
    return (
        <section className={cx.wrapper}>
            <div
                className={cx.top}
                style={{
                    backgroundImage: `url(${banner})`
                }}
            >
                <div className={clsx(cx.container, 'container')}>
                    <div className={cx.content}>
                        <div className={cx.heading}>
                            <h1>{pageInfo.banner.title}</h1>
                            <h2>{pageInfo.banner.subtitle}</h2>
                        </div>
                        <div className={cx.inner}>
                            <p>{pageInfo.banner.date}<span>{pageInfo.banner.time}</span>
                            </p>
                            <p>{parse(pageInfo.banner.location)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default Banner
