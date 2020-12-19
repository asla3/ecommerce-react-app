import React from 'react'
import { Link } from 'react-router-dom'

import AddToCartBtn from './AddToCartBtn'

const ProductsShowcase = ({ products, addToCartFunc }) => {
	return (
		<div>
			{products.map((item, index) => {
				return (
					<div className="product" key={item.id}>
						<Link to={`/product/${item.id}`}>
							<div className="productContainer">
								<img src={item.image} className="product-image" alt="" />
								<h3>{item.name}</h3>
								<p>${item.price}</p>
							</div>
						</Link>
						<AddToCartBtn index={index} addToCartFunc={addToCartFunc} />
					</div>
				)
			})}
		</div>
	)
}

export default ProductsShowcase
