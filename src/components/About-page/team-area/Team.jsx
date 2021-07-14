import React from 'react';
const socialicon =[
    'fab fa-facebook-f','fab fa-twitter',"fab fa-google-plus-g","fab fa-instagram"
]
const TeamInfo =[
    {
        img:require('../../../assets/img/team/member1.png'),
        name: 'Jackson Nash',
        title:'Massagist'
    },
    {
        img:require('../../../assets/img/team/member2.png'),
        name: 'Jackson Nash',
        title:'Massagist'
    },
    {
        img:require('../../../assets/img/team/member3.png'),
        name: 'Jackson Nash',
        title:'Massagist'
    },
    {
        img:require('../../../assets/img/team/member4.png'),
        name: 'Jackson Nash',
        title:'Massagist'
    },
]

function Team() {
    return (
      
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section-title text-center mb-70">
                        <h2>Meet Our Experts</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    TeamInfo.map(({img,name,title},index)=>(
                        <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="team-box text-center mb-30 white-bg">
                            <div className="team-thumb">
                                <img src={img} alt=""/>
                            </div>
                            <div className="team-title">
                                <h3>{name} </h3>
                                <span>{title} </span>
                            </div>
                            <div className="team-about-icon">
                                {
                                    socialicon.map((social,index)=>(
                                <a  key={index} href="#">
                                    <i className={social}></i>
                                </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    ))
                }
              
            </div>
        </div>
 
    )
}

export default Team;
