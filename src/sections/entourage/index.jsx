import React, {useState, useEffect} from 'react'
import clsx from 'clsx'
import PetsIcon from '@mui/icons-material/Pets';

// Assets
import * as cx from './Entourage.module.scss'
import arrow from '@svg/arrow.svg'

const Entourage = ({
    title, 
    parentsData,
    primaryMale,
    primaryFemale, 
    veil,
    cord,
    candle,
    bestMaid,
    soloSponsors,
    doggos,
}) => {

    const [parents, setParents] = useState(false)
    const [principal, setPrincipal] = useState(false)
    const [secondary, setSecondary] = useState(false)

    const handleParents = () => setParents(!parents)
    const handlePrincipal = () => setPrincipal(!principal)
    const handleSecondary = () => setSecondary(!secondary)

    return (
        <section className={clsx(cx.wrapper)} id="info">
            <div className={clsx(cx.container, 'container')}>
                <h2>{title}</h2>
                {/* Parents */}
                <div className={clsx(cx.accordion, 
                    parents === true && cx.active
                )}>
                    <div className={cx.title}>
                        <div>Parents of Bride and Groom</div>
                        <img className={cx.button} src={arrow} alt="arrow" onClick={handleParents}/>
                    </div>
                    <div className={cx.content}>
                        <div className={cx.innerContainer}>
                            <div className={cx.inner}>
                                <h3><strong><em>Bride</em></strong></h3>
                                <p>{parentsData.bride.father}</p>
                                <p>{parentsData.bride.mother}</p>
                            </div>
                            <div className={cx.inner}>
                                <h3><strong><em>Groom</em></strong></h3>
                                <p>{parentsData.groom.father}</p>
                                <p>{parentsData.groom.mother}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Primary Sponsors */}
                <div className={clsx(cx.accordion, 
                    principal === true && cx.active
                )}>
                    <div className={cx.title}>
                        <div>Principal Sponsors</div>
                        <img className={cx.button} src={arrow} alt="arrow" onClick={handlePrincipal}/>
                    </div>
                    <div className={cx.content}>
                        <div className={cx.innerContainer}>
                            <div className={cx.inner}>
                                {primaryMale && primaryMale.map((item, index) => {
                                    return (
                                    <div className={cx.principal} key={index} id={item.id}>
                                        <h4>{item.title && `${item.title}. `}{item.first_name} {item.middle_initial}. {item.last_name}</h4>
                                    </div>
                                    )
                                })}
                            </div>
                            <div className={cx.inner}>
                                {primaryFemale && primaryFemale.map((item, index) => {
                                    return (
                                    <div className={cx.principal} key={index} id={item.id} >
                                        <h4>{item.title && `${item.title}. `}{item.first_name} {item.middle_initial}. {item.last_name}</h4>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Secondary Sponsors */}
                <div className={clsx(cx.accordion, 
                    secondary === true && cx.active
                )}>
                    <div className={cx.title}>
                        <div>Secondary Sponsors</div>
                        <img className={cx.button} src={arrow} alt="arrow" onClick={handleSecondary}/>
                    </div>
                    <div className={cx.content}>
                        <div className={cx.innerContainer}>
                            <div className={cx.inner}>
                                <h3><strong><em>Best Man</em></strong></h3>
                                <p>{`${bestMaid[0].title}. ${bestMaid[0].first_name} ${bestMaid[0].last_name}`}</p>
                            </div>
                            <div className={cx.inner}>
                                <h3><strong><em>Matron of Honor</em></strong></h3>
                                <p>{`${bestMaid[1].title}. ${bestMaid[1].first_name} ${bestMaid[1].last_name}`}</p>
                            </div>
                        </div>
                        <div className={cx.innerContainerTight}>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Veil</em></strong></h3>
                                {veil && veil.map((item, index) => {
                                    return (<p id={item.id} key={index}>{item.first_name} {item.last_name}</p>)
                                })}
                            </div>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Candle</em></strong></h3>
                                {candle && candle.map((item, index) => {
                                    return (<p id={item.id} key={index}>{item.first_name} {item.last_name}</p>)
                                })}
                            </div>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Cord</em></strong></h3>
                                {cord && cord.map((item, index) => {
                                    return (<p id={item.id} key={index}>{item.first_name} {item.last_name}</p>)
                                })}
                            </div>
                        </div>
                        <div className={cx.innerContainerTight}>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Ring Bearer</em></strong></h3>
                                {soloSponsors.ringBearer && soloSponsors.ringBearer.map((item, index) => {
                                    return (<p id={item.id} key={index}>{item.first_name} {item.last_name}</p>)
                                })}
                            </div>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Coin Bearer</em></strong></h3>
                                {soloSponsors.coinBearer && soloSponsors.coinBearer.map((item, index) => {
                                    return (<p id={item.id} key={index}>{item.first_name} {item.last_name}</p>)
                                })}
                            </div>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Bible Bearer</em></strong></h3>
                                {soloSponsors.bibleBearer && soloSponsors.bibleBearer.map((item, index) => {
                                    return (<p id={item.id} key={index}>{item.first_name} {item.last_name}</p>)
                                })}
                            </div>
                        </div>
                        <div className={cx.innerContainerTight}>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Bridesmaid</em></strong></h3>
                                {soloSponsors.bridesMaid && soloSponsors.bridesMaid.map((item, index) => {
                                    return (<p id={item.id} key={index}>{item.first_name} {item.last_name}</p>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Entourage
