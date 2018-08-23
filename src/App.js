import React, { Component } from "react"
import styled from "styled-components"
import ScrollableAnchor from "react-scrollable-anchor"
import AddToHomeScreen from "./components/AddToHomeScreen"

import ReactGA from "react-ga"

import "./App.css"

import QuickInfo from "./components/QuickInfo"
import ServicesTable from "./sections/ServicesTable"
import Hours from "./sections/Hours"
import Gallery from "./sections/Gallery"
import Header from "./components/Header"

import logo from "./logo2.png"
import igicon from "./instagram.png"
import Shop from "./sections/Shop"

ReactGA.initialize("UA-41619870-7", { debug: process.env.NODE_ENV !== "production" })

const Hero = styled("div")`
	background-image: url(hero/${props => props.number}.jpg);
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
	margin-bottom: 60px;

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
		const hero = Math.floor(Math.random() * 7)

		return (
			<div className="App">
				<AddToHomeScreen />
				<ScrollableAnchor id={"home"}>
					<div>
						<Header />
					</div>
				</ScrollableAnchor>

				<Hero number={hero}>
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

				<ScrollableAnchor id={"gallery"}>
					<div>
						<Gallery />
					</div>
				</ScrollableAnchor>

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
