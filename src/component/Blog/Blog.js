import React from 'react'
import Button from '../Reuseable/Button/Button'

import "./blog.css"
function Blog() {
  return (
    <section className="blog-part">
    <div className="title">
        <p>What people say?</p>
        <h2>Our Blog</h2>
    </div>
    <div className="container">
        <div className="item">
            <div className="main">
                <div className="image">
                    <img src="images/blog-img1.png" alt="blog-img1.png" />
                </div>
                <div className="text">
                    <p>26 October 2018</p>
                    <h3>38 things you should save in your business</h3>
                    <a href="#">Read More
                    <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                </div>
            </div>

        </div>

        <div className="item">
            <div className="main">
                <div className="image">
                    <img src="images/blog-img2.png" alt="blog-img2.png" />
                </div>
                <div className="text">
                    <p>26 October 2018</p>
                    <h3>38 things you should save in your business</h3>
                    <a href="#">Read More
                    <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                </div>
            </div>

        </div>


        <div className="item">
            <div className="main">
                <div className="image">
                    <img src="images/blog-img3.png" alt="blog-img3.png" />
                </div>
                <div className="text">
                    <p>26 October 2018</p>
                    <h3>38 things you should save in your business</h3>
                    <a href="#">Read More
                    <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                </div>
            </div>

        </div>
    </div>
    <div className="clr"></div>
    <div className="btn-area" >
    <Button title="Browse All"/>
  
    </div>
    <div className="clr"></div>
</section>
  )
}

export default Blog