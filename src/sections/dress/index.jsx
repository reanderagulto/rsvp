import React, {useEffect} from 'react'
import clsx from 'clsx'
import parse from 'html-react-parser'
import ImageGallery from 'react-image-gallery';

import AOS from 'aos'

// Assets
import * as cx from './Dress.module.scss'

import { pageImages } from '@data'

const DressCode = ({
    title, 
    ladies,
    men
}) => {

    useEffect(() => {
        AOS.refresh()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className={cx.wrapper}>
            <div className={clsx(cx.container, 'container')}>
                <h2 data-aos="fade-up">{title}</h2>
                <div className={cx.content}>
                    <div className={cx.contentContainer} data-aos="fade-up">
                        <h3 className='text-center'>Primary Sponsors</h3>
                        <div className={cx.sliders}>
                            <div className={cx.sampleSlider}>
                                <ImageGallery 
                                    items={pageImages.primarySponsors.male} 
                                    infinite={true}
                                    showNav={false}
                                    showFullscreenButton={false}
                                    showBullets={true}
                                    showPlayButton={false}
                                />
                            </div>
                            <div className={cx.sampleSlider}>
                                <ImageGallery 
                                    items={pageImages.primarySponsors.female} 
                                    infinite={true}
                                    showNav={false}
                                    showFullscreenButton={false}
                                    showBullets={true}
                                    showPlayButton={false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx.contentContainer} data-aos="fade-up">
                        <h3 className='text-center'>Secondary Sponsors</h3>
                        <div className={cx.sliders}>
                            <div className={cx.sampleSlider}>
                                <ImageGallery 
                                    items={pageImages.secondarySponsors.male} 
                                    infinite={true}
                                    showNav={false}
                                    showFullscreenButton={false}
                                    showBullets={true}
                                    showPlayButton={false}
                                />
                            </div>
                            <div className={cx.sampleSlider}>
                                <ImageGallery 
                                    items={pageImages.secondarySponsors.female} 
                                    infinite={true}
                                    showNav={false}
                                    showFullscreenButton={false}
                                    showBullets={true}
                                    showPlayButton={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx.contentContainer} data-aos="fade-up">
                    <h3 className='text-center'>Guests</h3>
                    <div className={cx.content}>
                        <div className={cx.sliders}>
                            <div className={cx.sampleSlider}>
                                <ImageGallery 
                                    items={pageImages.menDress} 
                                    infinite={true}
                                    showNav={false}
                                    showFullscreenButton={false}
                                    showBullets={true}
                                    showPlayButton={false}
                                />
                            </div>
                            <div className={cx.sampleSlider}>
                                <ImageGallery 
                                    items={pageImages.ladiesDress} 
                                    infinite={true}
                                    showNav={false}
                                    showFullscreenButton={false}
                                    showBullets={true}
                                    showPlayButton={false}
                                />
                            </div>
                        </div>
                        <div className={cx.dressCodeContainer}>
                            <p>
                                <span><strong>Ladies</strong></span>
                                {parse(ladies)}
                            </p>
                            <p>
                                <span><strong>Men</strong></span>
                                {men}
                            </p>
                            <div className={cx.colorPalette}>
                                <div className={clsx(cx.item, cx.sageGreen)}></div>
                                <div className={clsx(cx.item, cx.dustyBlue)}></div>
                                <div className={clsx(cx.item, cx.lilac)}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DressCode
