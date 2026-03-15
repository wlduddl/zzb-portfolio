import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/DenQ.scss'

const DenQ = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='DenQ Con' >
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub05_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <img src={'https://www.dawonstudio.com/images/sub_portfolio/denq_web.jpg'} />




                <div className="inner1200 subcon">
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

export default DenQ