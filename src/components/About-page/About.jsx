import React, { Component } from 'react'
import Header from '../homePage/header'
import BreadCrumb from './breadCrumb/BreadCrum';
import Promotion from '../homePage/promotion-area/promotion'
import Team from './team-area/Team'
import Counter from '../homePage/Counter-area/Counter'
import Footer from '../homePage/Footer-area/Footer'

class About extends Component {
    

    render() {
        return (
            <>
            <Header/>
            <div className="wrapper-box pl-75 pr-75" >
            <BreadCrumb />
                <div className="mt-100 mb-100">
                <Promotion />
                </div>
              
               <div class="team-area gray-bg pt-100 pb-70">
                <Team/>
               </div>

               <div className="counter-area mt-100 mb-100">
                    <Counter/>
               </div>
            </div>
            <div className="footer-area">
                <Footer/>
            </div>
           
            </>
        )
    }
}

export default About
