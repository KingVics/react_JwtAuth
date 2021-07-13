import React from 'react'
import style from "../styles/about.module.css"
import {Row, Col} from "react-bootstrap"


import Bestimg from "../images/com/about1.jpg"
import Aboutimg from "../images/com/aboutus2.jpg"
import Whyimg from "../images/whychooseus.jpg"
import Meetimg from "../images/found.svg"



function About () {
    return(
        <div className={style.aboutContainer}>
            <div className={style.aboutImgDiv}>
                <img src={Aboutimg} alt="" />
            </div>
            <div className={style.bestlawFirm}>
                <h2>The Best Law Firm</h2>
                <Row>
                    <Col  xl={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis leo amet, fames lacus, interdum gravida. Cursus lorem elementum feugiat congue. 
                            Egestas ac, quisque laoreet adipiscing risus, placerat. Nisl adipiscing at aliquet urna faucibus egestas nam in ut. Pretium, elit vulputate enim 
                            vitae quis odio aenean a. A lacus eu iaculis purus cras enim cursus. Lorem netus euismod amet augue. Eu id tempor scelerisque tortor viverra gravida
                            venenatis. Venenatis vulputate malesuada sed massa pharetra montes.
                        </p>
                    </Col>  
                    <Col xl={6}>
                    <img src={Bestimg} alt=" " />
                    </Col>
                    <p className={style.bestlawFirmP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis leo amet, fames lacus, interdum gravida. Cursus lorem elementum feugiat congue. 
                        Egestas ac, quisque laoreet adipiscing risus, placerat. Nisl adipiscing at aliquet urna faucibus egestas nam in ut. Pretium, elit vulputate enim 
                    </p>
                </Row>
            </div>
            <div className={style.whychooseUs}>
                <Row>
                    <Col xl={6}>
                        <img src={Whyimg} alt=" " />
                    </Col>
                    <Col xl={6} className={style.whyCol}>
                        <h2>Why choose Us?</h2>
                        <div>
                            <Row>
                                <Col>
                                    <h3>Experience</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                                </Col>
                                <Col>
                                    <h3>Trust</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3>Transparency</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                                </Col>
                                <Col>
                                    <h3>Affordable</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ornare et bibendum lacus eget.</p>
                                </Col>
                            </Row>   
                        </div>
                    </Col>  
                </Row>
            </div>
            <div className={style.meetheFounder}>
                <Row>
                    <Col xl={4}>
                        <img src={Meetimg} alt=" " />
                    </Col>
                    <Col  xl={8} className={style.founderCol}>
                        <h2>Meet the Founder</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse purus mauris quis convallis nisl, mauris morbi.
                            Ut ut justo, id convallis neque, ultricies urna aliquet. 
                            Pellentesque etiam augue arcu, at eget lectus. At et eu congue ullamcorper ridiculus 
                            et justo. A adipiscing at iaculis ultricies scelerisque fermentum pellentesque id vitae. 
                            Risus a non lectus et tincidunt suspendisse molestie urna. Tortor est viverra nisl ultrices.
                            Hendrerit aliquet neque, eu ultricies eget egestas mi. Purus aenean senectus nisi sodales enim enim in. Accumsan, pretium ut commodo odio mauris elit ac ut consectetur. Turpis viverra nisl semper aliquam facilisi ultrices. In amet, odio sit posuere. Mattis ut nam amet sed lectus vitae sed elementum. Et sit pretium ullamcorper pellentesque ipsum ut varius.
                        </p>
                        <div>
                            <button>View Abudlahi's Bio</button>
                        </div>
                    </Col>  
                </Row>
            </div>
            <div className={style.needHelp}>
                <div>
                    <h3>Lorem ipsum dolor sit amet </h3>
                    <p>Lorem ipsum dolor sit amet </p>
                </div>
                <div>
                    <h2>Need Help?</h2>
                </div>
                <div>
                    <button>Case Evaluation</button>
                </div>
            </div>
        </div>
    )
}

export default About;




