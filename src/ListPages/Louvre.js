import React from 'react'
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import LIST from '../data/List';
import '../css/Louvre.scss'

import { Highlight, themes } from "prism-react-renderer"


const Louvre = () => {
    const AppCode =
        `

        const App = () => {
            return (
              <Wrapper>
                <Header />
                <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/Explore' element={<Explore />} />
                  <Route path='/What' element={<What />} />
                  <Route path='/Place' element={<Place />} />
                </Routes>
                <Footer />
                <Top />
              </Wrapper>
            )
          }
          
          export default App;

        `;

    const MainVisual =
        `

        const MainVisual = () => {
            return (
                <section className="MainVisual">
                    <Swiper className='MainSlider'
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        effect={"fade"}
                        modules={[Autoplay, EffectFade]}>
                        {
                            MainIMG.map((m_i, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + slide_0{idx + 1}.png} alt="" />
                                        </figure>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <Link to="/explore" >BUY YOUR TICKET</Link>
                    <div className="slogan">
                        <h2>
                            STEP<br />
                            <span>into</span> THE<br />
                            MUSÉE DE<br />
                            LOUVRE
                        </h2>
                        <img src={process.env.PUBLIC_URL + '/assets/images/Ellipse.png'} alt="" />
        
                    </div>
        
        
                </section>
            )
        }
        
        export default MainVisual

        `;



    const MainNavCode =
        `
        
        const NAVLINK = [
            { content: 'EXPLORE', link: '/Explore' },
            { content: 'WHAT’S ON', link: '/What' },
            { content: 'THE PLACE', link: '/Place' },
        ]
        
        const NavMenu = () => {
            return (
                <>
        
                    <ul>{
                        NAVLINK.map((it, idx) => {
                            return (
                                <li>
                                    <NavLink to={it.link}>{it.content}</NavLink>
                                </li>
                            )
                        })
                    }</ul>
        
        
                </>
            )
        }
        
        export default NavMenu
        
        `;

    const Pre = styled.pre
        `
      text-align: left;
      margin: 1em 0;
      padding: 0.5em;
      overflow: scroll;
    `;




    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Louvre Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub12_00.jpg'} alt="" className='banner' />
                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub12_01.png'} alt="" className='img01' />
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub12_02.png'} alt="" className='img02' />


                    <h2>Check the Code : React</h2>
                    <p>React Library 활용하여 전체 페이지 구축 <br />
                        Router Dom 사용하여 서브페이지 구성</p>

                    <h3>App.js</h3>
                    <strong>메인페이지와 서브페이지를 Router Dom 으로 연결하여 구성함.</strong>
                    <div className="code">
                        <div className='code_highlight'>
                            <Highlight  theme={themes.shadesOfPurple} code={AppCode} language="jsx" >
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <Pre className={className} style={style}>
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({ line, key: i })}>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({ token, key })} />
                                                ))}
                                            </div>
                                        ))}
                                    </Pre>
                                )}
                            </Highlight>
                        </div>
                    </div>

                    <h3>MainVisual.js</h3>
                    <strong>메인페이지 메인비주얼 슬라이드를 Swiper를 사용하여 구현함.<br />
                        메인 슬라이드 이미지 나열은 React Map 함수를 사용함.</strong>
                    <div className="code">
                        <div className='code_highlight'>
                            <Highlight  theme={themes.shadesOfPurple} code={MainVisual} language="jsx" >
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <Pre className={className} style={style}>
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({ line, key: i })}>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({ token, key })} />
                                                ))}
                                            </div>
                                        ))}
                                    </Pre>
                                )}
                            </Highlight>
                        </div>
                    </div>

                    <h3>MainNav.js</h3>
                    <strong>상단 메인 Gnb Nav 데이터를 만들어 React Map함수로 구현함.</strong>
                    <div className="code">
                        <div className='code_highlight'>
                            <Highlight  theme={themes.shadesOfPurple} code={MainNavCode} language="jsx" >
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <Pre className={className} style={style}>
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({ line, key: i })}>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({ token, key })} />
                                                ))}
                                            </div>
                                        ))}
                                    </Pre>
                                )}
                            </Highlight>
                        </div>
                    </div>


                    <div className="bottom">
                        <h3>{matchId.title}</h3>
                        <p>{matchId.field}</p>
                        <strong>Tools. {matchId.tools}</strong><br />
                        <small>Period. {matchId.period}</small>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Louvre