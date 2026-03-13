import React from 'react'
import { useParams } from 'react-router-dom';
import LIST from '../data/List';
import '../css/Sososai.scss'

const Sososai = () => {
    const { id } = useParams()
    const matchId = LIST.find(it => it.id == id);
    return (
        <div className='Sososai Con'>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/assets/img/sub03_00.jpg'} alt="" className='banner' />

                <div className="inner1200 subcon">
                    <h2>{matchId.title}</h2>
                    <p>{matchId.des2}</p>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Project Goal</h2>
                        <p>기업 및 제품의 이미지 전달과 추구하는 이념, 전문성을<br />
                            소비자에게 인식시키기 위한 신규 브랜드 아이덴티티 개발.</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub03_01.png'} className='img01' />
                </div>

                <div className="inner_sec name">
                    <div className="inner1200 subcon">
                        <h2>{matchId.title}</h2>
                        <p>소소사이는 환한 빛이 손틈사이로 햇빛이 비치듯 소소하게 스며든다는 의미를 담고있습니다.<br />
                            텀블러나 와인 등을 간편하게 휴대할 수 있는 친환경 패브릭 브랜드의 특성을 담아 부드럽고 따스하며<br />
                            온화한 이미지를 나타낼 수 있는 네이밍 개발을 진행했습니다.</p>
                    </div>
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Produce Descriptions</h2>
                        <p>최근 패션브랜드들의 비건, 업사이클 등 친환경 패션이 하나의 트렌드로 부상중임.<br />
                            글로벌 브랜드들도 스타일과 친환경 두 가지 키워드로 트렌드를 앞서고 있으며, <br />브랜드 소소사이도
                            에코백의 프리미엄화를 통해 그린 브랜드로 성장하고자 함.</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub03_03.png'} />
                    </div>
                </div>

                <div className="image">
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub03_04.png'} />
                    <img src={process.env.PUBLIC_URL + '/assets/img/sub03_05.png'} />
                </div>

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <h2>Design Concept</h2>
                        <p>일반적으로 생각하는 장바구니 에코백 이미지에서 벗어나<br />
                            에코백 브랜드에 대한 새로운 이미지, 고급화를 통한 패러다임 제시</p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub03_06.png'} />
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/sub03_07.png'} />

                <div className="inner_sec">
                    <div className="inner1200 subcon">
                        <img src={process.env.PUBLIC_URL + '/assets/img/sub03_08.png'} />
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + '/assets/img/sub03_09.png'} />







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

export default Sososai