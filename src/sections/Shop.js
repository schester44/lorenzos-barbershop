import React from "react"
import styled from "styled-components"

import lafx from "../lafx.png"
import Section from "../components/Section"

const Container = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;

	.lafx {
		@media (min-width: 768px) {
			max-width: 50%;
		}

		margin-bottom: 40px;

		.top {
			display: flex;
			align-items: center;

			h4 {
				text-align: center;
				font-size: 26px;
				line-height: 1.5;
			}
		}

		img {
			margin-right: 25px;
			width: 150px;
			height: 150px;
			min-width: 150px;
		}
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

const Shop = props => {
	return (
		<Section {...props} title="Shop">
			<Container>
				<div className="lafx">
					<div className="top">
						<img src={lafx} alt="LA Effects" />
						<h4>LA Effects is a premium brand dedicated to influencing others through art, culture, and design.</h4>
					</div>
				</div>

				<h3>
					We sell and feature the mon valley's largest collection of exclusive shoes, art, and photography.
					<br />
					Shop online or at the barbershop!
				</h3>

				<a href="https://laeffects.myshopify.com/" title="Lorenzo's Shop">
					Click here to see whats in stock
				</a>
			</Container>
		</Section>
	)
}

export default Shop
