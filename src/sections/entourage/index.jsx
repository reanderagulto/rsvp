import React, {useState, useEffect} from 'react'
import clsx from 'clsx'

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
    bestMan, 
    matronOfMaids
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
                                    <div className={cx.principal} key={index}>
                                        <h4>{item.position && `${item.position} `}{item.name}</h4>
                                    </div>
                                    )
                                })}
                            </div>
                            <div className={cx.inner}>
                                {primaryFemale && primaryFemale.map((item, index) => {
                                    return (
                                    <div className={cx.principal} key={index}>
                                        <h4>{item.position && `${item.position} `}{item.name}</h4>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
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
                                <p>{bestMan}</p>
                            </div>
                            <div className={cx.inner}>
                                <h3><strong><em>Matron of Honor</em></strong></h3>
                                <p>{matronOfMaids}</p>
                            </div>
                        </div>
                        <div className={cx.innerContainerTight}>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Veil</em></strong></h3>
                                {veil && veil.map((item, index) => {
                                    return (<p key={index}>{item.name}</p>)
                                })}
                            </div>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Candle</em></strong></h3>
                                {candle && candle.map((item, index) => {
                                    return (<p key={index}>{item.name}</p>)
                                })}
                            </div>
                            <div className={cx.innerCenter}>
                                <h3><strong><em>Cord</em></strong></h3>
                                {cord && cord.map((item, index) => {
                                    return (<p key={index}>{item.name}</p>)
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
