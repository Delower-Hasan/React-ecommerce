import React, { PureComponent } from 'react'
import Header from './header';
import $ from 'jquery';
import Slider from './sliders/index'
import Features from './features-area/index'
import Promotion from './promotion-area/promotion';
import Porfolio from './Portfolio/Portfolio'
import Counter from './Counter-area/Counter'
import LatestBlog from './Latest-blog-area/LatestBlog';
import Testimonial from './Testimonial/Testimonial'
import Footer from './Footer-area/Footer'
class Index extends PureComponent {
    componentDidMount(){
        $('.info-bar').on('click',function(){
            $('.extra-info').addClass('info-open');
        })
    
        $('.close-icon').on('click',function(){
            $('.extra-info').removeClass('info-open');
        }) 
          
    }
   
    render() {
       
        return (
            <>
            <Header/>
            <Slider/>
            <Features/>
            <Promotion/>
            <Porfolio/>
            <Counter/>
            <LatestBlog />
            <Testimonial />
            <Footer/>
            </>
        )
    }
}

export default Index