import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const [activeItem, setActiveItem] = useState('')

	const handleItemClick = (e, { name }) => setActiveItem(name)

	return (
		<Menu>
			<Link to="/">
				<Menu.Item
					name="home"
					active={activeItem === 'home'}
					onClick={handleItemClick}
				>
					Home
				</Menu.Item>
			</Link>

			<Link to="/cart">
				<Menu.Item
					name="cart"
					active={activeItem === 'cart'}
					onClick={handleItemClick}
				>
					Cart
				</Menu.Item>
			</Link>

			{/* TODO: log out and account options for when user is logged in */}
		</Menu>
	)
}

export default NavBar
