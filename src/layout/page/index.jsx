import React from 'react'
import clsx from 'clsx'

// Assets
import * as cx from './Page.module.scss'

// sections
import Navigation from '@sections/navigation'
import Banner from '@sections/banner'
import Story from '@sections/story'
import Entourage from '@sections/entourage'
import Location from '@sections/location'
import DressCode from '@sections/dress'
import RSVP from '@sections/rsvp'
import Footer from '@sections/footer'
import footerImg from '@images/footer.png'

const Page = () => {
  return (
    <div className={cx.wrapper}>
        <Navigation />
        <main>
            <Banner />
            <Story />
            <Entourage />
            <Location />
            <DressCode />
            <RSVP />
        </main>
        <Footer />
        <div 
          className={cx.footerImage} 
          style={{backgroundImage: `url(${footerImg})`}} 
        />
    </div>
  )
}

export default Page
