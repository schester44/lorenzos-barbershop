import React, { Component } from "react"
import styled from "styled-components"
import ScrollableAnchor from "react-scrollable-anchor"
import "./App.css"

import QuickInfo from "./components/QuickInfo"
import ServicesTable from "./sections/ServicesTable"
import Hours from "./sections/Hours"
import Header from "./components/Header"

const Hero = styled("div")`
	background-image: url("./hero2.jpg");
	background-size: cover;
	background-position: center center;
	height: 100vh;

	.brand {
		width: 100%;
		height: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		color: white;
		font-family: blacksword, sans-serif;
		font-size: 18vw;
		line-height: 1;
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

class App extends Component {
	render() {
		return <div className="App">
				<ScrollableAnchor id={"home"}>
					<div>
						<Header />
					</div>
				</ScrollableAnchor>

				<Hero>
					<div className="brand">
						<h1>Lorenzo's</h1>
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
			</div>
	}
}

export default App
