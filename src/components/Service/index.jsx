import React, { PureComponent } from 'react'
import Header from '../homePage/header'
import BreadCrumb from '../About-page/breadCrumb/BreadCrum'
import Services from './service-items/Services'
import Footer from '../homePage/Footer-area/Footer'
class Index extends PureComponent {

    render() {
        
        return (
            <>
            <Header/>
            <div class="wrapper-box pl-75 pr-75">
            <BreadCrumb name= 'Services' />
            <div className="services-area pt-100 pb-40">
            <Services/>
            </div>
            <Footer/>
            </div>
            
               
            </>
            
        )
    }
}

export default Index