import React, {useState, useEffect, useContext} from 'react'
import clsx from 'clsx'
import parse from 'html-react-parser'

// Assets
import * as cx from './Banner.module.scss'
import banner from '@images/topfold-banner.jpg'

// Context

const Banner = ({ 
    title, 
    subtitle, 
    date, 
    time, 
    location
}) => {    
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
                            <h1>{title}</h1>
                            <h2>{subtitle}</h2>
                        </div>
                        <div className={cx.inner}>
                            <p>{date}<span>{time}</span>
                            </p>
                            <p>{parse(location)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default Banner
