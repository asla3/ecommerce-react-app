import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import AddToCartBtn from './AddToCartBtn'
import SelectQuantity from './SelectQuantity'

const ProductPage = ({ items, addToCartFunc }) => {
	const [value, setCurrentValue] = useState(1)

	const onChange = (e) => {
		let currentValue = parseInt(e.target.value)
		setCurrentValue(currentValue)
	}

	let { productId } = useParams()
	// eslint-disable-next-line
	const itemIndex = items.findIndex((item) => item.id == productId)

	if (itemIndex !== -1) {
		const options = []

		for (let i = 1; i <= 10; i++) {
			options.push(
				<option name="quantity-1" value={i} key={'qsfkajlf' + i}>
					{i}
				</option>
			)
		}

		return (
			<div id="product-page">
				<div className="flex-container">
					<div className="img-container">
						<img src={items[itemIndex].image} alt="" />
					</div>
					<div>
						<h3>{items[itemIndex].name}</h3>
						<p>${items[itemIndex].price}</p>
						<div className="select-container">
							<SelectQuantity onChangeFunction={onChange} value={value} />
						</div>
						<AddToCartBtn
							index={itemIndex}
							quantity={value}
							addToCartFunc={addToCartFunc}
						/>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div>
			Sorry! We couldn't find that item. Please go back to our homepage and try
			again.
		</div>
	)
}

export default ProductPage
