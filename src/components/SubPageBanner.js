import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import '../css/SubPageBanner.scss'
import LIST from '../data/List';

import Jejung from '../ListPages/Jejung';
import Medinum from '../ListPages/Medinum';
import Eunha from '../ListPages/Eunha';
import Rose from '../ListPages/Rose';
import DenQ from '../ListPages/DenQ';
import Mssox from '../ListPages/Mssox';
import Ani from '../ListPages/Ani';
import WSP from '../ListPages/WSP';
import Hanbit from '../ListPages/Hanbit';
import Icore from '../ListPages/Icore';
import Das from '../ListPages/Das';
import Patox from '../ListPages/Patox';
import Hanla from '../ListPages/Hanla'
import Ropa from '../ListPages/Ropa';
import Ami from '../ListPages/Ami';
import Achromat from '../ListPages/Achromat';

const SubPageBanner = () => {
    const navigate = useNavigate();
    const backBtn = () => { navigate(-1); }
    const { id } = useParams()
    const matchId = LIST.find(it => it.id === Number(id));

    const LINK = [
        { id: 1, con: <Jejung /> },
        { id: 2, con: <Medinum /> },
        { id: 3, con: <Eunha /> },
        { id: 4, con: <Mssox /> },
        { id: 5, con: <DenQ /> },
        { id: 6, con: <Rose /> },
        { id: 7, con: <Ani /> },
        { id: 8, con: <WSP /> },
        { id: 9, con: <Hanbit /> },
        { id: 10, con: <Icore /> },
        { id: 11, con: <Das /> },
        { id: 12, con: <Patox /> },
        { id: 13, con: <Hanla /> },
        { id: 14, con: <Ropa /> },
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
                                matchId?.outlink
                                    ? <a href={matchId.outlink} target='_blank' rel="noreferrer" className={`btn${matchId.id}`}>View Page</a>
                                    : null
                            }
                            {
                                matchId?.github
                                    ? <a href={matchId.github} target='_blank' rel="noreferrer" className='git'>View Code</a>
                                    : null
                            }

                            <button type="button" className="close_btn" onClick={backBtn} aria-label="닫기">
                                <IoClose />
                            </button>
                        </div>

                        <div className="con">
                            <div>
                                <h2>{matchId?.title}</h2>
                                <p>{matchId?.field}</p>
                            </div>

                            <div>
                                <span>{matchId?.tools}</span>
                                <p>{matchId?.des1}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='SubContent'>
                {LINK[Number(id) - 1]?.con}
            </div>
        </div >
    )
}

export default SubPageBanner