import React from 'react'
import ServiceItem from '../Reuseable/ServiceItem/ServiceItem'


function Service() {
  return (
    <section className="service-part">
    <div className="title">
        <h5>What we do?</h5>
        <h2> Our Services</h2>
    </div>
    <div className="container">
  
        <ServiceItem title="Ui/Ux Design" img="images/our-service-icon-1.png"/>
        <ServiceItem title="Web Design" img="images/our-service-icon-2.png" />
        <ServiceItem title="Grapic Design" img="images/our-service-icon-3.png" />
    </div>
    <div className="clr"></div>
</section>
  )
}

export default Service