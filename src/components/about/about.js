import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import icon from '../../images/icon/magic.png'
import about1 from '../../images/icon/airdrop.png'
import about2 from '../../images/icon/people.png'
import about3 from '../../images/icon/microphone.png'
import about4 from '../../images/customeImages/teamwork-partnership-and-collaboration-icon-vector-21291399-r.png'

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section id="about" className="about m-lr">
            <div className="about-wrapper sec-bg pos-rel pb-130 pt-130">
                <div className="container">
                    <div className="sec-title--two text-center">
                        <Fade direction='down' triggerOnce={'false'} duration={1000} delay={9}>
                            <div className="sub-title wow fadeInDown" data-wow-duration="600ms">
                                <img src={icon} alt="" /> We are innomax
                            </div>
                        </Fade>
                        <Fade direction='down' triggerOnce={'false'} duration={1500} delay={9}>
                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Committed
                                to Your SEO Success</h2>
                        </Fade>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-50">
                            <div className="about-left">
                                <h2 className="title">Coure values</h2>
                                <div className="about-item_box ul_li">
                                    <div className="xb-item--icon"><img src={about1} alt="" /></div>
                                    <div className="xb-item--holder">
                                        <p className="xb-item--content"><span>Innovation:</span> We embrace creativity and stay ahead of digital trends.</p>
                                    </div>
                                </div>
                                <div className="about-item_box ul_li">
                                    <div className="xb-item--icon"><img src={about2} alt="" /></div>
                                    <div className="xb-item--holder">
                                        <p className="xb-item--content"><span>Client Focus:</span> Your success drives everything we do.</p>
                                    </div>
                                </div>
                                <div className="about-item_box ul_li">
                                    <div className="xb-item--icon"><img src={about3} alt="" />
                                    </div>
                                    <div className="xb-item--holder">
                                        <p className="xb-item--content"><span>Transparency:</span> Clear communication and honest reporting at every step.</p>
                                    </div>
                                </div>

                                <div className="about-item_box ul_li">
                                    <div className="xb-item--icon"><img src={about4} alt="" style={{height:'30px', width:'30px'}} />
                                    </div>
                                    <div className="xb-item--holder">
                                        <p className="xb-item--content"><span>Collabrations:</span> We work as one team with our clients.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-50">
                            <div className="about-right">
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title">Our Mission</h3>
                                    <p className="xb-item--content">To lead in digital innovation by creating impactful eCommerce and marketing solutions that empower businesses to grow and thrive online.</p>
                                </div>
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title">Our Vision</h3>
                                    <p className="xb-item--content">To deliver creative, results-driven eCommerce and digital marketing services by combining strategy, innovation, and technology—helping our clients succeed in the digital world.</p>
                                </div>
                            </div>
                        </div>
                        <div className="xb-btn text-center mt-90 wow fadeInUp" data-wow-duration="600ms">
                            <Fade direction='up' triggerOnce={'false'} duration={1500} delay={9}>
                                <Link onClick={ClickHandler} to="/about" className="thm-btn thm-btn--aso">Learn more about us</Link>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;