import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Ropa.scss'



const Ropa = () => {

    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Ropa Con'>
            <div className="inner">
                <video
                    autoPlay
                    loop
                    muted
                    src='https://ropastudio2023.mycafe24.com/theme/basic/images/main_new3.mp4'
                    className='banner'
                />
                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub14_01.png'} alt="" className='img01' />
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

export default Ropa