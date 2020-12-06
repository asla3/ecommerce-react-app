import React from 'react'

import Products from '../components/ProductsShowcase.js'

const Home = ({ products, addToCartBtn }) => {
	return (
		<div>
			Home
			<Products products={products} addToCartBtn={addToCartBtn} />
		</div>
	)
}

export default Home
