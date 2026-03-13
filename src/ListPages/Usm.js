import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Usm.scss'

import Highlight, { defaultProps } from "prism-react-renderer";

const Usm = () => {

    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Usm Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub07_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub07_01.png'} alt="" className='img01' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub07_02.png'} alt="" className='img02' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub07_03.png'} alt="" className='img03' />
                    </div>



                    <div className="bottom">
                        <h3>{matchId.title}</h3>
                        <p>{matchId.field}</p>
                        <strong>Tools. {matchId.tools}</strong><br />
                        <small>Period. {matchId.period}</small>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Usm