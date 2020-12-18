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

const App = () => {
	const [items] = useState(products)
	const [shoppingCart, setShoppingCart] = useState([])

	const addToCartBtn = (e) => {
		const newCart = [...shoppingCart]
		const index = e.target.dataset.add
		const item = items[index]

		const checkIfAlreadyOnCart = (element) => {
			return element.id === item.id
		}

		const itemOnCartIndex = shoppingCart.findIndex(checkIfAlreadyOnCart)
		if (itemOnCartIndex === -1) {
			item.quantity = 1
			setShoppingCart([...newCart, item])
		} else {
			const itemOnCart = newCart[itemOnCartIndex]
			if (itemOnCart['quantity'] < 10) {
				itemOnCart['quantity'] += 1
				setShoppingCart(newCart)
			}
		}
	}

	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/" exact>
					<Home products={items} addToCartBtn={addToCartBtn} />
				</Route>
				<Route path="/product/:productId">
					<ProductPage items={items} />
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
