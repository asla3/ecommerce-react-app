import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import products from './data'
import './App.css'

import Home from './pages/Home'
import ShoppingCart from './components/ShoppingCart'
import Checkout from './components/Checkout'
import Error from './pages/Error'
import NavBar from './components/NavBar'

const App = () => {
	const [items] = useState(products)
	const [shoppingCart, setShoppingCart] = useState([])

	const addToCartBtn = (e) => {
		const index = e.target.dataset.add
		const item = items[index]

		const checkIfAlreadyOnCart = (element) => {
			return element.id === item.id
		}

		if (!shoppingCart.some(checkIfAlreadyOnCart)) {
			item.quantity = 1
			setShoppingCart([...shoppingCart, item])
		} else {
			// TODO: add more quantity when item is already in cart
			console.log('item already in cart')
		}
	}

	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact>
					<Home products={items} addToCartBtn={addToCartBtn} />
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
		</div>
	)
}

export default App
