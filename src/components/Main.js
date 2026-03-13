import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LIST from '../data/List.js'
import Footer from './Footer.js'
import AOS from "aos";
import "aos/dist/aos.css";
import '../css/Main.scss'

const Main = () => {
    useEffect(() => {
        AOS.init({});
    }, [])
    return (
        <div className='MainWrap'>
            <main className='Main'>
                <div className="MainInner">
                    <ul className="list">
                        {
                            LIST
                                .map((it, idx) => {
                                    return (
                                        <li key={idx} data-aos="fade-up" data-aos-delay={100 * idx} data-aos-duration="150"  >
                                            <Link to={it.link}>
                                                <img src={process.env.PUBLIC_URL + `/assets/img/main_0${idx + 1}.png`} alt="" />
                                            </Link>
                                            <div className="thumbdes">
                                                <h2>{it.title}</h2>
                                                <p>{it.field}</p>
                                            </div>
                                        </li>
                                    )
                                }).reverse()
                        }
                    </ul>
                </div>
            </main >
            <Footer />
        </div >
    )
}

export default Main