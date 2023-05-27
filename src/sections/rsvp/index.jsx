import React, {useState} from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'

// Assets
import * as cx from './RSVP.module.scss'

// Data 
import { pageInfo } from '@data'

const RSVP = () => {

  const [results, setResults] = useState([])
  const [typed, setTyped] = useState(false)
  const [rsvp, setRsvp] = useState([])

  const handleChange = (e) => {
    let data = []
    if(e.target.value === ''){
      data = []
      setTyped(false)
    }
    else {        
      let re = new RegExp('^' + e.target.value.toLowerCase())
      data = pageInfo.guests.filter((item) => {
        return item.last_name.toLowerCase().match(re)
      })
      if(data.length > 0){
        setTyped(true)
      }
      else {
        setTyped(false)
      }
    }
    setResults(data)
  }

  const handleCheck = (e, name) => {
    if(e.target.checked) {
      rsvp.push(name)
    }      
    else {
      rsvp.splice(rsvp.indexOf(name), 1)
    }
      
    console.log(rsvp)
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
                className={clsx(cx.control, typed && cx.active)} 
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
                      <div key={index}>
                        <input 
                          type="checkbox" 
                          className={cx.checkbox} 
                          onClick={
                            (e) => { 
                              handleCheck(e, `${item.first_name.toLowerCase()}-${item.last_name.toLowerCase()}`)
                            }
                          }/>
                        <span>{item.first_name} {item.last_name}</span>
                      </div>
                    )
                  })}
              </div>
          </div>
        </div>  
    </section>
  )
}

export default RSVP
