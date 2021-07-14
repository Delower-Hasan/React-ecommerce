import React from 'react';
import aboutImg from '../../../assets/img/bg/page-title.jpg'

function BreadCrum({name}) {
    return (
    <div class="page-title-area pt-160 pb-160" style={{backgroundImage:`url(${aboutImg})`}}>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <div class="page-title text-center">
                        <h1>{name? name : 'About Us'}  </h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">Library</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">{name}  </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BreadCrum;
