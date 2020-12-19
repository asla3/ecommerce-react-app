import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import products from './data'
import './App.css'

import Home from './components/Home'
import ProductPage from './components/ProductPage'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import Error from './components/Error'
import NavBar from './components/NavBar'
import GoToCart from './components/GoToCart'

const App = () => {
	const [items] = useState(products)
	const [shoppingCart, setShoppingCart] = useState([])
	const [itemAddedToCart, setItemAddedToCart] = useState(false)

	const addToCartFunc = (e, quantity) => {
		const newCart = [...shoppingCart]
		const index = e.target.dataset.add
		const item = items[index]

		const checkIfAlreadyOnCart = (element) => {
			return element.id === item.id
		}

		const itemOnCartIndex = shoppingCart.findIndex(checkIfAlreadyOnCart)
		if (itemOnCartIndex === -1) {
			item.quantity = quantity
			setShoppingCart([...newCart, item])
		} else {
			const itemOnCart = newCart[itemOnCartIndex]
			if (itemOnCart['quantity'] < 10) {
				// TODO: display popup saying that the max amount of items that can be added to cart has been reached
				itemOnCart['quantity'] += quantity
				setShoppingCart(newCart)
			}
		}
		setItemAddedToCart(true)
	}

	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact>
					<Home products={items} addToCartFunc={addToCartFunc} />
				</Route>
				<Route path="/product/:productId">
					<ProductPage items={items} addToCartFunc={addToCartFunc} />
				</Route>
				<Route path="/cart">
					<ShoppingCart
						shoppingCart={shoppingCart}
						setShoppingCart={setShoppingCart}
					/>
				</Route>
				<Route path="/checkout">
					<Checkout shoppingCart={shoppingCart} />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
			{itemAddedToCart && <GoToCart setItemAddedToCart={setItemAddedToCart} />}
		</div>
	)
}

export default App
