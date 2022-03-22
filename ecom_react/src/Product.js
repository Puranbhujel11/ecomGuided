import React from 'react';
import Records from './productData.json';

function Product(){
    return (
<main class="content">

<div class="products">
        {
            Records.map(record => (
                <div>
                <a href={record.image}><img src={record.image} alt=""/></a>
                <h1>{record.title}</h1>
                <p>{record.price}</p>
                <p>{record.desc}</p>
                <button><a href="product.html">Add to cart</a></button>
                </div>
            ))
        }
</div>

<div class="products">
    <a href="img/cleats1.jpeg"><img
            src="assets/images/cleats1.jpeg"
            alt=""/></a>
    <h1>Nike Mercurial</h1>
    <p>$89.99</p>
    <p>The Nike Mercurial sets you up for speed. </p>
    <button><a href="product.html">Add to cart</a></button>
</div>

<div class="products">
    <a href="img/cleats2.jpeg"><img
            src="assets/images/cleats2.jpeg"
            alt=""/></a>
    <h1>Adidas Superfly </h1>
    <p>$65.99</p>
    <p>Robust Challenge</p>
    <button><a href="product.html">Add to cart</a></button>
</div>

<div class="products">
    <a href="img/cleats3.jpeg"><img src="assets/images/cleats3.jpeg" alt=""/></a>
    <h1>Nike Premier II FG</h1>
    <p>$49.99</p>
    <p>Soft kangaroo leather conforms to your foot for a classic.</p>
    <button><a href="product.html">Add to cart</a></button>
</div>

<div class="products">
    <a href="img/cleats4.jpeg"><img src="assets/images/cleats4.jpeg" alt=""/></a>
    <h1>Nike Mercurial FG</h1>
    <p>$99.99</p>
    <p>dynamic fit collar and versatile multi-surface</p>
    <button><a href="product.html">Add to cart</a></button>
</div>

<div class="products">
    <a href="img/kit1.jpeg"><img src="assets/images/kit1.jpeg" alt=""/></a>
    <h1>Barcelona Home Kit</h1>
    <p>$32.99</p>
    <p>The FC Barcelona Stadium Home Jersey features highly breathable fabric.</p>
    <button><a href="product.html">Add to cart</a></button>
</div>

<div class="products">
    <a href="img/kit2.jpeg"><img src="assets/images/kit2.jpeg" alt=""/></a>
    <h1>Real Madrid Kit</h1>
    <p>$32.99</p>
    <p>This shirt will keep you comfortable with soft fabric and moisture-absorbing AEROREADY.</p>
    <button><a href="product.html">Add to cart</a></button>
</div>

<div class="products">
    <a href="img/kit3.jpeg"><img src="assets/images/kit3.jpeg" alt=""/></a>
    <h1>Bayern Munich Kit</h1>
    <p>$32.99</p>
    <p>By buying cotton products from us, you're supporting more sustainable cotton farming.</p>
    <button><a href="product.html">Add to cart</a></button>
</div>
 
<div class="products">
    <a href="img/kit4.jpeg"><img src="assets/images/kit4.jpeg" alt=""/></a>
    <h1>Liverpool Kit</h1>
    <p>$32.99</p>
    <p>Highly breathable fabric helps keep sweat off your skin.</p>
    <button><a href="product.html">Add to cart</a></button>
</div>
</main>
    )
}

export default Product;