import React from 'react';
import {Link} from 'react-router-dom'
function menu() {
    return (
      <>
        <div className="col-xl-9 col-lg-9">
                <div className="header-button f-right d-none d-lg-block">
                                <a href="#">Get a quote</a>
                            </div>
                           <div className="main-menu f-right">
                               <nav id="mobile-menu">
                                   <ul>
                                       <li> <Link to='/'>Home</Link>
                                            <ul className="submenu">
                                                <li><a href="index.html">Home style 1</a></li>
                                                <li><a href="index-2.html">Home style 2</a></li>
                                                <li><a href="index-3.html">Home style 3</a></li>
                                            </ul>
                                        </li>
                               
                                       <li><Link to="/about" >About</Link></li>
                                       <li><Link to='/services'>Service</Link></li>
                                       <li><Link to="/works">Works</Link></li>
                                       <li><Link to= '/blog'>News</Link>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="blog.html">Blog 3 Column</a>
                                                </li>
                                                <li>
                                                    <a href="blog-sidebar.html">Blog Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                       <li><a href="shop.html">Shop</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="shop.html">Product Page</a>
                                                </li>
                                                <li>
                                                    <a href="product-details.html">Product Details</a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">Shopping Cart</a>
                                                </li>
                                            </ul>
                                        </li>
                                       <li><a href="#">Pages</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="contact.html">Conatct</a>
                                                </li>
                                                <li>
                                                    <a href="careers.html">Careers</a>
                                                </li>
                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="service.html">Service</a>
                                                </li>
                                                <li>
                                                    <a href="portfolio-details.html">Portfolio Details</a>
                                                </li>
                                                <li>
                                                    <a href="product-details.html">Product Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                   </ul>
                               </nav>
                           </div>
                           <div className="mobile-menu"></div>
                       </div>
      </>
    )
}

export default menu;
