import React from 'react';

function Services() {
    const serviceItems =[
        {
            icon:'far fa-lightbulb',
            title: "Floors & Roofs",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
        },
        {
            icon:'far fa-comments',
            title: "Metal Roofing",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
        },
        {
            icon:'far fa-handshake',
            title: "Consulting",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
        },
        {
            icon:'fas fa-umbrella',
            title: "Smart Home",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
        },
        {
            icon:'fas fa-bolt',
            title: "Electrical",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
        },
        {
            icon:'fas fa-paint-brush',
            title: "Painting",
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis fermentumurna vitae.'
        },
    ]
    return (
        
        <div className="container">
            <div className="row">
                {
                    serviceItems.map(({icon,title,info},index)=>(
                        <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                        <div className="service-box mb-60">
                            <i className={icon}></i>
                            <h3>{title} </h3>
                            <p>{info} </p>
                        </div>
                    </div>
                    ))
                }
               
            
            </div>
        </div>
          
    )
}

export default Services;
