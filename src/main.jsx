import React from 'react'
import ReactDOM from 'react-dom/client'
import SplashScreen from './layout/splash'
import './index.css'
import Page from '@layout/page'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SplashScreen /> */}
    <Page />
  </React.StrictMode>,
)
