import React from 'react';
import {Link} from 'react-router-dom'
import bannerimg from '../../../assets/img/blog/banner.jpg'
const Catagory =[
    'Architecture','Construction','Electrical','Green Housing ','Gardening','Photography'
]
const BlogItem = [
    {
        blogImg: require('../../../assets/img/blog/main/blog1.jpg'),
        title: 'How to Improve your Sales Volume',
        name: 'Tanvir',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsumdolor sit amet, consectetur adipcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        blogImg: require('../../../assets/img/blog/main/blog1.jpg'),
        title: 'How to Improve your Sales Volume',
        name: 'Tanvir',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsumdolor sit amet, consectetur adipcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        blogImg: require('../../../assets/img/blog/main/blog1.jpg'),
        title: 'How to Improve your Sales Volume',
        name: 'Tanvir',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsumdolor sit amet, consectetur adipcing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
]
const recentPost = [
    {
        img: require('../../../assets/img/blog/recent/rp1.jpg'),
        title:'How to Improve Your Sales Volume'
    },
]
function Blog() {
    return (
        <div class="container">
        <div class="row">
            <div class="col-xl-9 col-lg-9 pr-45 blog-space">
                {
                    BlogItem.map(({blogImg,name,info,title},index)=>(
                        <div key={index} class="blog-item blog-post mb-50">
                        <div class="blog-thumb">
                            <Link to ='/blog'><img src={blogImg} alt=""/> </Link>
                            
                        </div>
                        <div class="blog-item-content">
                            <h3><a href="blog-details.html">{title} </a></h3>
                            <div class="post-meta">
                                <span><a href="#">{name} </a></span>
                                <span>07 May</span>
                                <span><a href="#">02 Comments</a></span>
                            </div>
                            <p>{info} </p>
                        </div>
                    </div>
                    ))
                }
            </div>

            <div class="col-xl-3 col-lg-3">
                <div class="sidebar-widget mb-50">
                    <h3>Categories</h3>
                    <ul class="cat">
                        {
                            Catagory.map((cat,index)=>(
                                <li><a href="#">{cat} (5)</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div class="sidebar-widget mb-50">
                    <h3>Recent Posts</h3>
                    <ul class="rc-post">
                        {
                            recentPost.map(({img,title},index)=>(
                                <li>
                                <div class="rc-post-img">
                                    <a href="blog-details.html"><img src={img} alt=""/></a>
                                </div>
                                <div class="rc-post-content">
                                    <h5><a href="blog-details.html">{title} </a></h5>
                                    <span>On : Feb 12, 2018</span>
                                </div>
                            </li>
                            ))
                        }

                   
                  
                    </ul>
                </div>
                <div class="sidebar-widget mb-50">
                    <h3>Banner</h3>
                    <div class="banner">
                        <a href="#"><img src={bannerimg} alt=""/></a>
                    </div>
                </div>
                <div class="sidebar-widget mb-50">
                    <h3>Tags</h3>
                    <ul class="tags">
                        <li><a href="#">Kitchen</a></li>
                        <li><a href="#">Drain</a></li>
                        <li><a href="#">Kitchen</a></li>
                        <li><a href="#">Plumbing</a></li>
                        <li><a href="#">Pipe</a></li>
                        <li><a href="#">Tips</a></li>
                        <li><a href="#">Modern</a></li>
                        <li><a href="#">Outside</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <nav class="construction-pagination" aria-label="Page navigation example">
                    <ul class="pagination justify-content-start">
                        <li class="page-item active">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

export default Blog;
