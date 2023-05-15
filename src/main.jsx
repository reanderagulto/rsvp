import React from 'react'
import ReactDOM from 'react-dom/client'
import SplashScreen from './layout/splash'
import './index.css'
import '@assets/fonts/Gistesy/gistesy.ttf'
import '@assets/fonts/TAN/tan-angelton.ttf'
import '@assets/fonts/OpenSauce/opensauce-regular.ttf'
import '@assets/fonts/OpenSauce/opensauce-bold.ttf'
import Page from '@layout/page'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SplashScreen /> */}
    <Page />
  </React.StrictMode>,
)
