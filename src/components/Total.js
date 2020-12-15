import React from 'react'
import { Link } from 'react-router-dom'

const TotalBox = ({ shoppingCart }) => {
	let total = 0

	shoppingCart.forEach(({ quantity, price }) => {
		const totalPrize = quantity * price
		total += totalPrize
	})

	return (
		<div id="totalbox">
			<p>Your total is: </p>
			<p>${total}</p>
			<Link to="/checkout" className="checkout-btn btn">
				Checkout
			</Link>
		</div>
	)
}

export default TotalBox
