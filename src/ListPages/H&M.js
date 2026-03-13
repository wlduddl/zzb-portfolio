import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/HM.scss'


const HM = () => {


    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='HM Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub10_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub10_01.png'} alt="" className='img01' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub10_02.png'} alt="" className='img02' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub10_03.png'} alt="" className='img03' />
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

export default HM