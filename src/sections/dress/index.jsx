import React from 'react'
import clsx from 'clsx'
import parse from 'html-react-parser'

// Assets
import * as cx from './Dress.module.scss'

const DressCode = ({
    title, 
    ladies,
    men
}) => {
  return (
    <section className={cx.wrapper}>
        <div className={clsx(cx.container, 'container')}>
            <h2>{title}</h2>
            <div className={cx.content}>
                <div className={cx.sliders}>
                    <div className={cx.sampleSlider}>
                        <div className={cx.boxContainer}></div>
                    </div>
                    <div className={cx.sampleSlider}>
                        <div className={cx.boxContainer}></div>
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
    </section>
  )
}

export default DressCode
