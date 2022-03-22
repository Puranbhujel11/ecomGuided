import React from 'react';
import heroImg from './ecomhero.jpeg'
const hero = {
    backgroundImage: `url(${heroImg})`,
}

function Home(){
    return (
        <main>
	<section id="hero" style={hero}>
		<div className="hero-content">
			<h1>Charlotte's Finest Soccer Experience</h1>
			<a href="./Product">SHOP NOW</a>
		</div>
	</section>

	<section>
		<h1 className="topic">Our Culture</h1>
		<div className="container">
			<div className="row">
				<div className="col">
					<p>
						At Soccer United you have the finest soccer specialists at your
						disposal when it comes to footwear, apparel and equipment so all
						you have to worry about is playing the best game of your life.
					</p>
					<br />
					<p>
						Soccer United's team Division can outfit your club or team from
						head to toe with the most current elite soccer brands. Buy soccer
						shoes, shin guards, and even club gear here! Best Buy Soccer
						carries exclusive products from Nike, adidas, Puma, Under Amour,
						and many more.
					</p>
					<br />
					<p>
						When you buy soccer shoes online at Best Buy Soccer, you receive
						the best all-around products and customer service. If you want to
						buy soccer equipment from our online store but can’t find what you
						are looking for, please contact us. We will have one of our Team
						Sales Representatives work with you today.
					</p>
				</div>
				<div className="col">
					<img className="gif" src="assets/images/leo.gif" alt="" />
				</div>
			</div>
		</div>
	</section>

	<section id="seller">
		<h1 className="topic">Best Seller's</h1>
		<div className="container1">
			<div className="row">
				<div className="col">
					<a href="img/top1.jpeg"><img src="assets/images/top1.jpeg" alt="" /></a>
					<h1>Soccer Ball</h1>
					<p>$19.99</p>
					<p>Adidas Soccer Ball</p>
					<button><a href="product.html">Add to cart</a></button>
				</div>
				<div className="col">
					<a href="img/top2.jpeg"><img src="assets/images/top2.jpeg" alt="" /></a>
					<h1>Mini Goal Post</h1>
					<p>$24.99</p>
					<p>Durable weathrpoof uPVC frame</p>
				
					<button><a href="product.html">Add to cart</a></button>
				</div>
				<div className="col">
					<a href="img/top3.jpeg"><img src="assets/images/top3.jpeg" alt="" /></a>
					<h1>training marker cones</h1>
					<p>$14.99</p>
					<p>10 orange training marker cones</p>
					<button><a href="product.html">Add to cart</a></button>
				</div>
				<div className="col">
					<a href="img/top4.jpeg"><img src="assets/images/top4.jpeg" alt="" /></a>
					<h1>GoalKeeper Gloves</h1>
					<p>$29.99</p>
					<p>Adidas Goalkeeper Gloves</p>
					<button><a href="product.html">Add to cart</a></button>
				</div>
			</div>
		</div>
	</section>
    </main>
    )
}

export default Home;