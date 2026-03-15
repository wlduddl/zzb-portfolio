import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Das.scss'



const Das = () => {

    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Das Con'>
            <div className="inner">
                <video src="https://das2024.mycafe24.com/theme/basic/images/main_sec_02_bg2.mp4" autoPlay loop muted className='banner' />
                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub11_01.gif'} alt="" className='img01' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub11_02.png'} alt="" className='img02' />
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub11_03.png'} alt="" className='img03' />
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

export default Das