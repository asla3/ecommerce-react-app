import React from 'react'

const ProductsShowcase = ({ products, addToCartBtn }) => {
	return (
		<div>
			{products.map((item, index) => {
				return (
					<div className="product" key={item.id}>
						<img src={item.image} className="product-image" alt="" />
						<h3>{item.name}</h3>
						<p>${item.price}</p>
						<button data-add={index} clasName="btn" onClick={addToCartBtn}>
							Add to cart
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default ProductsShowcase
