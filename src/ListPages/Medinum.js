import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Medinum.scss'

const Medinum = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Medinum Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub02_01.jpg'} alt="" className='img01' />
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

export default Medinum