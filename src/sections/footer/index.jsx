import React from 'react'
import logo from '@images/logo-sm.png'
import * as cx from './Footer.module.scss'
import clsx from 'clsx'

const Footer = () => {
  return (
    <footer>
        <div className={clsx('container', cx.container)}>
            <a href="/">
                <img src={logo} alt="Jeni X Reander Logo" width="73" height="60" className={cx.logo}/>
            </a>
            <h3 className={cx.footerCopyright}>Jeni and Reander</h3>
        </div>
    </footer>
  )
}

export default Footer
