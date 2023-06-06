import React, {useState, useEffect} from 'react'
import clsx from 'clsx'

// Assets
import * as cx from './Page.module.scss'

// firebase
import db from '@/firebase-config'

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
import loadingImg from '@images/logo.gif'

import { pageImages } from '@data'

const Page = () => {

  const [guestData, setGuestData] = useState([])
  const [pageInfoData, setPageInfoData] = useState([])
  const [pageInfo, setPageInfo] = useState({})
  const [entourageData, setEntourageData] = useState([])
  const [primaryMale, setPrimaryMale] = useState([])
  const [primaryFemale, setPrimaryFemale] = useState([])
  const [veil, setVeil] = useState([])
  const [candle, setCandle] = useState([])
  const [cord, setCord] = useState([])
  const [soloSponsors, setSoloSponsors] = useState({})
  const [bestMaid, setBestMaid] = useState([])
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection('guestBook').orderBy('last_name', 'desc').onSnapshot(snapshot => {
      setGuestData(
        snapshot.docs.map(doc => (
          {
            id: doc.id, 
            first_name: doc.data().first_name,
            middle_initial: doc.data().middle_initial,
            last_name: doc.data().last_name, 
            gender: doc.data().gender, 
            type: doc.data().type,
            entourage: doc.data().entourage,
            role: doc.data().role,
            rsvp_status: doc.data().rsvp_status,
            email: doc.data().email, 
            title: doc.data().title, 
          }
        ))
      )
    });

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
    setEntourageData(guestData.filter((item) => {
      return item.entourage === 'yes'
    }))    
  }, [guestData])

  useEffect(() => {
    if(entourageData.length > 0){
      setPrimaryMale(entourageData.filter((item) => {
        return item.gender == 'male' && item.role == "Principal Sponsor"
      }))
      
      setPrimaryFemale(entourageData.filter((item) => {
          return item.gender == 'female' && item.role == "Principal Sponsor"
      }))
      
      setVeil(entourageData.filter((item) => {
          return item.role == 'Veil' 
      }))
      
      setCandle(entourageData.filter((item) => {
          return item.role == 'Candle'
      }))
      
      setCord(entourageData.filter((item) => {
          return item.role == 'Cord' 
      }))

      setSoloSponsors({
        ringBearer: entourageData.filter((item) => {
          return item.role == 'Ring Bearer'
        }), 
        coinBearer: entourageData.filter((item) => {
          return item.role == 'Coin Bearer'
        }), 
        bibleBearer: entourageData.filter((item) => {
          return item.role == 'Bible Bearer'
        }), 
        bridesMaid: entourageData.filter((item) => {
          return item.role == 'Bridesmaid'
        }), 
        
      })

      setBestMaid(entourageData.filter((item) => {
        return item.role == 'Best Man' || item.role == 'Matron of Maids'
      }))

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
      
    }
  }, [entourageData, pageInfoData])


  return (
    <>
      {loading == true && 
        <div className={cx.loading}>
          <img src={loadingImg} alt='fake-loader'/>
        </div>
      }
      {loading === false && 
        <div className={cx.wrapper}>
          <Navigation 
            menu={pageInfo.menu.items}
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
                gallery={pageImages.galleryItems}
              />
              <Entourage 
                title={pageInfo.entourage.title}
                parentsData={pageInfo.entourage.parents}
                primaryMale={primaryMale}
                primaryFemale={primaryFemale}
                veil={veil}
                cord={cord}
                candle={candle}
                bestMaid={bestMaid}
                soloSponsors={soloSponsors}
                doggos={[
                  'Mr. Chabi Imperial',
                  'Mr. Dylan Baby Luke Imperial'
                ]}
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
                guests={guestData}
              />
          </main>
          <Footer />
          <div 
            className={cx.footerImage} 
            style={{backgroundImage: `url(${footerImg})`}} 
          />
        </div>
      }
    </>
  )
}

export default Page
