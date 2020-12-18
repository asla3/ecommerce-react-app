import React from 'react'
import { Link } from 'react-router-dom'

import Total from './Total'

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
	const onSubmit = (e) => {
		e.preventDefault()
	}

	const quantityChange = (e) => {
		const newCart = [...shoppingCart]
		const index = e.target.dataset.index
		newCart[index]['quantity'] = parseInt(e.target.value)
		setShoppingCart(newCart)
	}

	const removeFromShoppingCart = (e) => {
		const shoppingCartItems = [...shoppingCart]
		const index = e.target.dataset.remove
		shoppingCartItems.splice(index, 1)
		setShoppingCart(shoppingCartItems)
	}

	if (shoppingCart.length > 0) {
		const options = []

		for (let i = 1; i <= 10; i++) {
			options.push(
				<option name="quantity-1" value={i} key={'qsfkajlf' + i}>
					{i}
				</option>
			)
		}
		return (
			<div>
				<h1>
					There's {shoppingCart.length} item{shoppingCart.length > 1 && 's'} in
					your shopping cart.
				</h1>
				{shoppingCart.map((item, index) => {
					const { id, name, price, image, quantity } = item
					return (
						<div key={id}>
							<div className="flex-container">
								<Link to={`/product/${id}`}>
									<div className="product-container">
										<div className="img-container">
											<img src={image} alt="" />
										</div>
										<div className="item-info">
											<h2>{name}</h2>
											<p>${price}</p>
										</div>
									</div>
								</Link>
								<div className="remove-quantity">
									<div className="quantity">
										<form onSubmit={onSubmit}>
											<select
												id="quantity"
												data-index={index}
												onChange={quantityChange}
												value={quantity}
											>
												{options}
											</select>
										</form>
									</div>
									<div className="remove-container">
										<button
											data-remove={index}
											onClick={removeFromShoppingCart}
										>
											x
										</button>
									</div>
								</div>
							</div>
						</div>
					)
				})}
				<Total shoppingCart={shoppingCart} />
			</div>
		)
	}

	return <div>There's no items in the shopping cart</div>
}

export default ShoppingCart
