import React from 'react'
import "./about.css"
import Button from '../Reuseable/Button/Button'
function About() {
  return (
<section className="about-part">
<div className="container">
<div className="text">
<div className="title">
	<h5>Who we are</h5>
	<h2> About us</h2>
	<div className="details">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodpor nt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exion ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<ul>

			<li>We are the best in the line, worldwide.</li>
			<li>No more wasting time, Eveeryone can animate.</li>
			<li>We work with orgnizations to craft immersive customer experience.</li>
			<li>We are committed to make your business successful.</li>
			<li>We can make your business successful that you had not ever think.</li>
		</ul>
		<Button title="Know more" />
		<Button title="Read more" />

	</div>
</div>
</div>
<div className="img">
<img src="images/about-img.png" alt="about-img.png" />
</div>
</div>
<div className="clr"></div>
</section>
   
  )
}

export default About