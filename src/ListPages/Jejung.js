import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Jejung.scss'

const Jejung = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Jejung Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub01_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <img src={'https://www.dawonstudio.com/images/sub_portfolio/jejung_web.png'} alt="" className='img01' />
                </div>


               
            </div>


        </div>
    )
}

export default Jejung