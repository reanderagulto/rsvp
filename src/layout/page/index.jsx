import React, {useState, useEffect} from 'react'
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

import { pageInfo } from '@data'

const Page = () => {

  const primaryMale = pageInfo.entourage.principals.filter((item) => {
      return item.gender == 'male'
  })

  const primaryFemale = pageInfo.entourage.principals.filter((item) => {
      return item.gender == 'female'
  })

  const veil = pageInfo.entourage.secondary.filter((item) => {
      return item.role == 'veil'
  })

  const candle = pageInfo.entourage.secondary.filter((item) => {
      return item.role == 'candle'
  })

  const cord = pageInfo.entourage.secondary.filter((item) => {
      return item.role == 'cord'
  })

  return (
    <div className={cx.wrapper}>
        <Navigation 
           menu={pageInfo.menu}
        />
        <main>
            <Banner 
              title={pageInfo.banner.title}
              subtitle={pageInfo.banner.subtitle}
              date={pageInfo.banner.date}
              time={pageInfo.banner.time}
              location={pageInfo.banner.location}
            />
            <Story 
              title={pageInfo.story.title}
              paragraphs={pageInfo.story.paragraphs}
              gallery={pageInfo.galleryItems}
            />
            <Entourage 
              title={pageInfo.entourage.title}
              parentsData={pageInfo.entourage.parents}
              primaryMale={primaryMale}
              primaryFemale={primaryFemale}
              veil={veil}
              cord={cord}
              candle={candle}
              bestMan={pageInfo.entourage.secondary[0].name}
              matronOfMaids={pageInfo.entourage.secondary[1].name}
            />
            <Location 
              title={pageInfo.location.title}
              paragraphs={pageInfo.location.paragraphs}
              waze={pageInfo.location.waze}
              maps={pageInfo.location.maps}
            />
            <DressCode 
              title={pageInfo.dress.title}
              ladies={pageInfo.dress.code.ladies}
              men={pageInfo.dress.code.men}
            />
            <RSVP 
              title={pageInfo.rsvp.title}
              paragraphs={pageInfo.rsvp.paragraphs}
              guests={pageInfo.guests}
            />
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
