import React from 'react'
import '../css/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="logo">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + '/assets/img/logo01.svg'} alt="" />
                        </Link>
                    </h1>
                    <h1>
                        <a href="https://open.kakao.com/o/sSuaUfof" target='_blank'>
                            <img src={process.env.PUBLIC_URL + '/assets/img/logo02.svg'} alt="" />
                        </a>
                    </h1>
                </div>
                <p>Service Designer & Front-End Developer</p>

                <div className="contact">
                    <a href="tel:010-7578-8546">+82 10 7578 8546</a>
                    <a href="mailto:kimjay.824@gmail.com">kimjay.824@gmail.com</a>
                </div>
                <div className='copy'>
                    <span>본 페이지는 개인 포트폴리오용으로 제작되었습니다.</span>
                    <span>Chrome PC 화면에 최적화된 홈페이지입니다.</span>
                    <span>© 2022-2024 Jay. All Rights Reserved.</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer