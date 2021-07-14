import React from 'react';
import counterImg from '../../../assets/img/bg/bg-counter.jpg';
import CountUp from 'react-countup';
const CounterItem = [
    {
        img:require('../../../assets/img/counter/icon1.png'),
        project: 5120,
        title: 'Happy customers'
    },
    {
        img:require('../../../assets/img/counter/icon2.png'),
        project: 4351,
        title: 'completed projects'
    },
    {
        img:require('../../../assets/img/counter/icon3.png'),
        project: 1200,
        title: 'best engineers'
    },
    {
        img:require('../../../assets/img/counter/icon4.png'),
        project: 98,
        title: 'our branches'
    },
]

function Counter() {
    return (
        <div class="counter-area pt-75 pb-45" style={{backgroundImage:`url(${counterImg})`}}>
        <div class="container">
            <div class="row">
                {
                    CounterItem.map(({img,project,title},index)=>(
                        <div key={index} class="col-xl-3 col-lg-3 col-md-3">
                            <div class="single-couter text-center mb-30">
                            <img src={img} alt=""/>
                            <span class="counter"><CountUp end={project} duration={2.75}/> </span>
                            <p>{title} </p>
                        </div>
                    </div>
                    ))
                }
              
            </div>
        </div>
    </div>
    )
}

export default Counter;
