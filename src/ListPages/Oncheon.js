import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Oncheon.scss'

const Oncheon = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Oncheon Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Design Development Process</h2>
                        <p>체계적 디자인 프로세스(개선방향확립, 디자인, 제작, 검증)<br />를 통한 패키지 개발로 제품의 긍정도를 향상시킴 </p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub02_01.png'} className='img01' />
                </div>

                <div className="inner_sec overview">
                    <div className="inner1200 subcon">
                        <h2>기업현황</h2>
                        <p>1960년 온천시장 시작된 55년 전통기업으로 최고급 품질의 제품을 생산중이나, <br />브랜도 인지도 저조로 국내외 홍보성과를 위한 장기점 관점의 신규 패키지 개발이 필요함.</p>
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>제품 경쟁력 분석</h2>
                        <p>고급 원재료를 사용하는 제품 특성과 간편하게 제조해서 먹을 수 있는 제조방식의 장점을
                            강조할 수 있는 <br />포장디자인 전략을 통해 어묵 시장과 레토르트 제품 시장에 동시 진입하여 매출 증대를 목표로 함</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub02_03.png'} />
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_04.png'} />
                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>디자인 개발을 통한 기대효과</h2>
                        <p>포장디자인의 일체감을 조성하여 확고한 브랜드 정립을 통해 지속적인 기업 성장환경 조성<br />
                            브랜드 경쟁력 강화를 통해 매출증대 및 제품의 긍정도를 향상시킴 </p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub02_05.png'} />
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_06.png'} />
                <img src={process.env.PUBLIC_URL + '/assets/img/sub02_07.png'} />
                <div className='image'>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub02_08.png'} />
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub02_09.png'} />
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



        </div >
    )
}

export default Oncheon