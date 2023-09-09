import React, {useState, useEffect, useContext} from 'react'
import clsx from 'clsx'
import parse from 'html-react-parser'
import AOS from 'aos'

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

    const navigateRSVP = () => {
        const element = document.querySelector('#rsvp')
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
    }

    useEffect(() => {
        AOS.refresh()
    }, [])
    
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
                            <h1 data-aos="fade-up" data-aos-duration="900">{title}</h1>
                            <h2 data-aos="fade-up" data-aos-duration="900">{subtitle}</h2>
                        </div>
                        <div className={cx.inner}>
                            <p data-aos="fade-up" data-aos-duration="900">{date}<span>{time}</span>
                            </p>
                            <p data-aos="fade-up" data-aos-duration="900">{parse(location)}</p>
                        </div>
                        {/* <button 
                            type="button" 
                            className={cx.button} 
                            ata-aos="fade-down" 
                            data-aos-delay="200"
                            onClick={navigateRSVP}
                        >
                            RSVP Here
                        </button> */}
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default Banner
