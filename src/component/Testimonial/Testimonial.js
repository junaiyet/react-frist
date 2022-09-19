import React from 'react'
import "./testimonial.css"
function Testimonial() {
  return (
    <section className="testi-part">
    <div className="title">
        <p>What people say?</p>
        <h2>Our Testimonial</h2>
    </div>
    <div className="container">
        <div className="item">
            <div className="image">
                <img src="images/testi-img1.png" alt="testi.img" />
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod tempor incidt ut labore et dolore magna aliqua. Ut enim ad minim veniais nostrud exercitation ullamco.</p>
                <h5>San Fransisco</h5>
                <h6>CEO- Nation IT</h6>
            </div>
        </div>
        <div className="item">
            <div className="image">
                <img src="images/testi-img2.png" alt="testi.img" />
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipng elit, sed do eiusmod tempor incidt ut labore et dolore magna aliqua. Ut enim ad minim veniais nostrud exercitation ullamco.</p>
                <h5>San Fransisco</h5>
                <h6>CEO- Nation IT</h6>
            </div>
        </div>
        <div className="clr"></div>
        <div className="clr"></div>
    </div>
    <div className="clr"></div>
</section>
  )
}

export default Testimonial