import React from 'react';
const BrandImg = [
    {
        img: require('../../../assets/img/brand/brand1.png')
    },
    {
        img: require('../../../assets/img/brand/brand2.png')
    },
    {
        img: require('../../../assets/img/brand/brand3.png')
    },
    {
        img: require('../../../assets/img/brand/brand4.png')
    },
    {
        img: require('../../../assets/img/brand/brand5.png')
    },
    {
        img: require('../../../assets/img/brand/brand1.png')
    },
]
function Brand() {
    return (
        <div class="brand-area gray-bg">
             <div class="container">
            <div class="brand-active brand-border pt-50 pb-50">
                <div className="row">
                {
                    BrandImg.map(({img},index)=>(
                        <div className="col-lg-2">
                        <div key={index} class="single-brand">
                            <a href="#"><img src={img} alt=""/></a>
                        </div>
                        </div>
                    ))
                }
                </div>
               
            
              
            </div>
        </div>
    </div>
    )
}

export default Brand;
