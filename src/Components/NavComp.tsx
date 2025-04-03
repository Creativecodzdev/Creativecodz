import React, { useState, useEffect, useRef } from "react";

const NavComp: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const servicesRef = useRef<HTMLLIElement | null>(null); // Ref for Services dropdown

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  const toggleServicesMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
      <div className="container" style={{display:"flex",flexWrap:'wrap',justifyContent:'space-between',alignItems:'center' , columnGap:'10px'}}>
        <a className="logo text-uppercase" href="/">
          <img
            src="../../assets/images/Gradient Modern Technology Company Developers Logo.svg"
            alt="Logo"
            className="logo-light"
            style={{ height: "100px" }}
          />
        </a>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <i className="ti ti-menu"></i>
        </button>

        <div className={`${isMobile && isCollapsed ? "collapse" : ""} navbar-collapse`}>
          <ul className="navbar-nav navbar-center">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link">About Us</a>
            </li>

            {/* Services Dropdown with Click Outside Handling */}
            <li className="nav-item dropdown" ref={servicesRef}>
              <a href="#services" className="nav-link" onClick={toggleServicesMenu}>
                Services
              </a>
              {isServicesOpen && (
                <ul className="submenu">
                  <li><a href="#web-development" className="dropdown-item">Web Design</a></li>
                  <li><a href="#mobile-apps" className="dropdown-item">Digital Marketing</a></li>
                  <li><a href="#app-development" className="dropdown-item">App Development</a></li>
                  <li><a href="#uiux-design" className="dropdown-item">UI/UX Design</a></li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <a href="#blog" className="nav-link">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#careers" className="nav-link">Careers</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact Us</a>
            </li>
          </ul>
        </div>

        {!isMobile || !isCollapsed ?
        <div className="buttons_anim" style={{ position: 'relative', top: '18px'}}>
              <button className="blob-btn_anim">
                Let's Talk
                <span className="blob-btn__inner_anim">
                  <span className="blob-btn__blobs_anim">
                    <span className="blob-btn__blob_anim"></span>
                    <span className="blob-btn__blob_anim"></span>
                    <span className="blob-btn__blob_anim"></span>
                    <span className="blob-btn__blob_anim"></span>
                  </span>
                </span>
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute' }}>
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                  </filter>
                </defs>
              </svg>
            </div> :null}
      </div>
    </nav>
  );
};

export default NavComp;











// import React, { useState, useEffect } from 'react';

// const NavComp = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleNavbar = () => setIsCollapsed(!isCollapsed);

//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   // const toggleNavbar = () => setIsCollapsed(!isCollapsed);
//   const toggleServicesMenu = () => setIsServicesOpen(!isServicesOpen);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(max-width: 992px)');
//     setIsMobile(mediaQuery.matches);

//     const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);

//     mediaQuery.addEventListener('change', handleResize);
//     return () => mediaQuery.removeEventListener('change', handleResize);
//   }, []);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky-dark navbar-dark" id="navbar-sticky">
//         <div className="container">
//           <a className="logo text-uppercase" href="/">
//             <img
//               src="../../assets/images/Gradient Modern Technology Company Developers Logo.svg"
//               alt=""
//               className="logo-light"
//               style={{ height: '100px' }}
//             />
//             <img
//               src="../../assets/images/Gradient Modern Technology Company Developers Logo.svg"
//               alt=""
//               className="logo-dark"
//               style={{ height: '100px' }}
//             />
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             id="navbarToggler"
//             onClick={toggleNavbar}
//           >
//             <i className="ti ti-menu"></i>
//           </button>

//           <div className={`${isMobile && isCollapsed ? 'collapse' : ''}  navbar-collapse `} id="navbarCollapse1">
//             <ul className="navbar-nav navbar-center">
//               <li className="nav-item">
//                 <a href="#home" className="nav-link">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#features" className="nav-link">
//                   About Us
//                 </a>
//               </li>
//             <li className="nav-item dropdown">
//               <a href="#services" className="nav-link" onClick={toggleServicesMenu}>
//                 Services
//               </a>
//               {isServicesOpen && (
//                 <ul className="submenu">
//                   <li><a href="#web-development" className="dropdown-item">Web Design</a></li>
//                   <li><a href="#mobile-apps" className="dropdown-item">Digital Marketing</a></li>
//                   <li><a href="#uiux-design" className="dropdown-item">App Developement</a></li>
//                   <li><a href="#uiux-design" className="dropdown-item">UI/UX Design</a></li>
//                 </ul>
//               )}
//             </li>
//               <li className="nav-item">
//                 <a href="#testimonial" className="nav-link">
//                   Blog
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#team" className="nav-link">
//                   Careers
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#contact" className="nav-link">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>

//             <div className="buttons_anim" style={{ position: 'relative', top: '18px', left: '50px' }}>
//               <button className="blob-btn_anim">
//                 Let's Talk
//                 <span className="blob-btn__inner_anim">
//                   <span className="blob-btn__blobs_anim">
//                     <span className="blob-btn__blob_anim"></span>
//                     <span className="blob-btn__blob_anim"></span>
//                     <span className="blob-btn__blob_anim"></span>
//                     <span className="blob-btn__blob_anim"></span>
//                   </span>
//                 </span>
//               </button>
//               <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute' }}>
//                 <defs>
//                   <filter id="goo">
//                     <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
//                     <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
//                     <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
//                   </filter>
//                 </defs>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavComp;














// import React from 'react'

// const NavComp = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky-dark navbar-dark" id="navbar-sticky">
//     <div className="container">
//         <a className="logo text-uppercase" href="/">
//             <img src="../../assets/images/Gradient Modern Technology Company Developers Logo.svg" alt="" className="logo-light" style={{height: '100px'}}/>
//             <img src="../../assets/images/Gradient Modern Technology Company Developers Logo.svg" alt="" className="logo-dark" style={{height: '100px'}}/>
//         </a>

//         <button className="navbar-toggler" type="button" id="navbarToggler">
//             <i className="ti ti-menu"></i>
//         </button>


//         <div className="collapse navbar-collapse" id="navbarCollapse1">
//             <ul className="navbar-nav navbar-center">
//                 <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
//                 <li className="nav-item"><a href="#features" className="nav-link">About Us</a></li>
//                 <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
//                 <li className="nav-item"><a href="#testimonial" className="nav-link">Blog</a></li>
//                 <li className="nav-item"><a href="#team" className="nav-link">Careers</a></li>
//                 <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a></li>
//             </ul>

//             <div className="buttons_anim" style={{position: 'relative', top: '18px', left: '50px'}}>
//                 <button className="blob-btn_anim">
//                     Let's Talk
//                   <span className="blob-btn__inner_anim">
//                     <span className="blob-btn__blobs_anim">
//                       <span className="blob-btn__blob_anim"></span>
//                       <span className="blob-btn__blob_anim"></span>
//                       <span className="blob-btn__blob_anim"></span>
//                       <span className="blob-btn__blob_anim"></span>
//                     </span>
//                   </span>
//                 </button>
//                 <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{position: 'absolute'}}>
//                     <defs>
//                       <filter id="goo">
//                         <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
//                         <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
//                         <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
//                       </filter>
//                     </defs>
//                   </svg>
//         </div>
//         </div>
//     </div>
// </nav>
//     </div>
//   )
// }

// export default NavComp
