import React from 'react'

import Products from '../components/ProductsShowcase.js'

const Home = ({ products, addToCartFunc }) => {
	return (
		<div>
			Home
			<Products products={products} addToCartFunc={addToCartFunc} />
		</div>
	)
}

export default Home
