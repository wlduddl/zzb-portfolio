import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Prime.scss'
const Prime = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (

        <div className='Prime Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub06_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>더 건강한 장년층을 위해</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Service Design Development Process</h2>
                        <p>기업이 직면한 문제를 진단하고 이를 디자인을 통해<br />
                            체계적으로 해결하는 디자인 컨설팅 서비스 진행</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub06_01.png'} alt="" className='img01' />
                </div>


                <div className="inner_sec charts">
                    <div className="inner1200 subcon">
                        <h2>Target Selection : New Silver Generation</h2>
                        <p>평균 수명이 늘어남에 따라 65세 이상의 고령인구도 해마다 늘어남.<br />
                            현재 고령인구 중에서도 실버세대와 뉴 실버세대로 나뉨.</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_02.png'} />
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Satisfaction Survey</h2>
                        <p>사용자의 현재 서비스에 대한 만족도와 요구사항에 대해 사전에 조사하여<br />
                            신규 서비스의 기획과 사용자에게 효과적인 서비스 개발을 촉진</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_03.png'} />
                    </div>
                </div>

                <div className="inner_sec blueprints">
                    <div className="inner1200 subcon">
                        <h2>Service BluePrints & User Journey Map</h2>
                        <p>프라임 휘트니스 이용고객 동행관찰 및 휘트니스 센터 <br />이용 동행관찰법 조사내용 기반 블루프린트, 여정지도 작성</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_04.png'} />
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Issue Keywords</h2>
                        <p>고객 만족도 설문과 이해관계자 인터뷰를 통한 <br />핵심키워드 도출 및 분석을 통해 해결방안 제시</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_05.png'} />
                    </div>
                </div>

                <div className="inner_sec keyidea">
                    <div className="inner1200 subcon">
                        <h2>Design Suggestion</h2>
                        <p>해결방안 키워드와 관련된 서비스 디자인 제안</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_06.png'} />
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Pop Up Class : 오늘은 내가 전문가</h2>
                        <p>프라임 휘트니스 고객들을 대상으로 진행하는 팝업클래스 프로그램<br />
                            휘트니스 센터에서 혼자 운동하는 사람들을 겨냥해 팝업 클래스 개최,<br />
                            운동을 도와주면서 고객 간 커뮤니티를 형성하고 활발한 분위기 조성</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub06_07.png'} alt="" />
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

export default Prime