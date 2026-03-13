import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Songaree.scss'

const Songaree = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Songaree Con' >
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub05_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Design Consulting Process</h2>
                        <p>기업의 실질적인 경쟁력 증대와 지속 가능한<br />브랜드 가치를 제고할 수 있는 디자인 가이드 제안</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub05_01.png'} className='img01' />
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Project Goal</h2>
                        <p>디자인 시스템을 활용한 패키지 디자인 개발로 제품의 식별력과 사용성<br />
                            개선을 통해 기업과 제품에대한 소비자의 긍정도 향상 및 경쟁력 강화</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub05_02.png'} className='img02' />
                </div>

                <div className="inner_sec iot">
                    <div className="inner1200 subcon">
                        <h2>Songaree Baby IoT</h2>
                        <p>의료진과 긴밀한 초연결이 필요한 호흡기 질환 환자나 갓난아기의 산소포화도 정보를<br />
                            무선으로 보호자의 스마트폰 어플리케이션으로 전달하는 시스템.</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub05_03.png'} className='img02' />
                    </div>
                </div>

                <div className="inner_sec needs">
                    <div className="inner1200 subcon">
                        <h2>Client Needs</h2>
                        <p>메디컬 제품 특성상 모던하고 심플한 디자인으로 전문성과 신뢰성을 표현하고 각 가정에 보급되어있는<br />
                            구급상자처럼 다수의 사용자가 자연스럽게 사용할 것을 권장 및 유도하는 패키지 디자인 필요</p>
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Persona & Journey Map</h2>
                        <p>영아 돌연사 예방을 위해 송아리베이비 IoT 제품을 사용하는 신생아-유아 까지의 자녀를 둔<br />
                            부모를 가상의 페르소나로 설정하여 현재 패키지 사용과정을 블루프린트 및 고객여정지도로 작성</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub05_05.png'} />
                    </div>
                </div>
                <div className="inner_sec strategy">
                    <div className="inner1200 subcon">
                        <h2>Design Strategy</h2>
                        <p>자사, 업계, 고객, 경쟁사 등 내외부 환경 전반 리서치를 통한 Key Question 및 인사이트<br />
                            도출을 통한 브랜드 이미지 및 경쟁력 강화를 위한 패키지 디자인 전략 제안</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub05_06.png'} />
                    </div>
                </div>
                <div className="inner_sec develop01">
                    <div className="inner1200 subcon">
                        <h2>Suggestion</h2>
                        <p>송아리베이비의 브랜드 시그니처 컬러인 소중하고 고귀함을 표현한 <br />
                            퍼플컬러를 메인으로 브랜드 이미지를 각인시켰으며, 제품의 이미지를 커버에 드러내어 <br />
                            사용자에게 직관적으로 전달할 수 있도록 디자인 함.</p>
                    </div>
                </div>
                <div className="inner_sec develop02">
                    <div className="inner1200 subcon">
                        <h2>Suggestion</h2>
                        <p>패키지 내부에 트레이싱지 삽지를 활용하여 제품의 <br />
                            탄생배경 및 스토리를 사용자에게 보여줄 수 있도록함. </p>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/sub05_09.png'} />












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

export default Songaree