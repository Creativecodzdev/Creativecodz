import React from 'react'

const FooterComp = () => {
  return (
    <div>
      <footer className="footer-part bg-dark py-5 pb-4">
    <div className="container">
        <div className="row mt-5 pb-5 justify-content-between g-3">
            <div className="col-lg-3">
                <div className="footer-about">
                    <div className="logo mb-4">
                        <a className="logo text-uppercase" href="/">
                            <img src="../../assets/images/Gradient Modern Technology Company Developers Logo.svg" alt="" className="logo-light" style={{height: '100px'}}/>
                            <img src="../../assets/images/Gradient Modern Technology Company Developers Logo.svg" alt="" className="logo-dark" style={{height: '100px'}}/>
                        </a>
                    </div>
                    <p className="text-white mb-4">Comprehensive report, data visualization , and insights to analyze your
                        business.</p>
                    <a href="#!" className="btn btn-primary btn-sm">Subscribe</a>
                </div>
            </div>
            <div className="col-lg-2">
                <h5 className="text-white fw-medium">Solution</h5>
                <ul className="mt-4">
                    <li>
                        <a   className="">Enterprise</a>
                    </li>
                    <li>
                        <a   className="">By Workflow</a>
                    </li>
                    <li>
                        <a   className="">By Team</a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-2">
                <h5 className="text-white fw-medium">Company</h5>
                <ul className="mt-4">
                    <li>
                        <a   className="">About Us</a>
                    </li>
                    <li>
                        <a   className="">News &amp; Press</a>
                    </li>
                    <li>
                        <a   className="">Our Customer</a>
                    </li>
                    <li>
                        <a   className="">Leadership</a>
                    </li>
                    <li>
                        <a   className="">Careers</a>
                    </li>

                </ul>
            </div>
            <div className="col-lg-2">
                <h5 className="text-white fw-medium">Resources</h5>
                <ul className="mt-4">
                    <li>
                        <a   className="">Blog </a>
                    </li>
                    <li>
                        <a   className="">Webinar &amp; Events </a>
                    </li>
                    <li>
                        <a   className="">Podcast</a>
                    </li>
                    <li>
                        <a   className="">E-book &amp; Guides</a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-2">
                <h5 className="text-white fw-medium">Contact Us</h5>
                <ul className="mt-4">
                    <li>
                        <a   className="">Contact Sales </a>
                    </li>
                    <li>
                        <a   className="">Become Partner</a>
                    </li>
                    <li>
                        <a   className="">Affliate Program</a>
                    </li>

                </ul>
            </div>
        </div>
        <hr className="border-primary"></hr>
        <div className="row align-items-center justify-content-between g-3">
            <div className="col-lg-5">
                <p className="m-0 fs-6 text-white-50">
                    <script> document.write(new Date().getFullYear())</script>
                    © Copyright 2025 - CreativeCodz. All Rights Reserved 
                    {/* <a   className="text-white">MarkeyThemes</a> */}
                </p>
            </div>
            <div className="col-lg-4 text-lg-center">
                <ul className="d-flex gap-2 m-0 align-items-center justify-content-center">
                    <li className="m-0">
                        <div className="icon d-flex rounded-circle align-items-center justify-content-center">
                            <a   className="text-dark f-18"><i
                                    className="ti ti-brand-facebook"></i></a>
                        </div>
                    </li>
                    <li className="m-0">
                        <div className="icon d-flex rounded-circle align-items-center justify-content-center">
                            <a   className="text-dark f-18"><i className="ti ti-brand-x"></i></a>
                        </div>
                    </li>
                    <li className="m-0">
                        <div className="icon d-flex rounded-circle align-items-center justify-content-center">
                            <a   className="text-dark f-18"><i className="ti ti-brand-youtube"></i></a>
                        </div>
                    </li>
                    <li className="m-0">
                        <div className="icon d-flex rounded-circle align-items-center justify-content-center">
                            <a   className="text-dark f-18"><i
                                    className="ti ti-brand-instagram"></i></a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-lg-3 text-lg-center">
                <div className="row g-3">
                    <div className="col-lg-6">
                        <a   className="text-white">Terms Of Us</a>
                    </div>
                    <div className="col-lg-6">
                        <a   className="text-white">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default FooterComp
