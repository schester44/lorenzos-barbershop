import React, { Component } from "react"
import styled from "styled-components"
import ScrollableAnchor from "react-scrollable-anchor"
import "./App.css"

import QuickInfo from "./components/QuickInfo"
import ServicesTable from "./sections/ServicesTable"
import Hours from "./sections/Hours"
import Header from "./components/Header"

import igicon from "./instagram.png"
import logo from "./logo.png"
import Shop from "./sections/Shop"

const Hero = styled("div")`
	background-image: url("./hero2.jpg");
	background-size: cover;
	background-position: center center;
	height: 100vh;

	.brand {
		width: 100%;
		height: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	img {
		max-width: 80vw;

		@media (min-width: 1024px) {
			max-width: 50vw;
		}
	}

	h3 {
		line-height: 1;
		color: white;
		font-weight: 100;
		font-size: 4vw;
		letter-spacing: 5px;
	}

	@media (min-width: 576px) {
		h1 {
			font-size: 10vw;
		}

		h3 {
			font-size: 2vw;
		}
	}
`

const Footer = styled("div")`
	padding: 25px;
	text-align: center;
	display: flex;
	justify-content: center;

	.link {
		font-size: 20px;
		display: flex;
		align-items: center;

		&:not(:first-child) {
			margin-left: 25px;
		}

		img {
			margin-right: 10px;
		}
	}
`
class App extends Component {
	render() {
		return (
			<div className="App">
				<ScrollableAnchor id={"home"}>
					<div>
						<Header />
					</div>
				</ScrollableAnchor>

				<Hero>
					<div className="brand">
						<img src={logo} alt="Lorenzo's" />
					</div>
				</Hero>
				<QuickInfo />

				<ScrollableAnchor id={"hours"}>
					<div>
						<Hours />
					</div>
				</ScrollableAnchor>

				<ScrollableAnchor id={"services"}>
					<div>
						<ServicesTable />
					</div>
				</ScrollableAnchor>

				<div>
					<Shop />
				</div>

				<Footer>
					<a className="link" href="http://instagram.com/laeffects" target="new" title="Follow us on instagram">
						<img src={igicon} alt="Instagram" /> @laeffects
					</a>
					<a className="link" href="http://instagram.com/lor3nzo22" target="new" title="Follow us on instagram">
						<img src={igicon} alt="Instagram" /> @lor3nzo22
					</a>
				</Footer>
			</div>
		)
	}
}

export default App
