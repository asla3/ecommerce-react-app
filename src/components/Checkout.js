import React from 'react'

import {
	Elements,
	CardElement,
	useElements,
	useStripe,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const CheckoutForm = () => {
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault()

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardElement)

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		})

		if (error) {
			console.log('[error]', error)
		} else {
			console.log('[PaymentMethod]', paymentMethod)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<button type="submit" disabled={!stripe}>
				Pay
			</button>
		</form>
	)
}

const Checkout = ({ shoppingCart }) => {
	const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG')
	if (shoppingCart.length > 0) {
		return (
			<Elements stripe={stripePromise}>
				<CheckoutForm />
			</Elements>
		)
	}
	return (
		<div>
			<p>Your shopping cart is empty. Please add more items to checkout.</p>
		</div>
	)
}

export default Checkout
