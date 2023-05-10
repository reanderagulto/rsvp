import React from 'react'
import clsx from 'clsx'

// Assets
import * as cx from './Page.module.scss'

// Components
import Navigation from '@components/navigation'
import Banner from '@components/banner'
import Story from '@components/story'

const Page = () => {
  return (
    <div>
        <Navigation />
        <main>
            <Banner />
            <Story />
        </main>
    </div>
  )
}

export default Page
