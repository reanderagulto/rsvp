import React, {useState} from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'

// Assets
import * as cx from './RSVP.module.scss'

// Data 
import { pageInfo } from '@data/info'

const RSVP = () => {
  return (
    <section className={cx.wrapper} id="rsvp">
        <div className={clsx(cx.container, 'container')}>
          <h2>{pageInfo.rsvp.title}</h2>
          <div className={cx.content}>
            {pageInfo.rsvp.paragraphs && pageInfo.rsvp.paragraphs.map((item, index) => {
              return (
                <p key={index}>{parse(item)}</p>
              )
            })}
          </div>
          {/* <div className={cx.controlContainer}>
              <input type="text" name="rsvp-search" id="rsvp-search" className={cx.control} placeholder='Last Name'/>
              <div className={cx.resultsContainer} id="results" />
          </div> */}
        </div>  
    </section>
  )
}

export default RSVP
