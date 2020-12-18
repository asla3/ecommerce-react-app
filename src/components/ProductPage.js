import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = ({ items }) => {
	const [value, setCurrentValue] = useState(1)

	const onChange = (e) => {
		let currentValue = parseInt(e.target.value)
		setCurrentValue(currentValue)
	}

	let { productId } = useParams()
	// eslint-disable-next-line
	const item = items.filter((item) => item.id == productId)

	if (item.length !== 0) {
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
						<img src={item[0].image} alt="" />
					</div>
					<div>
						<h3>{item[0].name}</h3>
						<p>${item[0].price}</p>
						<div className="select-container">
							<form
								onSubmit={(e) => {
									e.preventDefault()
								}}
							>
								<select value={value} onChange={onChange}>
									{options}
								</select>
							</form>
						</div>
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
