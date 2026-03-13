import React from 'react'


const MainNav = () => {
    return (
        <ul className="main_nav">
            <li><a href="https://github.com/Kim-Jaay" target='_blank'><p>GitHub</p></a></li>
            <li><a href="https://open.kakao.com/o/sSuaUfof" target='_blank'> <p>Kakao</p></a></li>
            <li><a href={process.env.PUBLIC_URL + '/assets/img/Resume_KimJuHyun.pdf'} download="Resume_김주현"><p>Resume</p> </a></li>
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