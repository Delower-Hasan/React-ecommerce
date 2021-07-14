import React from 'react';
import Brand from './Brand'
function Footer() {
    return (
        <footer>
        <Brand/>
        <div class="widget-area gray-bg pt-60 pb-30">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-3 col-md-4 mb-30">
                        <div class="footer-widget">
                            <h3>Contact Us</h3>
                            <ul class="footer-info">
                                <li>1 (800) 686-6688    </li>
                                <li>name.ar@gmail.com</li>
                                <li>40 Baria Sreet 133/2 NewYork City, US</li>
                                <li>NewYork City, US</li>
                                <li>Open hours: 8.00-18.00 Mon-Fri</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 col-md-3 mb-30">
                        <div class="footer-widget">
                            <h3>Usefull links</h3>
                            <ul class="footer-link">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Single Service</a></li>
                                <li><a href="#">Work</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Support Career</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-5 mb-30">
                        <div class="footer-widget">
                            <h3>Our Newsletter</h3>
                            <p>Subscribe to our mailing list to get the up dates to your email inbox.</p>
                            <form action="#">
                                <input type="email" placeholder="E-mail"/>
                                <button>Subscribe</button>
                            </form>
                            <div class="footer-icon mt-30">

                                <a href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-google-plus-g"></i>
                                </a>
                                <a href="#">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area pt-25 pb-25">
            <div class="container">
                <div class="copyright-text text-center ">
                    <p>Copyright ©2018 Mugli. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
