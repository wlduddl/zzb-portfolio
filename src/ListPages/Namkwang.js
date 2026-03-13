import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Namkwang.scss'

const Namkwang = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Namkwang Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub04_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>


                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>디자인 개발전략</h2>
                        <p>기업 및 제품 내외부 전반 리서치를 통한 Key Question 및 인사이트 도출을<br />
                            바탕으로 한 브랜드 이미지 경쟁력 강화를 위한 패키지 디자인 솔루션 및 전략 제안</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub04_01.png'} className='img01' />
                </div>

                <div className="inner_sec strategy">
                    <div className="inner1200 subcon">
                        <h2>Design Concept</h2>
                        <p>전통적 이미지로 보수적인 이미지의 비율이 높은 국내 제품군들 중에서 <br />경쟁력 확보를 위해
                            손그림을 활용한 패키지 디자인 개발로 차별적인 브랜드 이미지 확보
                        </p>
                    </div>
                </div>

                <div className="inner_sec ">
                    <div className="inner1200 subcon">
                        <h2>Design Analysis</h2>
                        <p>동일 및 유사제품의 패키지 디자인 및 세트구성 상품의 디자인 사례를<br />수집 및 분석하여 패키지 디자인 대표 키워드 도출</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub04_03.png'} />
                    </div>
                </div>
                <div className="inner_sec develop01">
                    <div className="inner1200 subcon">
                        <h2>Design Develop</h2>
                        <p>감천문화마을의 전경을 라인 일러스트로 표현하고, 블루 컬러의 포인트를 활용하여<br />시원한 부산 바다의 이미지, 수산제품의 패키지를 간접적으로 연상할 수 있도록 표현함.</p>
                    </div>
                </div>
                <div className="inner_sec develop02">
                    <div className="inner1200 subcon">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub04_05.png'} />
                    </div>
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

export default Namkwang