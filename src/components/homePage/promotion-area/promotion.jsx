import React from 'react';
import promotionImg from '../../../assets/img/bg/promotion.jpg';
function promotion() {
    return (
        <div className="promotion-area gray-bg">
        <div className="promotion-img d-none d-md-block" style={{backgroundImage:`url(${promotionImg})`}}></div>
        <div className="container">
            <div className="row">
                <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
                    <div className="promotion-text pt-110 pb-110">
                        <h3>Don’t Wait For <br/> anything. Buy it today! </h3>
                       
                        <span>Do creative for your fashion website</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrudexe rc itation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure.</p>
                        <a href="#" className="btn brand-btn">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    )
}

export default promotion;
