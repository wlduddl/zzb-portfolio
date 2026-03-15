import React from 'react'
import { useParams } from 'react-router-dom';
import '../css/Hanla.scss'
import styled from "styled-components";
import LIST from '../data/List';

import { Highlight, themes } from "prism-react-renderer"




const Hanla = () => {

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
                <Route path='/Hanla/*' element={<Hanla />}></Route>
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

    const Hanla = () => {
        return (
            <div className='Hanla'>
                <div className="banner">
                    <img src={process.env.PUBLIC_URL + '/assets/banner03.png'} alt="" />
                    <h2>SEA LIFE BUSAN</h2>
                </div>
    
                <div className="tab sc">
                    <div className="inner">
                        <HanlaTab />
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
    
      export default Hanla

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
        <div className='Hanla Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub13_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>
                <div className="inner_sec subcon">
                    <div className="img">
                        <img src={'https://www.dawonstudio.com/images/sub_portfolio/hanla_web.png'} alt="" className='img01' />
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Hanla