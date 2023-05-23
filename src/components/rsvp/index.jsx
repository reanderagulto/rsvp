import React, {useState} from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'

// Assets
import * as cx from './RSVP.module.scss'

// Data 
import { pageInfo } from '@data'

const RSVP = () => {

  const [results, setResults] = useState([])

  const handleChange = (e) => {
    let data = []
    if(e.target.value === ''){
      data = []
    }
    else {
       data = pageInfo.guests.filter((item) => {
        return item.last_name.toLowerCase().match(e.target.value.toLowerCase())
      })
    }
    setResults(data)
  }

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
          <div className={clsx(cx.controlContainer, 'container')}>
              <input 
                type="text"
                name="rsvp-search"
                id="rsvp-search" 
                className={cx.control} 
                placeholder='Last Name'
                onChange={handleChange}
              />
              <div
                className={clsx(cx.resultsContainer, 
                  results.length > 0 && cx.active
                )} 
                id="results"
              >
                  {results.length > 0 && results.map((item, index) => {
                    return (
                      <div key={index}>{item.first_name} {item.last_name}</div>
                    )
                  })}
              </div>
          </div>
        </div>  
    </section>
  )
}

export default RSVP
