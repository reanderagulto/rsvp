import React, {useState, useEffect} from 'react'
import clsx from 'clsx'

// Assets
import * as cx from './Entourage.module.scss'
import arrow from '@svg/arrow.svg'

// Data
import { pageInfo } from '@data'

const Entourage = () => {

    const [parents, setParents] = useState(false)
    const [principal, setPrincipal] = useState(false)
    const [secondary, setSecondary] = useState(false)

    const handleParents = () => setParents(!parents)
    const handlePrincipal = () => setPrincipal(!principal)
    const handleSecondary = () => setSecondary(!secondary)

    return (
        <section className={clsx(cx.wrapper)} id="info">
            <div className={clsx(cx.container, 'container')}>
                <h2>{pageInfo.entourage.title}</h2>
                <div className={clsx(cx.accordion, 
                    parents === true && cx.active
                )}>
                    <div className={cx.title}>
                        <div>Parents of Bride and Groom</div>
                        <img className={cx.button} src={arrow} alt="arrow" onClick={handleParents}/>
                    </div>
                    <div className={cx.content}>
                        <div className={cx.innerContainer}>
                            
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
                            <div className={cx.flexWrap}>
                            {pageInfo.entourage.principals.map((item, index) => {
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
                            <div className={cx.flexWrap}>
                                {pageInfo.entourage.secondary.map((item, index) => {
                                    return (
                                    <div className={cx.secondaryContainer} key={index}>
                                        <p>
                                            <strong><em>{`${item.role}:`}</em></strong>
                                            <span>{item.name}</span>
                                        </p>
                                    </div>
                                    )
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
