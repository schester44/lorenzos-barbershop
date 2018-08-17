import React from "react"
import styled from "styled-components"

import lafx from "../lafx.png"

const Container = styled("div")`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 7em 1em 3.5em 1em;
	border-bottom: 2px dashed rgba(32, 32, 32, 0.1);
	

	.lafx {

		@media (min-width: 768px) {
			max-width: 50%;
		}

		margin-bottom: 40px;
		
		.top {
			display: flex;
			align-items: center;
		}

		h4 {
			text-align: center;
			font-size: 26px;
		}

		img {
			margin-right: 25px;
			width: 150px;
			height: 150px;
			min-width: 150px;
		}
	}

	h1 {
		font-weight: 700;
		margin-bottom: 0.5em;
		font-size: 60px;
		text-align: center;
		font-family: "Kaushan Script", cursive;
	}

	h3 {
		text-align: center;
		margin-bottom: 20px;
		line-height: 1.5;
	}

	a {
		font-size: 20px;
	}
`

const Shop = () => {
	return (
		<Container>
			<div className="lafx">
				<div className="top">
					<img src={lafx} alt="LA Effects" />
					<h4>LA Effects is a premium brand dedicated to influencing others through art, culture, and design.</h4>
				</div>
			</div>

			<h1>Shop</h1>
			<h3>
				We sell and feature the mon valley's largest collection of exclusive shoes, art, and photography.
				<br />
				Shop online or at the barbershop!
			</h3>

			<a href="https://laeffects.myshopify.com/" title="Lorenzo's Shop">
				Click here to see whats in stock
			</a>
		</Container>
	)
}

export default Shop
