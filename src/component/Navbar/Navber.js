
import React from 'react'
import "./navber.css"
function Navber() {
  return (
	<nav>
			<div className="container">
				<div className="logo">
					<img src="images/logo.png" alt="logo"/>
				</div>
				<div className="nav-item">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About us</a></li>
						<li><a href="#">Our Services</a></li>
						<li><a href="#">Protfolio</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
			</div>
			<div className="clr"></div>
		</nav>
  )
}

export default Navber