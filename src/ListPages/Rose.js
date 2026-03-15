import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Rose.scss'
const Rose = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (

        <div className='Rose Con'>
            <div className="inner">
                <div className="inner_sec">
                    <img src='https://dawonstudio.com/imageView/1972?file_name=%EB%A1%9C%EC%A6%88%EB%9E%A9_%EC%9B%B9%20%EB%B3%B5%EC%82%AC.webp' alt="" className='img01' />
                </div>



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

export default Rose