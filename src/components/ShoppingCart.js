import React from 'react'
import { Link } from 'react-router-dom'

import SelectQuantity from './SelectQuantity'
import Total from './Total'

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {
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
										<SelectQuantity
											onChangeFunction={quantityChange}
											value={quantity}
											index={index}
										/>
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
