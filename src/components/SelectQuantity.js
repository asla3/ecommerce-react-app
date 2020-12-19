import React from 'react'

const SelectQuantity = ({ index, onChangeFunction, value }) => {
	const options = []

	for (let i = 1; i <= 10; i++) {
		options.push(
			<option name="quantity-1" value={i} key={'qsfkajlf' + i}>
				{i}
			</option>
		)
	}

	const onSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={onSubmit}>
			{index !== 'undefined' ? (
				<select
					id="quantity"
					data-index={index}
					onChange={onChangeFunction}
					value={value}
				>
					{options}
				</select>
			) : (
				<select id="quantity" onChange={onChangeFunction} value={value}>
					{options}
				</select>
			)}
		</form>
	)
}

export default SelectQuantity
