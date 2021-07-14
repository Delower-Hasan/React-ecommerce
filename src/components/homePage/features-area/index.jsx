import React, { Component } from 'react'
const featuresItems =[
    {
        img: require('../../../assets/img/icon/features1.png'),
        title:'Floors & Roofs',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
    },
    {
        img: require('../../../assets/img/icon/features2.png'),
        title:'Rooms & Halls',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
    },
    {
        img: require('../../../assets/img/icon/features3.png'),
        title:'Bassments',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
    },
]
class index extends Component {
    render() {
        return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="features-title text-center mb-80">
                            <h2>Stay motivated <br/>  <span>to lead your business.</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        featuresItems.map(({img,title,desc},index)=>(
                            <div key={index} className="col-xl-4 col-lg-4 col-md-4">
                            <div className="single-features text-center mb-30">
                                <img src={img} alt=""/>
                                <h2>{title}</h2>
                                <p> {desc} </p>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
        )
    }
}

export default index
