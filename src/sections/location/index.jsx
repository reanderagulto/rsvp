import React, {useEffect} from 'react'
import clsx from 'clsx'
import parse from 'html-react-parser'
import AOS from 'aos'

// Assets
import * as cx from './Location.module.scss'

const Location = ({
    title, 
    paragraphs, 
    waze,
    maps,
}) => {
    useEffect(() => {
        AOS.refresh()
    }, [])

    return (
        <section className={cx.wrapper}>
            <div className={clsx(cx.container, 'container')}>
                <h2 data-aos="fade-up">{title}</h2>
                <div className={cx.contentWrap} data-aos="fade-right">
                    <div className={cx.mapContainer}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.8502303532455!2d121.5876155758064!3d14.026890590863555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4d7d8def8b55%3A0xafed8aefabf756a9!2sVilla%20Juliana%20Resort%20Tayabas!5e0!3m2!1sen!2sph!4v1683797202721!5m2!1sen!2sph"
                        loading="lazy" 
                        style={{ 
                            border: `0`, 
                            borderRadius: '1.9375rem'
                        }}
                        className={cx.map}
                    ></iframe>
                    </div>
                    <div className={cx.content}>
                        <div className={cx.paragraphs} data-aos="fade-left" data-aos-delay="200">
                        {paragraphs && paragraphs.map((item, index) => {
                            return (
                                <p key={index}>{parse(item)}</p>
                            )
                        })}
                        </div>
                        <a className={cx.button} href={waze} target='_blank' data-aos="fade-left" data-aos-delay="200">Waze</a>
                        <a className={cx.button} href={maps} target='_blank' data-aos="fade-left" data-aos-delay="200">Google Maps</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
