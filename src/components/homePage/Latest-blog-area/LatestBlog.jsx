import React from 'react';

const BlogContent =[
    {
        tag:'News',
        BlogDetails:'Four ways to cheer yourself up on Blue Monday!',
        info:'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius mod tempor incididunt utab.',
        date:'Feb 22, 2017'
    },
    {
        tag:'News',
        BlogDetails:'Four ways to cheer yourself up on Blue Monday!',
        info:'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius mod tempor incididunt utab.',
        date:'Feb 22, 2017'
    },
    {
        tag:'News',
        BlogDetails:'Four ways to cheer yourself up on Blue Monday!',
        info:'Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius mod tempor incididunt utab.',
        date:'Feb 22, 2017'
    },
    
    
    
]

function LatestBlog() {
    return (
        <div className="latest-blog-area gray-bg pt-80 pb-120">
        <div className="container">
            <div className="custom-row">
                <div className="blog-active dot-style">
                    <div className="row">
                        {
                            BlogContent.map(({tag,BlogDetails,info,date},index)=>(
                                <div key={index} className="col-xl-4">
                            <div className="blog-wrapper">
                                <div className="blog-inner">
                                    <span className="tag-blog">
                                    <a href="#">{tag} </a>
                                    </span>
                                    <h4>
                                        <a href="blog-details.html">{BlogDetails} </a>
                                    </h4>
                                    <p>{info} </p>
                                    <div className="blog-meta">
                                        <span className="f-left">{date} </span>
                                        <span className="f-right blog-more-btn">
                                            <a href="blog-details.html">
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                                <span className="blog-more">More</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                       </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LatestBlog;
