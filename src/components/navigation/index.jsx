import React, { useState, useEffect } from 'react'

import { pageInfo } from '@data/info'
import clsx from 'clsx'
import * as cx from './Navigation.module.scss'
import logo from '@images/logo-sm.png'

const Navigation = () => {

    const [hamburger, setHamburger] = useState(false)

    const handleHamburger = () => {
        setHamburger(!hamburger)
        console.log(hamburger)
    }

    return (
    <header className={clsx(cx.wrapper)}>
        <div className={clsx(cx.container, 'container')}>
            <div className={cx.logo}>
                <img src={logo} className='fluid' alt="Jeni x Reander Logo"/>
            </div>
            <nav>
                <div className={cx.desktop}>
                    <ul className={cx.nav}>
                        {pageInfo.menu.map((item, index) => {
                            return ( <li key={index} className={cx.item}>{item}</li>)
                        })}
                    </ul>
                </div>
                <div className={clsx(cx.mobile, hamburger === true && 'show-menu')}>
                    <div 
                        className={clsx(cx.hamburger)}
                        onClick={handleHamburger}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Navigation
