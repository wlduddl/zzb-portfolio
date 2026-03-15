import React from 'react'
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import LIST from '../data/List';
import '../css/Patox.scss'

import { Highlight, themes } from "prism-react-renderer"


const Patox = () => {
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
                            Patox
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
        <div className='Patox Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub12_00.jpg'} alt="" className='banner' />
                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                   
                </div>
                <div className="inner_sec subcon">
                    <div className="img">
                        <img src={'https://www.dawonstudio.com/imageView/2156?file_name=patox_web.jpg'} alt="" className='img01' />
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Patox