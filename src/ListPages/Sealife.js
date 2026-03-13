import React from 'react'
import { useParams } from 'react-router-dom';
import '../css/Sealife.scss'
import styled from "styled-components";
import LIST from '../data/List';

import { Highlight, themes } from "prism-react-renderer"




const Sealife = () => {

    const AppCode =
        `

    const App = () => {
        return (
          <>
            <div className='Wrapper'>
              <Header />
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/show' element={<Show />}></Route>
                <Route path='/ticket' element={<Ticket />}></Route>
                <Route path='/sealife/*' element={<Sealife />}></Route>
              </Routes>
      
      
              <Footer />
              <ToTop />
            </div>
          </>
        )
      }
      
      export default App

    `;

    const MainNavCode =
        `

    const MainNav = () => {
        return (
            <ul className="main_nav">{
                NAV.map((it, idx) => {
                    return (
                        <li><Link to={it.link}>{it.menu}</Link></li>
                    )
                })
            }
            </ul>
        )
      }
      
      export default MainNav  

    `;

    const SubPageCode =
        `

    const Sealife = () => {
        return (
            <div className='Sealife'>
                <div className="banner">
                    <img src={process.env.PUBLIC_URL + '/assets/banner03.png'} alt="" />
                    <h2>SEA LIFE BUSAN</h2>
                </div>
    
                <div className="tab sc">
                    <div className="inner">
                        <SealifeTab />
                        <Routes>
                            <Route path='/' element={<Location />} />
                            <Route path='location' element={<Location />} />
                            <Route path='time' element={<Time />} />
                            <Route path='facility' element={<Facility />} />
                        </Routes>
                    </div>
                </div>
    
    
            </div>
        )
      }
    
      export default Sealife

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
        <div className='Sealife Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub13_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub13_01.png'} alt="" className='img01' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub13_02.gif'} alt="" className='img02' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub13_03.png'} alt="" className='img03' />
                    </div>


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

                    <h3>SubPage.js</h3>
                    <strong>Router Dom 으로 구성한 SubPage 내부에 <br />Router를 추가로 연결해 Tab Menu를 구현함.</strong>
                    <div className="code">
                        <div className='code_highlight'>
                            <Highlight  theme={themes.shadesOfPurple} code={SubPageCode} language="jsx" >
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

export default Sealife