import React from 'react'
import * as cx from './Splash.module.scss'
import clsx from 'clsx'

// Images
import header from '../../assets/images/header.png'
import footer from '../../assets/images/footer.png'
import bigLogo from '../../assets/images/logo.png'

const SplashScreen = () => {
  return (
    <section className={cx.main}>
      <div className={clsx(cx.header, cx.headings)} style={{backgroundImage: `url(${header})`}} />
      <div className={cx.wrapper}>
        <div className={cx.content}>
          <img src={bigLogo} alt="Jeni x Reander Nuptial" />
          <h1>Jeni and Reander</h1>
          <h4>Coming Soon</h4>
        </div>
      </div>
      <div className={clsx(cx.footer, cx.headings)} style={{backgroundImage: `url(${footer})`}}>
    </div>
    </section>
  )
}

export default SplashScreen
