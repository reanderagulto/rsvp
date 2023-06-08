import React from 'react'
import * as cx from './Loading.module.scss'
import loadingImg from '@images/logo.gif'

const Loading = () => {
  return (
    <div className={cx.loading}>
        <img src={loadingImg} alt='fake-loader'/>
    </div>
  )
}

export default Loading

