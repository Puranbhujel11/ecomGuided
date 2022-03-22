import React from 'react';

function Footer(){
    return(
        <footer>
		<div id="logoFooter">
			<p className="logo">Soccer United</p>
		</div>
		<p>Copyright&copy; 2021 | Soccer | United</p>
		<div className="media">
			<a href="https://www.facebook.com"><i class="fab fa-facebook"></i></a>&nbsp;|
			<a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>|
			<a href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a>
		</div>
	</footer>
    )
}

export default Footer