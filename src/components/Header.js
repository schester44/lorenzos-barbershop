import React from "react"
import styled, { keyframes } from "styled-components"

const slideDown = keyframes`
    from {
        top: -40px;
        opacity: 0.5;
    }

    to {
        to: 0;
        opacity: 1;
    }
`

const Wrapper = styled("div")`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	transition: background 0.2s ease;

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 1;
		z-index: -1;

		${props =>
			props.inverted &&
			`
		animation: ${slideDown} .2s ease forwards;
            background: black;
        `};
	}

	ul {
		padding: 20px;
		list-style-type: none;

		li {
			display: inline;
			margin-left: 10px;
			color: white;
			padding: 20px 10px;
			font-size: 18px;

			a {
				color: white;
				text-decoration: none;

				&:hover {
					color: yellow;
				}
			}
		}
	}
`

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.update = this.update.bind(this)
	}

	componentDidMount() {
		window.addEventListener("scroll", this.update)
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.update)
	}

	update = () => {
		const threshold = window.innerWidth >= 768 ? window.innerHeight : window.innerHeight / 2

		if (window.scrollY > threshold - 65) {
			if (!this.state.inverted) {
				this.setState({ inverted: true })
			}
		} else {
			if (this.state.inverted) {
				this.setState({ inverted: false })
			}
		}
	}

	render() {
		return (
			<Wrapper inverted={this.state.inverted}>
				<div className="background" />
				<ul>
					<li>
						<a href="#home" title="Lorenzo's Barbershop">
							Home
						</a>
					</li>

					<li>
						<a href="#hours" title="Barbershop Hours">
							Hours
						</a>
					</li>
					<li>
						<a href="#services" title="Barber Services">
							Services
						</a>
					</li>
				</ul>
			</Wrapper>
		)
	}
}

export default Header
