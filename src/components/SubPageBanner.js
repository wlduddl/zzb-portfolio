import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../css/SubPageBanner.scss'
import LIST from '../data/List';


import Modivoa from '../ListPages/Modivoa';
import Oncheon from '../ListPages/Oncheon';
import Sososai from '../ListPages/Sososai';
import Prime from '../ListPages/Prime';
import Songaree from '../ListPages/Songaree';
import Namkwang from '../ListPages/Namkwang';
import Usm from '../ListPages/Usm';
import Tamburins from '../ListPages/Tamburins';
import Nasa from '../ListPages/Nasa';
import HM from '../ListPages/H&M';
import Dragon from '../ListPages/Dragon';
import Louvre from '../ListPages/Louvre';
import Sealife from '../ListPages/Sealife'
import Cos from '../ListPages/Cos';
import Ami from '../ListPages/Ami';
import Achromat from '../ListPages/Achromat';


const SubPageBanner = () => {
    const navigate = useNavigate();
    const backBtn = () => { navigate(-1); }
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);


    const LINK = [
        { id: 1, con: <Modivoa /> },
        { id: 2, con: <Oncheon /> },
        { id: 3, con: <Sososai /> },
        { id: 4, con: <Namkwang /> },
        { id: 5, con: <Songaree /> },
        { id: 6, con: <Prime /> },
        { id: 7, con: <Usm /> },
        { id: 8, con: <Tamburins /> },
        { id: 9, con: <Nasa /> },
        { id: 10, con: <HM /> },
        { id: 11, con: <Dragon /> },
        { id: 12, con: <Louvre /> },
        { id: 13, con: <Sealife /> },
        { id: 14, con: <Cos /> },
        { id: 15, con: <Ami /> },
        { id: 16, con: <Achromat /> }
    ]



    return (
        <div className='SubBanner'>
            <div className="inner">
                <div className="inner1200">
                    <div className='Banner'>
                        <div className="button">
                            {
                                matchId.outlink
                                    ?
                                    <a href={matchId.outlink} target='_blank' className={`btn${matchId.id}`}  >View Page</a>
                                    : null
                            }
                            {
                                matchId.github
                                    ?
                                    <a href={matchId.github} target='_blank' className='git'  >View Code</a>
                                    : null
                            }

                            <i className="xi-close" onClick={backBtn}></i>
                        </div>

                        <div className="con">
                            <div>
                                <h2>{matchId.title}</h2>
                                <p>{matchId.field}</p>
                            </div>

                            <div>
                                <span>{matchId.tools}</span>
                                <p>{matchId.des1}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='SubContent'>
                {
                    LINK[id - 1].con
                }
            </div>


        </div >
    )
}

export default SubPageBanner