import React from 'react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav'
import '../css/Header.scss'

const Header = () => {
    return (
        <header className="Header">
            <div className="gnb">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/img/logo01.svg'} alt="" />
                    </Link>
                </h1>
                <div className="intro">
                    <p>Hello,👋 I'm Jiyoung.<br />
                        I’m a <span>Web Designer & Publisher.</span><br />
                        I turn ideas into responsive and effective web experiences through thoughtful design and precise publishing.
                    </p>
                </div>
                <nav>
                    <MainNav />
                </nav>
            </div>

        </header>
    )
}

export default Header