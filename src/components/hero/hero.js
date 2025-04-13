import React from 'react';
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Bg from '../../images/bg/hero-bg02.jpg'
import heroImg from '../../images/customeImages/a-young-girl-and-a-man-using-laptop-in-office-with-happy-.png'
import heroImg2 from '../../images/hero/hero-img03.png'
import heroImg3 from '../../images/hero/hero-img04.png'
import { motion } from 'framer-motion';


const Hero = () => {

    return (
        <section className="hero o-hidden hero-style-two pos-rel pt-120 bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="hero_wrap pt-40">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="xb-hero">
                                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                    <div>
                                        <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">Creating Connections Between 
                                            with <span>Brands and People</span>
                                        </h1>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <p className="xb-item--content wow fadeInUp" data-wow-delay="100ms"
                                            data-wow-duration="600ms">(like 0 to 1000 new sales per month kind of results)
                                        </p>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                    <div>
                                        <ul className="xb-item--item list-unstyled wow fadeInUp" data-wow-delay="200ms"
                                            data-wow-duration="600ms">
                                            <li><i className="far fa-check"></i> Web Design</li>
                                            <li><i className="far fa-check"></i> Dgital Marketing</li>
                                            <li><i className="far fa-check"></i> App Development</li>
                                            <li><i className="far fa-check"></i> Graphig Design</li>
                                        </ul>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1600} delay={9}>
                                    <div>
                                        <div className="xb-btn mt-60 wow fadeInUp" data-wow-delay="300ms"
                                            data-wow-duration="600ms">
                                            <Link to="/contact" className="thm-btn thm-btn--aso thm-btn--aso_violet">Book a
                                                free
                                                consultation</Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-right_img pos-rel">
                                <Fade direction='right' triggerOnce={'false'} duration={1200} delay={9}>
                                    {/* <img className="wow fadeInRight imagecontentdes" data-wow-duration="600ms" src={`https://img.freepik.com/free-photo/businesswomen-talking-while-looking-each-other_23-2148826506.jpg?t=st=1744533747~exp=1744537347~hmac=cd04299541801e4e127e4ac492cf89521f961ac617aa057452763ec302727cb2&w=1060`} alt="" /> */}
                                    <motion.img
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.2, delay: 0.2 }}
                                        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                                        className="imagecontentdes"
                                        src="https://img.freepik.com/free-photo/businesswomen-talking-while-looking-each-other_23-2148826506.jpg?t=st=1744533747~exp=1744537347~hmac=cd04299541801e4e127e4ac492cf89521f961ac617aa057452763ec302727cb2&w=1060"
                                        alt=""
                                    />
                                </Fade>
                                <div className="out-image">
                                    {/* <div className="img img--one updown-2">
                                        <Fade direction='down' triggerOnce={'false'} duration={1200} delay={9}>
                                            <img className="wow fadeInDown"
                                                data-wow-delay="100ms" data-wow-duration="600ms"
                                                src={heroImg2} alt="" />
                                        </Fade>
                                    </div> */}
                                    <div className="img img--two updown-3">
                                        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                            <img className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms" src={heroImg3} alt="" />
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-scroll-down active">
                    <AnchorLink href="#about" className="scrollspy-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </AnchorLink>
                </div>
            </div>
        </section>
    )
}

export default Hero;