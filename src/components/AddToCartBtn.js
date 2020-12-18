import React from 'react'

const AddToCartBtn = ({ addToCart, index }) => {
	return (
		<button data-add={index} className="btn" onClick={addToCart}>
			Add to cart
		</button>
	)
}

export default AddToCartBtn
