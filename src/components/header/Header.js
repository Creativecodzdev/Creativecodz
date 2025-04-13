import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../images/shape/trangle-shape.png'
import Iconweb_dev from '../../images/customeImages/Web_dev_Icon.png'
import IconDegital_Mar from '../../images/customeImages/Digital_marketting_Icon.png'
import IconUiux from '../../images/customeImages/UI_UX_Icon.png'
import IconMobile from '../../images/customeImages/Mobilr_Dev_Icon.png'
import IconGrapicDesig from '../../images/customeImages/Graphic_des_Icon.png'
import IconTemrs_con from '../../images/customeImages/Tems_Con_Icon.png'
import IconPrv_Polcy from '../../images/customeImages/Priv_Polcy_Icon.png'
import icon8 from '../../images/icon/m_07.svg'
import icon9 from '../../images/icon/m_08.svg'
import icon10 from '../../images/icon/m_09.svg'
import icon11 from '../../images/icon/m_10.svg'
import icon12 from '../../images/icon/m_11.svg'
import icon13 from '../../images/icon/sms-white-icon01.svg'
import logo from '../../images/customeImages/Gradient Modern Technology Company Developers Logo.svg'
import clogo1 from '../../images/logo/client-logo.svg'
import clogo2 from '../../images/logo/client-logo2.svg'
import avatar from '../../images/bg/avatar.png'
import quote from '../../images/icon/quote.png'
import mImg from '../../images/casestudy/mm_img.png'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (

        <div id="xb-header-area" className="header-area header-style-two header-transparent">
            <div className="header-top">
                <marquee direction="right"><span>Get 15% off on all annual plans until September 30! Join Texpo as we transform SEO 🚀</span></marquee>
                {/* <span><Link onClick={ClickHandler} to="/">Learn more</Link><i className="far fa-angle-right"></i></span> */}
                {/* <div className="header-shape">
                    <div className="shape shape--one"><img src={icon1} alt="" /></div>
                    <div className="shape shape--two"><img src={icon1} alt="" /></div>
                </div> */}
            </div>
            <div className={`xb-header stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="header__wrap ul_li_between">
                        <div className="header-logo">
                            <Link onClick={ClickHandler} to="/"><img src={logo} alt="" style={{height:'100px', width:'210px'}}/></Link>
                        </div>
                        <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    {/* <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/"><span>Home</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/"><span>SEO Agency</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-2"><span>It Services</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-3"><span>AI & Data Solutions</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-4"><span>Cyber Security</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-5"><span>Cloud and Devops</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/home-6"><span>Help desk SaaS</span></Link></li>
                                        </ul>
                                    </li> */}
                                    <li><Link onClick={ClickHandler} to="/"><span>Home</span></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><span>About Us</span></Link></li>
                                    {/* <li className="menu-item-has-children megamenu">
                                        <Link onClick={ClickHandler} to="/"><span>company</span></Link>
                                        <ul className="submenu">
                                            <li>
                                                <div className="mega_menu_wrapper">
                                                    <div className="container">
                                                        <div className="mega_menu_wrapper_inner">
                                                            <div className="row">
                                                                <div className="col-xl-9">
                                                                    <div className="megamenu_pages_wrapper mb-5">
                                                                        <div className="row g-10">
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/about">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon2} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">About
                                                                                            Us</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Learn more about Innomax
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/pricing">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon3} alt="" />
                                                                                        </small>
                                                                                        <small className="iconbox_title">Our
                                                                                            Pricing</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Streamlined Pricing </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/team">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon4} alt="" />
                                                                                        </small>
                                                                                        <small className="iconbox_title">Our
                                                                                            team</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        We are friendly Join our team.
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/service">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon5} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Services</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Happy to help you!
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/service-single/Niche-research">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon6} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Services
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Happy to help you!
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/casestudy">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon7} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Casestudy</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Explore our all casestudy.
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/career">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon8} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Career</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Happy to help you! </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/career-details">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon9} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Career
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span className="description mb-0"> We
                                                                                        are friendly Join our
                                                                                        team.</span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/casestudy-details/Marketing">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon10} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Casestudy
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span
                                                                                        className="description mb-0">Explore
                                                                                        our all casestudy.</span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/terms-conditions">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon11} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Terms
                                                                                            & Conditions</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">Your
                                                                                        Rights and
                                                                                        Responsibilities.</span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/privacy-policy">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon12} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Privacy
                                                                                            Policy</small>
                                                                                    </span>
                                                                                    <span
                                                                                        className="description mb-0">Commitment
                                                                                        to Confidentiality.</span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul
                                                                        className="btns_group p-0 unordered_list justify-content-start">
                                                                        <li>
                                                                            <Link onClick={ClickHandler} to="/contact"
                                                                                className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black">Get
                                                                                free consultation</Link>
                                                                        </li>
                                                                        <li>
                                                                            <div className="review_short_info_2">
                                                                                <div className="review_admin_logo">
                                                                                    <img src={clogo1} alt="" />
                                                                                </div>
                                                                                <div className="review_info_content">
                                                                                    <ul
                                                                                        className="rating_block unordered_list">
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className="review_counter">From
                                                                                        <b>200+</b> reviews
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="review_short_info_2">
                                                                                <div className="review_admin_logo">
                                                                                    <img src={clogo2} alt="" />
                                                                                </div>
                                                                                <div className="review_info_content">
                                                                                    <ul
                                                                                        className="rating_block unordered_list">
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className="review_counter">From
                                                                                        <b>200+</b> reviews
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="autpr_box">
                                                                        <div className="site_author">
                                                                            <div className="author_box">
                                                                                <div className="author_image bg-light">
                                                                                    <img src={avatar} alt="" />
                                                                                </div>
                                                                                <div className="author_box_content">
                                                                                    <h3 className="author_name text-white">
                                                                                        Maverick Phoenix</h3>
                                                                                    <span
                                                                                        className="author_designation text-white">CEO
                                                                                        At Innomax</span>
                                                                                </div>
                                                                            </div>
                                                                            <p className="mb-0 text-white">“As a CEO at
                                                                                innomax I have been voice crying in the
                                                                                wilderness, trying to make requirements
                                                                                clear, use every minute to deliver the
                                                                                result, and not reinvent the wheel. Here
                                                                                at innomax, I made that possible for the
                                                                                clients”. </p>
                                                                            <div className="author_box_quote">
                                                                                <img src={quote} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li className="menu-item-has-children megamenu">
                                        <Link onClick={ClickHandler} to="/service"><span>Services</span></Link>
                                        <ul className="submenu">
                                            <li>
                                                <div className="mega_menu_wrapper">

                                                <div className="container">
                                                        <div className="mega_menu_wrapper_inner">
                                                            <div className="row">
                                                                <div className="col-xl-9">
                                                                    <div className="megamenu_pages_wrapper mb-5">
                                                                        <div className="row g-10">
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/about">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={Iconweb_dev} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Web Development</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                    Modern, responsive sites
                                                                                    </span>
                                                                                </Link>
                                                                            </div>

                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/about">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={IconDegital_Mar} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Degital Marketting</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                    Grow your online reach
                                                                                    </span>
                                                                                </Link>
                                                                            </div>

                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/pricing">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={IconUiux} alt="" />
                                                                                        </small>
                                                                                        <small className="iconbox_title">UI/UX</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                    Smooth user experiences </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/team">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={IconMobile} alt="" />
                                                                                        </small>
                                                                                        <small className="iconbox_title">Mobile Developement</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                    Apps that connect
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/service">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={IconGrapicDesig} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Grapic Design</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Designs that pop
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            {/* <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/service-single/Niche-research">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon6} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Services
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Happy to help you!
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/casestudy">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon7} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Casestudy</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Explore our all casestudy.
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/career">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon8} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Career</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                        Happy to help you! </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/career-details">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon9} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Career
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span className="description mb-0"> We
                                                                                        are friendly Join our
                                                                                        team.</span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/casestudy-details/Marketing">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={icon10} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Casestudy
                                                                                            details</small>
                                                                                    </span>
                                                                                    <span
                                                                                        className="description mb-0">Explore
                                                                                        our all casestudy.</span>
                                                                                </Link>
                                                                            </div> */}
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/terms-conditions">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={IconTemrs_con} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Terms
                                                                                            & Conditions</small>
                                                                                    </span>
                                                                                    <span className="description mb-0">
                                                                                    Our service rules
                                                                                    </span>
                                                                                </Link>
                                                                            </div>
                                                                            <div className="col-xl-4 col-md-4">
                                                                                <Link onClick={ClickHandler} className="iconbox_block_2"
                                                                                    to="/privacy-policy">
                                                                                    <span className="icon_title_wrap">
                                                                                        <small className="iconbox_icon">
                                                                                            <img src={IconPrv_Polcy} alt="" />
                                                                                        </small>
                                                                                        <small
                                                                                            className="iconbox_title">Privacy
                                                                                            Policy</small>
                                                                                    </span>
                                                                                    <span
                                                                                        className="description mb-0">
                                                                                            Your data, protected
                                                                                        </span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul
                                                                        className="btns_group p-0 unordered_list justify-content-start">
                                                                        <li>
                                                                            <Link onClick={ClickHandler} to="/contact"
                                                                                className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black">Get
                                                                                free consultation</Link>
                                                                        </li>
                                                                        <li>
                                                                            <div className="review_short_info_2">
                                                                                <div className="review_admin_logo">
                                                                                    <img src={clogo1} alt="" />
                                                                                </div>
                                                                                <div className="review_info_content">
                                                                                    <ul
                                                                                        className="rating_block unordered_list">
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className="review_counter">From
                                                                                        <b>200+</b> reviews
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="review_short_info_2">
                                                                                <div className="review_admin_logo">
                                                                                    <img src={clogo2} alt="" />
                                                                                </div>
                                                                                <div className="review_info_content">
                                                                                    <ul
                                                                                        className="rating_block unordered_list">
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                        <li><i className="fas fa-star"></i>
                                                                                        </li>
                                                                                    </ul>
                                                                                    <div className="review_counter">From
                                                                                        <b>200+</b> reviews
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-xl-3">
                                                                    <div className="autpr_box">
                                                                        <div className="site_author">
                                                                            <div className="author_box">
                                                                                <div className="author_image bg-light">
                                                                                    <img src={avatar} alt="" />
                                                                                </div>
                                                                                <div className="author_box_content">
                                                                                    <h3 className="author_name text-white">
                                                                                        Maverick Phoenix</h3>
                                                                                    <span
                                                                                        className="author_designation text-white">CEO
                                                                                        At Innomax</span>
                                                                                </div>
                                                                            </div>
                                                                            <p className="mb-0 text-white">“As a CEO at
                                                                                innomax I have been voice crying in the
                                                                                wilderness, trying to make requirements
                                                                                clear, use every minute to deliver the
                                                                                result, and not reinvent the wheel. Here
                                                                                at innomax, I made that possible for the
                                                                                clients”. </p>
                                                                            <div className="author_box_quote">
                                                                                <img src={quote} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/casestudy"><span>Casestudy</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/casestudy"><span>Casestudy</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/casestudy-details/Marketing"><span>Casestudy Details</span></Link></li>
                                        </ul>
                                    </li> */}
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/blog"><span>Blog</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} to="/blog"><span>Blog</span></Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single/AI-in-Neuroimaging-IXICOs-Cloud-Transformation"><span>Blog Details</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/contact"><span>Contact</span></Link></li>
                                </ul>
                            </nav>
                            <div className="xb-header-wrap">
                                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                                    <div className="xb-header-menu-scroll lenis lenis-smooth">
                                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                                        <div className="xb-logo-mobile xb-hide-xl">
                                            <Link onClick={ClickHandler} to="/" rel="home"><img src={logo}
                                                    alt=""/></Link>
                                        </div>
                                        <div className="xb-header-mobile-search xb-hide-xl">
                                            <form role="search" onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="Search..." name="s"
                                                    className="search-field"/>
                                                <button className="search-submit" type="submit"><i
                                                        className="far fa-search"></i></button>
                                            </form>
                                        </div>
                                        <nav className="xb-header-nav">
                                            <MobileMenu/>
                                        </nav>
                                    </div>
                                </div>
                                <div className="xb-header-menu-backdrop"></div>
                            </div>
                        </div>
                        <div className="header-bar-mobile side-menu d-xl-none">
                            <button className="xb-nav-mobile" onClick={() => setMobailState(!mobailActive)}>
                                <i className="far fa-bars"></i>
                            </button>
                        </div>
                        <div className="header-contact d-none d-md-block">
                            <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--aso thm-btn--header-black">Let’s talk
                                <img src={icon13} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;