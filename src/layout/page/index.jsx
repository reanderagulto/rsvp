import React from 'react'
import clsx from 'clsx'

// Assets
import * as cx from './Page.module.scss'

// Components
import Navigation from '@components/navigation'
import Banner from '@components/banner'
import Story from '@components/story'
import Entourage from '@components/entourage'
import Location from '@components/location'
import DressCode from '@components/dress'
import RSVP from '@components/rsvp'

const Page = () => {
  return (
    <div>
        <Navigation />
        <main>
            <Banner />
            <Story />
            <Entourage />
            <Location />
            <DressCode />
            <RSVP />
        </main>
    </div>
  )
}

export default Page
