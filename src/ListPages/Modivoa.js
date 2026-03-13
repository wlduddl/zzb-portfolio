import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Modivoa.scss'

const Modivoa = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Modivoa Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub01_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Design Development Process</h2>
                        <p>기업이 직면한 문제를 진단하고 이를 디자인을 통해<br />
                            체계적으로 해결하는 디자인 컨설팅 서비스 진행</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub01_01.png'} alt="" className='img01' />
                </div>


                <div className="inner_sec over">
                    <div className="inner1200 subcon">
                        <h2>What’s MODIVOA?</h2>
                        <ul>
                            <li> MS 기반의 서비스로 편리한 출석관리 환경</li>
                            <li> 국내 학사데이터 연동을 통해 실시간 수업환경 제공</li>
                            <li> 국내대학 특화 기능 제공</li>
                            <li> 타 서비스와 비교하여 부담없는 이용요금</li>
                            <li> 손쉬운 화상강의 개설 및 참여가능한 에듀솔루션 서비스</li>
                        </ul>
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Brand Concept</h2>
                        <p>다양한 측면을 검토하여 브랜드의 정체성이 될 핵심가치를 도출하고<br />
                            동종기업의 이미지와 컬러, 트렌드를 반영하여 차별화된 컨셉 수립</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub01_03.png'} />
                    </div>
                </div>

                <div className="inner_sec idea">
                    <div className="inner1200 subcon">
                        <h2>Embodying IDEA</h2>
                        <p>다양한 측면을 검토하여 브랜드의 정체성이 될 핵심가치를 도출하고<br />
                            동종기업의 이미지와 컬러, 트렌드를 반영하여 차별화된 컨셉 수립</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub01_04.png'} />
                    </div>
                </div>


                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub01_05.png'} />
                    </div>
                </div>

                <div className="inner_sec develp01">
                    <div className="inner1200 subcon">
                        <h2>Suggestion</h2>
                        <p>채도높은 컬러를 사용하여 보다 더 혁신적이며 진취적인 기업 이미지를 표현함.<br />
                            서비스 특성상 웹, 모바일 화면에서 유저와 브랜드의 접점이 일어나는 것을 고려하여<br />
                            모바일 디바이스 에서도 뚜렷하게 브랜드를 인식할 수있도록 간결하고 심플한 이미지로 표현함.</p>
                    </div>
                </div>
                <div className="inner_sec develp02">
                    <div className="inner1200 subcon">
                        <h2>Suggestion</h2>
                        <p>서비스의 고등학교 버전으로 경쾌한 민트컬러를 사용하여 활기차고<br />
                            산뜻한 이미지를 표현함. 간결하고 친근한 이미지로 표현하여 기억하기 쉽고 <br />
                            사용자로 하여금 서비스 이용의 문턱을 낮출 수 있을것으로 기대함.</p>
                    </div>
                </div>




                <img src={process.env.PUBLIC_URL + '/assets/img/sub01_08.png'} />







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

export default Modivoa