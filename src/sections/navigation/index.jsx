import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import * as cx from './Navigation.module.scss'
import logo from '@images/logo-sm.png'

const Navigation = ({
    menu
}) => {

    const [hamburger, setHamburger] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    
    const handleHamburger = () => {
        setHamburger(!hamburger)
    }

    const changeBackground = () => {
        if(window.scrollY >= 66)
            setScrolled(true)
        else if(window.scrollY == 0)
            setScrolled(false)
    }

    const navigateSection = (id, type) => {
        const element = document.querySelector(id)
        if(type === "mobile")
            handleHamburger()
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
    }
    

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
    <header 
        className={clsx(cx.wrapper, 
            scrolled && cx.active
        )}
    >
        <div className={clsx(cx.container, 'container')}>
            <div className={cx.logo}>
                <a href="/">
                    <img src={logo} className='fluid' alt="Jeni x Reander Logo"/>
                </a>
            </div>
            <nav>
                <div className={cx.desktop}>
                    <ul className={cx.nav}>
                        {menu.map((item, index) => {
                            return ( 
                                <li 
                                    key={index} 
                                    className={cx.item}
                                    onClick={() => navigateSection(item.link, 'desktop')}
                                >
                                    {item.title}                                    
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={clsx(cx.mobile, hamburger === true && cx.showMenu)}>
                    <div 
                        className={clsx(cx.hamburger)}
                        onClick={handleHamburger}
                    >
                        Menu
                    </div>
                    <div className={cx.mobileMenu}>
                        <div className={cx.closeWrapper}>
                            <div 
                                className={cx.close}
                                onClick={handleHamburger}
                            >
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <ul className={cx.nav}>
                            {menu.map((item, index) => {
                                return ( 
                                    <li 
                                        key={index} 
                                        className={cx.item}
                                        onClick={() => navigateSection(item.link, 'mobile')}
                                    >
                                        <a 
                                            href={item.link}
                                            onClick={handleHamburger}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Navigation
