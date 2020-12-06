import React from 'react'

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
	//const {}

	if (shoppingCart.length === 0) {
		return <div>There's no items in the shopping cart</div>
	}
	return (
		<div>
			<h1>Items:</h1>
		</div>
	)
}

export default ShoppingCart
