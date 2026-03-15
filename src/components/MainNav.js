import React from 'react'


const MainNav = () => {
    return (
        <ul className="main_nav">
            <li><a href="https://github.com/wlduddl" target='_blank'><p>GitHub</p></a></li>
            <li><a href="https://open.kakao.com/o/sk8q6hli" target='_blank'> <p>Kakao</p></a></li>
            {/* {
                NAV.map((it, idx) => {
                    return (
                        <li>
                            <a href={it.link}>{it.menu}</a>

                        </li>
                    )
                })
            } */}
        </ul>
    )
}

export default MainNav