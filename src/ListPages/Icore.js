import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Icore.scss'


const Icore = () => {


    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Icore Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub10_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
            
                </div>
                <div className="inner_sec subcon">
                    <div className="img">
                        <img src={'https://www.dawonstudio.com/images/sub_portfolio/icore_web.png'} alt="" className='img01' />
                    </div>
                    </div>
            </div>


        </div>
    )
}

export default Icore