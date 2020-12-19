import React from 'react'
import { Link } from 'react-router-dom'

const GoToCart = ({ setItemAddedToCart }) => {
	return (
		<div>
			<h2>Item added succesfully!</h2>
			<div>
				<Link
					to="/cart"
					className="btn"
					onClick={() => setItemAddedToCart(false)}
				>
					Go to cart
				</Link>
				<button onClick={() => setItemAddedToCart(false)}>
					Keep adding items
				</button>
			</div>
		</div>
	)
}

export default GoToCart
