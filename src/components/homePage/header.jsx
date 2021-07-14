import React from 'react'
import '../../assets/img/instagram/insta1.png'
import logo from '../../assets/img/logo/logo.png';
import Menu from './manue/menu'
const socialIcon =[
    'fab fa-facebook-f','fab fa-twitter','fab fa-google-plus-g',"fab fa-instagram"
]
const languages =[
    'English','Bangla 1','JavaScript'
]

function Header() {
    return (
        <header>
           <div className="header-top-area pl-60 pr-60">
               <div className="container">
                   <div className="row">
                       <div className="col-xl-6 col-lg-6 col-md-6 col-6 d-flex align-items-center">
                           <div className="language f-left">
                               <ul>
                                   <li><a href="#">English <i className="fas fa-angle-down"></i></a>
                                    <ul>
                                        {
                                            languages.map((lan,index)=>(
                                            <li key={index}><a href="#">{lan}</a></li>
                                            ))
                                        }
                                    </ul>
                                </li>
                               </ul>
                           </div>
                           <div className="social-icon f-left d-none d-md-block">
                           {
                            socialIcon.map((icon,index)=>(
                                <a key={index} href="#"><i className={icon}></i></a>
                                ))
                            }
                           </div>
                       </div>
                       <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                           <div className="header-right f-right">
                               <ul>
                                   <li><a href="#"><i className="fas fa-search"></i></a>
                                        <div className="search-form">
                                            <form action="#">
                                                <input type="text" placeholder="Search"/>
                                                <button><i className="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                    </li>
                                   <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                                   <li className="info-bar"><a href="#"><i className="fas fa-bars"></i></a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="extra-info">
                <div className="close-icon">
                    <button><i className="far fa-window-close"></i></button>
                </div>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrudexe rc itation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure.</p>
               <div className="instagram">
                   <a href="#"><img src="../../assets/img/instagram/insta4.png" alt=""/></a>
                   <a href="#"><img src="img/instagram/insta5.png" alt=""/></a>
                   <a href="#"><img src="img/instagram/insta6.png" alt=""/></a>
               </div>
               
                <div className="social-icon-right mt-30">
                {
                    socialIcon.map((icon,index)=>(
                        <a key={index} href="#"><i className={icon}></i></a>
                        ))
                }
                </div>
           </div>
           <div className="header-bottom-area pl-60 pr-60">
               <div className="container">
                   <div className="row align-items-center">
                       <div className="col-xl-3 col-lg-3">
                           <div className="logo">
                               <a href="index.html"><img src={logo} alt=""/></a>
                           </div>
                       </div>
                       <Menu/>
                     
                   </div>
               </div>
           </div>
       </header>
  )
}

export default Header
