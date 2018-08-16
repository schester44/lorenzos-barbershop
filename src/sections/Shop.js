import React from "react"
import styled from "styled-components"

const Container = styled("div")`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 7em 1em 3.5em 1em;
	border-bottom: 2px dashed rgba(32, 32, 32, 0.1);

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
