import React from 'react'

const AddToCartBtn = ({ addToCartFunc, index, quantity = 1 }) => {
	return (
		<button
			data-add={index}
			className="btn"
			onClick={(e) => addToCartFunc(e, quantity)}
		>
			Add to cart
		</button>
	)
}

export default AddToCartBtn
