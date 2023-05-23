import React from 'react'
import * as cx from './Splash.module.scss'
import clsx from 'clsx'

// Images
import header from '@images/header.png'
import footer from '@images/footer.png'
import bigLogo from '@images/logo.png'

// Data
import { pageInfo } from '@data'

const SplashScreen = () => {
  return (
    <section className={cx.main}>
      <div className={clsx(cx.header, cx.headings)} style={{backgroundImage: `url(${header})`}} />
      <div className={cx.wrapper}>
        <div className={cx.content}>
          <img src={bigLogo} alt="Jeni x Reander Nuptial" />
          <h1>{pageInfo.banner.title}</h1>
          <h4>{pageInfo.banner.coming_soon}</h4>
        </div>
      </div>
      <div className={clsx(cx.footer, cx.headings)} style={{backgroundImage: `url(${footer})`}}>
    </div>
    </section>
  )
}

export default SplashScreen
