import React from 'react'

const ContentComp = () => {
  return (
    <div>
      <section className="bg-home-agency bg-light position-relative" id="home">
    <div className="home-center">
        <div className="home-desc-center">
            <div className="container">
                <div className="row align-items-center justify-content-between position-relative">
                    <div className="col-lg-5">
                        <div className="title-sm border p-1 d-inline-block mb-4 rounded-pill px-2 bg-light">
                            <a  >
                                <p className="fs-6 mb-0 text-primary fw-medium"><span
                                        className="badge text-light bg-primary rounded-pill me-2 mb-1">New</span>Show
                                    Product <i className="ti ti-arrow-narrow-right ms-1 align-middle"></i></p>
                            </a>
                        </div>
                        <h2 className="lh-base">Creating Connections Between Brands and People</h2>
                        <p className="text-muted">Creativecodz is committed to empowering our clients with top-tier digital 
                            solutions. No matter the budget, we deliver innovative, high-value results that drive success. 
                            Every day, we put our best effort forward to exceed expectations and achieve excellence.</p>
                        <div className="row mt-4" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                            <div className="col-lg-6" style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                                <p className="fs-6 text-dark fw-medium"><i
                                        className="ti ti-circle-check-filled text-success fs-5 me-3"></i></p>
                                <p>Web Design</p>

                            </div>
                            <div className="col-lg-6" style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                                <p className="fs-6 text-dark fw-medium"><i
                                        className="ti ti-circle-check-filled text-success fs-5 me-3"></i>
                                </p>
                                <p>Dgital Marketing</p>
                            </div>

                            <div className="col-lg-6" style={{display:'flex', flexWrap:'wrap', justifyContent:'center', paddingLeft:'53px'}}>
                                <p className="fs-6 text-dark fw-medium"><i
                                        className="ti ti-circle-check-filled text-success fs-5 me-3"></i>
                                </p>
                                <p>App Development</p>
                            </div>

                            <div className="col-lg-6" style={{display:'flex', flexWrap:'wrap', justifyContent:'center',paddingRight:'23px'}}>
                                <p className="fs-6 text-dark fw-medium"><i
                                        className="ti ti-circle-check-filled text-success fs-5 me-3"></i> 
                                </p>
                                <p>
                                    Graphig Design
                                </p>
                            </div>
                        </div>
                        <div className="user-team-price mt-3 d-flex align-items-center">
                            <ul>
                                <li>
                                    <img src="/assets/images/team/avatar-7.jpg" alt="image"
                                         className="rounded-circle"/>
                                </li>
                                <li>
                                    <img src="/assets/images/team/avatar-6.jpg" alt="image"
                                         className="rounded-circle"/>
                                </li>
                                <li>
                                    <img src="/assets/images/team/avatar-8.jpg" alt="image"
                                         className="rounded-circle"/>
                                </li>
                                <li>
                                    <img src="/assets/images/team/avatar-9.jpg" alt="image"
                                         className="rounded-circle"/>
                                </li>
                            </ul>
                            <div className="d-block ms-2">
                                <h6 className="fw-semibold mb-1">100K</h6>
                                <h6 className="fw-semibold">Active User</h6>
                            </div>
                        </div>
                        <div className="main-btn mt-4">
                            <a   className="btn btn-primary">Explore Now</a>
                            <a   className="btn btn-outline-primary ms-2">Watch Video</a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src="/assets/images/Home Image 1.svg" alt=""
                             className="img-fluid rounded-5"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section" id="about">
    <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-lg-7">
                <p className="d-flex align-items-center justify-content-center mb-4">
                    <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                        <i className="ti ti-info-circle text-white f-18"></i>
                    </span>
                    <i className="ti ti-line-dashed text-primary fs-5"></i>
                    <span className="badge bg-light border text-primary py-2 px-3 f-14">About Us </span>
                </p>
                <h3 className="lh-base">Why You Should Choose Skywave ?</h3>
            </div>
        </div>
        <div className="row align-items-center mt-5 pt-3">
            <div className="col-lg-7">
                <img src="../../assets/images/Home Image 2.svg" alt="" className="img-fluid"/>
            </div>
            <div className="col-lg-5">
                <div className="about-content">
                    <h5 className="mb-3 lh-base">Skywave offers a comprehensive, user-friendly app experience</h5>
                    <p className="text-muted">
                        Choosing Skywave means partnering with a team that's committed to your success. Our app is
                        designed with your needs in mind, offering an intuitive and user-friendly experience that
                        simplifies your day-to-day tasks.
                    </p>
                    <div className="pt-3">
                        <a href="#" className="btn btn-primary">Learn more <i className="mdi mdi-arrow-right"></i></a>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-4 col-4">
                            <h4 className="fw-semibold">20+</h4>
                            <p className="mb-0 text-muted">Working Task</p>
                        </div>
                        <div className="col-lg-4 col-4">
                            <h4 className="fw-semibold">70+</h4>
                            <p className="mb-0 text-muted">Country Reached</p>
                        </div>
                        <div className="col-lg-4 col-4">
                            <h4 className="fw-semibold"><i className="ti ti-star-filled text-warning"></i> 4.5</h4>
                            <p className="mb-0 text-muted">Best Rating</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<section className="section bg-light" id="features">
    <div className="container">
        <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
                <div className="title mb-5">
                    <p className="d-flex align-items-center mb-4">
                        <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                            <i className="ti ti-key text-white f-18"></i>
                        </span>
                        <i className="ti ti-line-dashed text-primary fs-5"></i>
                        <span className="badge bg-light border text-primary py-2 px-3 f-14">Features</span>
                    </p>
                    <h3>Amazing Features</h3>
                    <p className="text-muted">Their diverse skills and creative approaches ensure that we consistently
                        deliver outstanding results and push the boundaries of what's possible. </p>
                </div>
            </div>
            <div className="col-lg-3 text-end">
                <a href="#!" className="btn btn-primary">View 12 Features</a>
            </div>
        </div>
        <div className="row mt-5 g-3">
            <div className="col-lg-6">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <span className="icon-bg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                                <i className="ti ti-apps fs-4"></i>
                            </span>
                            <p className="mb-0 fw-semibold f-18">App Integration</p>
                        </div>
                        <p className="text-muted">Our product seamlessly integrates with various apps, allowing you to
                            streamline your workflow and enhance productivity.</p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <span className="icon-bg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                                <i className="ti ti-jump-rope fs-4"></i>
                            </span>
                            <p className="mb-0 fw-semibold f-18">Workflow Builder</p>
                        </div>
                        <p className="text-muted">The Workflow Builder feature empowers you to create, customize, and
                            automate tasks with ease. Design efficient workflows.</p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <span className="icon-bg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                                <i className="ti ti-edit fs-4"></i>
                            </span>
                            <p className="mb-0 fw-semibold f-18">Specific Tools</p>
                        </div>
                        <p className="text-muted">Our product comes equipped with a range of specific tools designed to
                            enhance functionality and improve efficiency.</p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <span className="icon-bg text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                                <i className="ti ti-alarm fs-4"></i>
                            </span>
                            <p className="mb-0 fw-semibold f-18">Lifetime Access</p>
                        </div>
                        <p className="text-muted">Enjoy the peace of mind that comes with Lifetime Access to our
                            product. Once you purchase, you'll receive ongoing updates, support.</p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section" id="services">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7">
                <div className="title text-center mb-5">
                    <p className="d-flex align-items-center justify-content-center mb-4">
                        <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                            <i className="ti ti-devices-cog text-white f-18"></i>
                        </span>
                        <i className="ti ti-line-dashed text-primary fs-5"></i>
                        <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Services </span>
                    </p>
                    <h3>How To Better Into Business</h3>
                    <p className="text-muted">Improving one's business acumen and navigating the complexities of
                        entrepreneurship require </p>
                </div>
            </div>
        </div>
        <div className="row align-items-center g-3">
            <div className="col-lg-4">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <div className="mb-3">
                            <i className="ti ti-device-desktop-analytics fs-1 text-primary"></i>
                        </div>
                        <h6>Custom Software Development</h6>
                        <p className="mt-2 text-muted">We understand that every business has unique needs. Our team can
                            create custom software solutions tailored specifically</p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-0 text-center bg-primary bg-shape">
                    <div className="card-body">
                        <div className="mb-3">
                            <i className="ti ti-webhook fs-1 text-white"></i>
                        </div>
                        <h6 className="text-white">Integration Services</h6>
                        <p className="mt-2 text-white-50">Our software seamlessly integrates with a variety of platforms
                            and tools. We provide integration services to ensure </p>
                        <a href="#!" className="text-light">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <div className="mb-3">
                            <i className="ti ti-heart-handshake fs-1 text-primary"></i>
                        </div>
                        <h6>Training and Onboarding</h6>
                        <p className="mt-2 text-muted">We offer thorough training programs and onboarding sessions to
                            help your team get up to speed with our software quickly</p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <div className="mb-3">
                            <i className="ti ti-message-user fs-1 text-primary"></i>
                        </div>
                        <h6>Consulting Services</h6>
                        <p className="mt-2 text-muted">Our experts provide strategic consulting to help you leverage our
                            software for maximum benefit. We offer insights</p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <div className="mb-3">
                            <i className="ti ti-refresh-dot fs-1 text-primary"></i>
                        </div>
                        <h6>Updates and Maintenance</h6>
                        <p className="mt-2 text-muted">We continually update our software to incorporate the latest
                            advancements and features. Our maintenance services</p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border-0 text-center">
                    <div className="card-body">
                        <div className="mb-3">
                            <i className="ti ti-headset fs-1 text-primary"></i>
                        </div>
                        <h6>Technical Support</h6>
                        <p className="mt-2 text-muted">Our dedicated support team is available 24/7 to assist you with
                            any technical issues you may encounter. </p>
                        <a href="#!" className="text-primary">View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section bg-light" id="portfolio">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7">
                <div className="title text-center mb-5">
                    <p className="d-flex align-items-center justify-content-center mb-4">
                        <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                            <i className="ti ti-presentation text-white f-18"></i>
                        </span>
                        <i className="ti ti-line-dashed text-primary fs-5"></i>
                        <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Project </span>
                    </p>
                    <h3>Discover Our Selected Projects</h3>
                    <p className="text-muted">Explore the innovative and impactful work we’ve done across various
                        industries. Each project showcases our commitment to quality </p>
                </div>
            </div>
        </div>

        <div className="row g-3">
            <div className="col-lg-4">
                <div className="card border">
                    <div className="card-body">
                        <img src="/assets/images/mobile.png" alt="" className="img-fluid bg-light"/>
                        <div className="mt-3">
                            <h5>Our Best Skywave App</h5>
                            <p className="text-muted">We are a digital agency that specializes in web design, SEO,
                                social media</p>
                            <a href="#!" className="text-primary">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border">
                    <div className="card-body">
                        <img src="/assets/images/agency-services.png" alt=""
                             className="img-fluid bg-light"/>
                        <div className="mt-3">
                            <h5>Agency Landing Page</h5>
                            <p className="text-muted">We are a digital agency that specializes in web design, SEO,
                                social media</p>
                            <a href="#!" className="text-primary">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border">
                    <div className="card-body">
                        <img src="/assets/images/agency-services-3.png" alt=""
                             className="img-fluid bg-light"/>
                        <div className="mt-3">
                            <h5>Business Landing Page</h5>
                            <p className="text-muted">We are a digital agency that specializes in web design, SEO,
                                social media</p>
                            <a href="#!" className="text-primary">Show More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="py-5 counter-section bg-dark bg-shape">
    <div className="container">
        <div className="row align-items-center g-4">
            <div className="col-lg-3">
                <div className="d-flex align-items-center gap-4">
                    <h2 className="fw-bold text-white mb-0"> 230 </h2>
                    <p className="mb-0 text-white f-16">Startups We Have Funded</p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center gap-4">
                    <h2 className="fw-bold text-white mb-0"> 7k </h2>
                    <p className="mb-0 text-white f-16">Funded From Skywave Community</p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center gap-4">
                    <h2 className="fw-bold text-white mb-0"> $68B </h2>
                    <p className="mb-0 text-white f-16">Our Combined Valuation</p>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center gap-4">
                    <h2 className="fw-bold text-white mb-0"> 10+ </h2>
                    <p className="mb-0 text-white f-16">Years Of Best Experience</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section bg-light" id="testimonial">
    <div className="container">
        <div className="row align-items-center justify-content-between g-3">
            <div className="col-lg-5">
                <p className="d-flex align-items-center mb-4">
                    <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                        <i className="ti ti-messages text-white f-18"></i>
                    </span>
                    <i className="ti ti-line-dashed text-primary fs-5"></i>
                    <span className="badge bg-light border text-primary py-2 px-3 f-14">Testimonial</span>
                </p>
                <h3>From Our Community.</h3>
                <p className="text-muted">Here's what other subscribers had to say about Production Online.</p>
                <div className="mb-4">
                    <ul className="carousel-indicators position-static justify-content-start ms-0">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className=""><img
                                src="/assets/images/team/avatar-8.jpg" alt=""
                                className="testi-img img-fluid rounded-circle mx-auto d-block"/></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active"
                            aria-current="true"><img src="/assets/images/team/avatar-5.jpg" alt=""
                                                     className="testi-img img-fluid rounded-circle mx-auto d-block"/>
                        </li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className=""><img
                                src="/assets/images/team/avatar-3.jpg" alt=""
                                className="testi-img img-fluid rounded-circle mx-auto d-block"/></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className=""><img
                                src="/assets/images/team/avatar-4.jpg" alt=""
                                className="testi-img img-fluid rounded-circle mx-auto d-block"/></li>
                    </ul>
                </div>
                <h4 className="fw-semibold"><i className="ti ti-star-filled text-warning"></i> 4.5 <span
                        className="f-14 text-muted fw-medium">Best Review</span></h4>
            </div>
            <div className="col-lg-6">
                <div className="bg-primary p-3 rounded shadow bg-shape">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <div className="testi text-center">
                                    <div className="card bg-shape border-0">
                                        <div className="card-body text-start">
                                            <div className="row align-items-center justify-content-between g-0">
                                                <div className="col-lg-12">
                                                    <img src="/assets/images/logo/paypal.png"
                                                         alt="" className=""/>
                                                    <p className="card-text mt-3 f-18 text-muted">" Production Online
                                                        has helped me become a bette musician and producer tha I
                                                        ever thought possible."</p>
                                                    <div className="d-flex align-items-center mt-4">
                                                        <img src="/assets/images/team/avatar-8.jpg"
                                                             alt=""
                                                             className="rounded-circle" height="50" width="50"/>
                                                        <div className="d-block ms-3">
                                                            <p className="m-0 text-primary fs-6 fw-medium">Danilo
                                                                Tanic</p>
                                                            <p className="m-0 fs-6">Head of Design at Paypal</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testi text-center">
                                    <div className="card bg-shape border-0">
                                        <div className="card-body text-start">
                                            <div className="row align-items-center justify-content-between g-0">
                                                <div className="col-lg-12">
                                                    <img src="/assets/images/logo/shopify.png"
                                                         alt="" className=""/>
                                                    <p className="card-text mt-3 f-18 text-muted">"Each of team member
                                                        is getting precious help in their professional development
                                                        and can build a program that".</p>
                                                    <div className="d-flex align-items-center mt-4">
                                                        <img src="/assets/images/team/avatar-5.jpg"
                                                             alt=""
                                                             className="rounded-circle" height="50" width="50"/>
                                                        <div className="d-block ms-3">
                                                            <p className="m-0 text-primary fs-6 fw-medium">Samuel
                                                                Kane</p>
                                                            <p className="m-0 fs-6">Project Manager at Shopify</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testi text-center">
                                    <div className="card bg-shape border-0">
                                        <div className="card-body text-start">
                                            <div className="row align-items-center justify-content-between g-0">
                                                <div className="col-lg-12">
                                                    <img src="/assets/images/logo/amazon.png"
                                                         alt="" className=""/>
                                                    <p className="card-text mt-3 f-18 text-muted">"Growth was
                                                        implemented within minutes and it is now an essential part
                                                        of our amazing development process".</p>
                                                    <div className="d-flex align-items-center mt-4">
                                                        <img src="/assets/images/team/avatar-3.jpg"
                                                             alt=""
                                                             className="rounded-circle" height="50" width="50"/>
                                                        <div className="d-block ms-3">
                                                            <p className="m-0 text-primary fs-6 fw-medium">James
                                                                Arthur</p>
                                                            <p className="m-0 fs-6">Senior Manager at Amazon</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <div className="testi text-center">
                                    <div className="card bg-shape border-0">
                                        <div className="card-body text-start">
                                            <div className="row align-items-center justify-content-between g-0">
                                                <div className="col-lg-12">
                                                    <img src="/assets/images/logo/amazon.png"
                                                         alt="" className=""/>
                                                    <p className="card-text mt-3 f-18 text-muted">"Growth was
                                                        implemented within minutes and it is now an essential part
                                                        of our amazing development process".</p>
                                                    <div className="d-flex align-items-center mt-4">
                                                        <img src="/assets/images/team/avatar-4.jpg"
                                                             alt=""
                                                             className="rounded-circle" height="50" width="50"/>
                                                        <div className="d-block ms-3">
                                                            <p className="m-0 text-primary fs-6 fw-medium">James
                                                                Arthur</p>
                                                            <p className="m-0 fs-6">Senior Manager at Amazon</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section" id="pricing">
    <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-lg-7">
                <p className="d-flex align-items-center justify-content-center mb-4">
                    <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                        <i className="ti ti-receipt-2 text-white f-18"></i>
                    </span>
                    <i className="ti ti-line-dashed text-dark fs-5"></i>
                    <span className="badge bg-light border text-primary py-2 px-3 f-14">Pricing</span>
                </p>
                <h3 className="text-dark">Choose The Plan That's Right For You</h3>
                <p className="text-muted">Competitive rates and pricing plans to help you find a plan that fits the
                    needs and budget of your business.</p>
            </div>
        </div>
        <div className="row mt-5 g-3">
            <div className="col-lg-4">
                <div className="card border">
                    <div className="card-header bg-light border-bottom p-4 bg-shape">
                        <div>
                            <h5 className="mb-2 text-primary">Starter</h5>
                        </div>
                        <div className="price-number mt-4">
                            <h2 className="fw-bold m-0 text-dark">$12.99 <span
                                    className="text-muted fs-6 fw-medium">/ Month</span></h2>
                        </div>
                    </div>
                    <div className="card-body p-4">
                        <h6 className="fw-semibold">Start Up Starter Packs</h6>
                        <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-muted mt-4">
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Account
                                Aggregation
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Expense Tracking
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Budgeting Tools
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Transaction
                                Insights
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Basic Security
                            </li>
                        </ul>
                        <div className="price-btn mt-4">
                            <a href="#!" className="btn btn-primary w-100">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border">
                    <div className="card-header bg-primary border-bottom p-4 bg-shape">
                        <div>
                            <h5 className="mb-2 text-white">Premium</h5>
                        </div>
                        <div className="price-number mt-4">
                            <h2 className="fw-bold m-0 text-white">$145.99 <span className="text-white fs-6 fw-medium">/ Month</span>
                            </h2>
                        </div>
                    </div>
                    <div className="card-body p-4">
                        <h6 className="fw-semibold">Start Up Starter Packs</h6>
                        <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-muted mt-4">
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Account
                                Aggregation
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Expense Tracking
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Budgeting Tools
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Transaction
                                Insights
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Basic Security
                            </li>
                        </ul>
                        <div className="price-btn mt-4">
                            <a href="#!" className="btn btn-primary w-100">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card border">
                    <div className="card-header bg-light border-bottom p-4 bg-shape">
                        <div>
                            <h5 className="mb-2 text-primary">Enterprise</h5>
                        </div>
                        <div className="price-number mt-4">
                            <h2 className="fw-bold m-0 text-dark">$185.99 <span className="text-muted fs-6 fw-medium">/ Month</span>
                            </h2>
                        </div>
                    </div>
                    <div className="card-body p-4">
                        <h6 className="fw-semibold">Start Up Starter Packs</h6>
                        <ul className="p-0 list-unstyled d-flex flex-column gap-3 text-muted mt-4">
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Account
                                Aggregation
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Expense Tracking
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Budgeting Tools
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Transaction
                                Insights
                            </li>
                            <li><i className="ti ti-circle-check text-success me-1 align-middle"></i> Basic Security
                            </li>
                        </ul>
                        <div className="price-btn mt-4">
                            <a href="#!" className="btn btn-primary w-100">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="section bg-light" id="contact">
    <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-lg-6">
                <p className="d-flex align-items-center justify-content-center mb-4">
                    <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                        <i className="ti ti-address-book text-white f-18"></i>
                    </span>
                    <i className="ti ti-line-dashed text-dark fs-5"></i>
                    <span className="badge bg-light border text-primary py-2 px-3 f-14">Contact</span>
                </p>
                <h3 className="text-dark">Contact Us</h3>
                <p className="text-muted">We're here to help! Whether you have questions, need support, or want to
                    explore how we can collaborate</p>
            </div>
        </div>
        <div className="row mt-5 align-items-center">
            <div className="col-lg-4">
                <div className="card bg-primary bg-shape border-0 mb-3">
                    <div className="card-body">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center border border-primary">
                                <i className="ti ti-phone-call fs-4"></i>
                            </span>
                            <p className="mb-0 fw-semibold f-16 text-white">Call Us Directly At</p>
                        </div>
                        <h5 className="text-white mt-4 mb-5">+ 713-707-2524</h5>
                        <a href="#!" className="btn btn-light btn-sm w-100">Contact Us</a>
                    </div>
                </div>
                <div className="card border-0">
                    <div className="card-body">
                        <div className="d-flex align-items-center gap-3">
                            <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center border border-primary">
                                <i className="ti ti-mail fs-4"></i>
                            </span>
                            <p className="mb-0 fw-semibold f-16 text-muted">Chat With Our Team</p>
                        </div>
                        <h5 className="text-dark mt-4 mb-5">marshal@rhyta.com</h5>
                        <a href="#!" className="btn btn-primary btn-sm w-100">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="custom-form p-3">
                    <form>
                        <h6 className="mb-4">Send Details</h6>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input name="name" id="name" type="text" className="form-control border"
                                           placeholder="Name" required/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <input name="email" id="email" type="email" className="form-control border"
                                           placeholder="Email" required/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <input type="text" className="form-control border" id="subject"
                                           placeholder="Subject" required/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <textarea name="comments" id="comments" rows={8} className="form-control border"
                                              required placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</section>
    </div>
  )
}

export default ContentComp
