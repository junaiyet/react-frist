import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <>
    <section className="footer-part">
    <div className="container">
        <div className="logo">
            <img src="images/logo.png" alt="logo.p" />
            <p>Lorem Ipsum is simply dummy text ofing and typesetting industry. Lorem Ipsuasn the industry's standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet, consectetur. </p>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fas fa-globe"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-linkedin-in"></i>
        </div>
        <div className="contact">
            <h3>Contact Us</h3>
            <ul>
                <li>
                    <i className="fas fa-map-marker-alt"></i>
                    1234, Park Street Avenue, NewYork America.
                </li>
            </ul>
            <ul>
                <li>
                    <i className="far fa-envelope"></i>

                    information@adminrosui.com helptotal@adminrosui.com

                </li>
            </ul>
            <ul>
                <li>
                    <i className="fas fa-phone"></i>
                    <div className="one">+880 1234 5678</div>
                    <div className="two">+880 9876 5432</div>


                </li>
            </ul>
        </div>
        <div className="important">
            <h3>Important Links</h3>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our Services</li>
                <li>Our Portfolio</li>
                <li>Contact us</li>

            </ul>
        </div>
        <div className="flikr">
            <div className="filckr_heading">
                <h3>Filckr Stream</h3>
            </div>
            <div className="filckr_item">
                <div className="filckr_item_img">
                    <img src="images/footer-img1.png" alt="footer-img1" />
                </div>


                <div className="filckr_item_img">
                    <img src="images/footer-img2.png" alt="footer-img1" />
                </div>

                <div className="filckr_item_img">
                    <img src="images/footer-img3.png" alt="footer-img1" />
                </div>

                <div className="filckr_item_img">
                    <img src="images/footer-img4.png" alt="footer-img1" />
                </div>

                <div className="filckr_item_img">
                    <img src="images/footer-img5.png" alt="footer-img1" />
                </div>

                <div className="filckr_item_img">
                    <img src="images/footer-img6.png" alt="footer-img1" />
                </div>

                <div className="filckr_item_img">
                    <img src="images/footer-img7.png" alt="footer-img1" />
                </div>

                <div className="filckr_item_img">
                    <img src="images/footer-img8.png" alt="footer-img1" />
                </div>
                <div className="clr"></div>
            </div>
        </div>
        <div className="clr"></div>
    </div>

</section>
<section className="end-part">
				<div className="container">
					<ul>
						<li>Copyright 2018 <span>BIZZENCY</span></li>


						<li>All Rights Reserved</li>


						<li>
							Designed By <span>DESIGNER Katherine</span>
						</li>

					</ul>
				</div>

			</section>
    </>



  )
}

export default Footer