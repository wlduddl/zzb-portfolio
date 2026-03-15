import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/WSP.scss'

const WSP = () => {

    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='WSP Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub08_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <video src="http://wsp2026.cafe24.com/resources/videos/sub01.mp4" autoPlay loop muted className='video' />

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

export default WSP