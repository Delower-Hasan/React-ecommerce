import React from 'react';
import Slider from 'react-slick';
import HeadImg from '../../../assets/img/bg/head.png'
const TestimonialItems =[
    {
        img: require('../../../assets/img/testimonial/testimonuial1.png'),
        info:"Li lingues differe solmen in li grammatica, li pronuncia tion e li plu commun vocabules. Omnicos directe al desirabilitede un nov lingua fusa continuar.",
        name:'Nathaneal Down',
        designation:" HD Manager"
    },
    {
        img: require('../../../assets/img/testimonial/testimonuial2.png'),
        info:"Li lingues differe solmen in li grammatica, li pronuncia tion e li plu commun vocabules. Omnicos directe al desirabilitede un nov lingua fusa continuar.",
        name:'Nathaneal Down',
        designation:" HD Manager"
    }
]

function Testimonial({}) {
    return (
        <div class="testimonial-area pt-100 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="section-title text-center mb-70">
                                <h2>Client’s testimonial</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>
                    </div>
                    <div class="custom-row">
                        <div class="testimonial-active dot-style">
                            <div className="row">
                                {
                                    TestimonialItems.map(({img,info,name,designation},index)=>(
                                        <div class="col-xl-6">
                                        <div class="testimonial-wrapper text-center">
                                            <div class="testimonial-img">
                                                <img src={img} alt=""/>
                                            </div>
                                            <p>{info} </p>
                                            <div class="client-info">
                                                <h4>{name} </h4>
                                                <span>{designation} </span>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>  
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="cap text-center pt-140">
                                <img src={HeadImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Testimonial;
