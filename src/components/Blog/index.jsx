import React, { Component } from 'react'
import Header from '../homePage/header'
import BreadCrumb from '../About-page/breadCrumb/BreadCrum'
import BlogArea from './Blog-area/Blog'
class index extends Component {
   

    render() {
        return (
            <>
                <Header/>
                <div class="wrapper-box pl-75 pr-75">
                <BreadCrumb name='News'/>
                <div class="blog-area pt-100 pb-100">
                    <BlogArea/>
                </div>


                </div>
            </>
        )
    }
}

export default index
