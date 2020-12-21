import React from 'react'
import { Link } from 'react-router-dom'

const GoToCart = ({ setItemAddedToCart }) => {
	const handleClick = () => {
		setItemAddedToCart(false)
	}

	return (
		<div>
			<h2>Item added succesfully!</h2>
			<div>
				<Link to="/cart" className="btn" onClick={handleClick}>
					Go to cart
				</Link>
				<button onClick={handleClick}>Keep adding items</button>
			</div>
		</div>
	)
}

export default GoToCart
