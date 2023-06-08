import React, {useState, useEffect} from 'react'
import * as cx from './Splash.module.scss'
import clsx from 'clsx'
import parse from 'html-react-parser'

// Images
import header from '@images/header.png'
import footer from '@images/footer.png'
import bigLogo from '@images/logo.png'

// Data
import db from '@/firebase-config'
import Loading from '@components/loading'

const SplashScreen = () => {
  const [pageInfoData, setPageInfoData] = useState([])
  const [pageInfo, setPageInfo] = useState({})

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection('pageInfo').onSnapshot(snapshot => {
      setPageInfoData(
        snapshot.docs.map(doc => (
          {
            id: doc.id, 
            data: doc.data()
          }
        ))
      )
    });
  }, [])

  useEffect(() => {
    let data = {}
    pageInfoData.forEach(item => {
      Object.assign(data, {
        [item.id]: item.data
      })
    });
    setPageInfo(data)

    setTimeout(function() {
      setLoading(false)
    }, 1000);

  }, [pageInfoData])

  return (
    <>
    {loading == true && 
      <Loading />
    }
    {loading == false &&
      <section className={cx.main}>
          <div className={clsx(cx.header, cx.headings)} style={{backgroundImage: `url(${header})`}} />
          <div className={cx.wrapper}>
            <div className={cx.content}>
              <img src={bigLogo} alt="Jeni x Reander Nuptial" />
              <h1>{pageInfo.banner.title}</h1>
              <h4>{parse(pageInfo.banner.coming_soon)}</h4>
            </div>
          </div>
          <div className={clsx(cx.footer, cx.headings)} style={{backgroundImage: `url(${footer})`}}>
        </div>
      </section>
    }
    </>
  )
}

export default SplashScreen
