import React, { useState } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import products from './data'

import Home from './pages/Home'
import ShoppingCart from './components/ShoppingCart'
import Error from './pages/Error'
import NavBar from './components/NavBar'

const App = () => {
	const [items, setItems] = useState(products)
	const [shoppingCart, setShoppingCart] = useState([])

	const addToCartBtn = (e) => {
		setShoppingCart([...shoppingCart, items[e.target.name]])
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
				<Route>
					<Error />
				</Route>
			</Switch>
		</div>
	)
}

export default App
