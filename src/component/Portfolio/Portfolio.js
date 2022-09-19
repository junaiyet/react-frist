import React from 'react'
import Button from '../Reuseable/Button/Button'
import "./portfolio.css"
function Portfolio() {
  return (
    <section className="port-part">
    <div className="title">
        <p>What we done before?</p>
        <h2>Our Portfolio</h2>
        <div className="container">
            <div className="item">
                <div className="imge">
                    <img src="images/prot-img1.png" alt="prot-img1" />
                </div>
                <div className="overlay">
                    Girl Illustration
                </div>

            </div>
            <div className="item">
                <div className="imge">
                    <img src="images/prot-img2.png" alt="prot-img1" />
                </div>
                <div className="overlay">
                    Girl Illustration
                </div>

            </div>
            <div className="item">
                <div className="imge">
                    <img src="images/prot-img3.png" alt="prot-img1" />
                </div>
                <div className="overlay">
                    Girl Illustration
                </div>

            </div>

        </div>
        <div className="clr"></div>
        <div className="btn">
           <Button title="see more"/>
        </div>
    </div>

</section>
  )
}

export default Portfolio