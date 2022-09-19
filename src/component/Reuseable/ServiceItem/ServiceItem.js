import React from 'react'
import "./ServiceItem.css"
function ServiceItem({title, img}) {
  
  return (
    <div className='item'>    
          <div className="main">
    <div className="image">
        <img src={img} alt="our-service-icon" />
    </div>

    <div className="text">
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet, cotur adipisicing elit, sed do eiusmodpor incididunt ut labore et dolore Amar sonar Bangla ami tomay.</p>
    </div>
    <div className="clr"></div>
</div>
<div className="overlay">
    <div className="overlay-content">
        <img src={img} alt="service-icon" />
        <h3>{title}</h3>
    </div>

</div>
</div>
  )
}

export default ServiceItem