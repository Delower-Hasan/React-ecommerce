import React from 'react';
import $ from 'jquery'
const portfolioItems =[
    {
        dataFilter: ['cat1'+' cat5'],
        img:require('../../../assets/img/portfolio/port1.jpg'),
        title:'Aplumber Repairs Pipes',
        subTitle: 'Buildings, Office'

    },
    {
        dataFilter: ['cat4'+' cat5'],
        img:require('../../../assets/img/portfolio/port2.jpg'),
        title:'Aplumber Repairs Pipes',
        subTitle: 'Buildings, Office'

    },
    {
        dataFilter: ['cat3'+' ca6'],
        img:require('../../../assets/img/portfolio/port3.jpg'),
        title:'Aplumber Repairs Pipes',
        subTitle: 'Buildings, Office'

    },
    {
        dataFilter: ['cat1'+' cat4'],
        img:require('../../../assets/img/portfolio/port4.jpg'),
        title:'Aplumber Repairs Pipes',
        subTitle: 'Buildings, Office'

    },
    {
        dataFilter: ['cat1=2'+' cat5'],
        img:require('../../../assets/img/portfolio/port5.jpg'),
        title:'Aplumber Repairs Pipes',
        subTitle: 'Buildings, Office'

    },
 
]




function Portfolio() {
    return (
        <div className="portfolio-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-50">
                                <h2>Recent Projects</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="portfolio-menu mb-40 text-center">
                                <button className="active" data-filter="*">ALL</button>
                                <button data-filter=".cat1">BUILDINGS</button>
                                <button data-filter=".cat2">FAMILY</button>
                                <button data-filter=".cat3">HOUSEGREEN</button>
                                <button data-filter=".cat4">BUILDING</button>
                                <button data-filter=".cat5">INTERIOR</button>
                                <button data-filter=".cat6">OFFICE</button>
                            </div>
                        </div>
                    </div>
                    <div className="row grid">
                        {
                            portfolioItems.map(({dataFilter,img,title, subTitle},index)=>(
                                <div key={index}
                                 
                                className="col-xl-4 col-lg-4 col-md-6 grid-item" >
                                <div className="portfolio-wrapper mb-30">
                                    <div className="portfolio-thumb">
                                        <img src={img} alt=""/>
                                    </div>
                                    <div className="portfolio-content">
                                        <div className="icon"><a className="popup-img" href="img/portfolio/port1.jpg"><span></span></a></div>
                                        <h3><a href="#">{title} </a></h3>
                                        <span>{subTitle} </span>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                      
                        {/* <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat5">
                            <div className="portfolio-wrapper mb-30">
                                <div className="portfolio-thumb">
                                    <img src="img/portfolio/port2.jpg" alt=""/>
                                </div>
                                <div className="portfolio-content">
                                    <div className="icon"><a className="popup-img" href="img/portfolio/port2.jpg"><span></span></a></div>
                                    <h3><a href="#">Aplumber Repairs Pipes</a></h3>
                                    <span>Buildings, Office</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 cat6">
                            <div className="portfolio-wrapper mb-30">
                                <div className="portfolio-thumb">
                                    <img src="img/portfolio/port3.jpg" alt=""/>
                                </div>
                                <div className="portfolio-content">
                                    <div className="icon"><a className="popup-img" href="img/portfolio/port3.jpg"><span></span></a></div>
                                    <h3><a href="#">Aplumber Repairs Pipes</a></h3>
                                    <span>Buildings, Office</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat5 ">
                            <div className="portfolio-wrapper mb-30">
                                <div className="portfolio-thumb">
                                    <img src="img/portfolio/port4.jpg" alt=""/>
                                </div>
                                <div className="portfolio-content">
                                    <div className="icon"><a className="popup-img" href="img/portfolio/port4.jpg"><span></span></a></div>
                                    <h3><a href="#">Aplumber Repairs Pipes</a></h3>
                                    <span>Buildings, Office</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 cat6">
                            <div className="portfolio-wrapper mb-30">
                                <div className="portfolio-thumb">
                                    <img src="img/portfolio/port6.jpg" alt=""/>
                                </div>
                                <div className="portfolio-content">
                                    <div className="icon"><a className="popup-img" href="img/portfolio/port6.jpg"><span></span></a></div>
                                    <h3><a href="#">Aplumber Repairs Pipes</a></h3>
                                    <span>Buildings, Office</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat6">
                            <div className="portfolio-wrapper mb-30">
                                <div className="portfolio-thumb">
                                    <img src="img/portfolio/port5.jpg" alt=""/>
                                </div>
                                <div className="portfolio-content">
                                    <div className="icon"><a className="popup-img" href="img/portfolio/port5.jpg"><span></span></a></div>
                                    <h3><a href="#">Aplumber Repairs Pipes</a></h3>
                                    <span>Buildings, Office</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                       <div className="col-xl-12">
                            <div className="videw-project text-center mt-50">
                                <a href="#" className="btn brand-btn">ALL PROJECTS</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
    )
}

export default Portfolio;
