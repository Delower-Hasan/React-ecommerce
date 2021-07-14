import React, { Component } from 'react'
import Header from '../homePage/header'
import BreadCrump from '../About-page/breadCrumb/BreadCrum'
import RecentProject from '../homePage/Portfolio/Portfolio'
import Counter from '../homePage/Counter-area/Counter'
import Footer from '../homePage/Footer-area/Footer'
class index extends Component {
 

    render() {
        return (
            <>
            <Header/>
            <div class="wrapper-box pl-75 pr-75">
            <BreadCrump name = 'Works'/>
            <RecentProject/>
            <Counter/>
            <div className="mt-100">
            <Footer/>
            </div>
            
            </div>
            
                
            </>
        )
    }
}

export default index
