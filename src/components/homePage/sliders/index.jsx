import React, { Component } from 'react'

import WOW from 'wowjs';
import Slider from 'react-slick';
import $ from 'jquery'
const sliderImage = [
    {
        img:require('../../../assets/img/slider/slide1.jpg'),
        span: 'we are startup business',
        title: 'BUILDING WORLD TOGETHER',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Nullam convallis.',
        action:'Purchase theme',
        slideImg: require('../../../assets/img/slider/transparent-slide.png')
    },

   
]


class index extends Component {
    componentDidMount() {
        new WOW.WOW().init();
      }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
       
          };  
        return (
            <div className="slider-area">
                <div className="container">
                    <Slider {...settings}>
                   
                    {
                        sliderImage.map(({img,span,title,para,action,slideImg},index)=>(
                            <div className="slider-active dot-style">
                            <div key = {index} className="single-slider slider-height d-flex align-items-center" style={{backgroundImage:`url(${img})`}}  >
                            <div className="container">
                                <div className="row ">

                                    <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                                         <div className="slider-content">
                                         <span className='wow fadeInLeft'  data-delay=".5s">{span}</span>
                                             <h1 className='wow fadeInLeft' data-delay="1s">{title}</h1>
                                             <p className='wow fadeInLeft' data-delay="1.5s"> {para} </p>
                                             <a  className='wow fadeInLeft' data-delay="2s" href="#" className="btn">{action} </a>
                                         </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                                         <div className="slide-img text-right wow fadeInRight"  data-delay="2.5s">
                                             <img src={slideImg} alt=""/>
                                         </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                        ))
                    }
                    </Slider>
                </div>
            </div>
        )
    }
}

export default index
