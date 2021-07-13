import React from 'react'
import {Row, Col} from "react-bootstrap"
import {BsArrowRight} from "react-icons/bs"
import style from "../../styles/home.module.css"
import About from "../../../src/images/about.png"

import 'react-multi-carousel/lib/styles.css';


//Component
import Carousel from "../../components/carousel"
import CardSlider from "../../components/cardSlider"


//Images
import CounselOne from "../../images/com/counsel1.png"
import CounselTwo from "../../images/com/counsel2.png"
import CounselThree from "../../images/com/counsel3.png"

export default function Home(props) {

    return (
        <div className={style.homeContainer} id="back-to-top-anchor" >
            <div className={style.homeCarousel}>
                <Carousel />
            </div>
            <div className={style.aboutAbu}>
                <Row>
                    <Col>
                        <div className={style.aboutBrief}>
                            <div>
                                <h2>About Abdullahi Ibrahim & Co</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                            </div>
                            <div>
                                <img src={About} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={style.practiceBrief}>
                <h2>Our Practice Area</h2>
                <CardSlider />
            </div>
            <div className={style.ourPhilosophy}>
                <h2>Our Philosophy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tortor ut adipiscing tellus elementum lobortis. Risus iaculis ultrices id et rutrum feugiat. 
                    Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                    Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                    Facilisis viverra ac morbi blandit leo, enim. Amet, ut nulla urna a tristique pretium nunc.
                </p>
            </div>
            <div className={style.meetCounselBrief}>
                <div>
                    <h2>Meet Our Counsels</h2>
                </div>
                <Row className={style.meetCounselBriefImg}> 
                    <Col sm={12} xl={4}>
                        <div>
                            <div>
                                <img src={CounselOne} alt="" />
                            </div>
                            <div className={style.meetCounselBriefName}> 
                                <h5>Jane Akabi</h5>
                                <p>Partner</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl={4}>
                        <div>
                            <div>
                                <img src={CounselTwo} alt="" />
                            </div>
                            <div className={style.meetCounselBriefName}> 
                                <h5>Jane Akabi</h5>
                                <p>Partner</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} xl={4}>
                        <div>
                            <div>
                                <img src={CounselThree} alt="" />
                            </div>
                            <div className={style.meetCounselBriefName}> 
                                <h5>Jane Akabi</h5>
                                <p>Partner</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={style.meetCounselBriefMore}>
                    More
                    <BsArrowRight />
                </div>
            </div>       
        </div>
    )
}
