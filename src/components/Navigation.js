import React from "react"
import styled from "styled-components"

import calIcon from "../icons/calendar.svg"
import clockIcon from "../icons/clock.svg"
import dollarIcon from "../icons/dollar.svg"
import homeIcon from "../icons/home.svg"

const Wrapper = styled("div")`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	transition: background 0.2s ease;

	${props => props.mobile && `
		top: auto;
		bottom: 0;
		z-index: 999;
		background: black;

		.background: {
			background: black;
		}
	`}

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
			background: black;
			transition: background .5s ease;
        `};
	}

	ul {
		padding: 20px;
		list-style-type: none;

		${props =>
			props.mobile &&
			`

			width: 100%;
			display: flex;
			padding: 0;

			li {
				flex: 1;
				width: 100%;
				text-align: center;
				padding: 20px 0;
				font-size: 10px !important;
				display: flex !important;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				img {
					padding-bottom: 3px;
				}
			}
		`} 
		
		
		li {
			display: inline;
			margin-left: 10px;
			color: white;
			padding: 20px 10px;
			font-size: 18px;

			img {
				max-width: 28px;
			}

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
		this.state = {
			isMobile: false,
			inverted: false
		}

		this.update = this.update.bind(this)
	}

	componentDidMount() {
		this.setState({ isMobile: window.innerWidth < 768 })
		window.addEventListener("scroll", this.update)
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.update)
	}

	update = () => {
		const threshold = window.innerWidth >= 768 ? window.innerHeight : window.innerHeight / 2

		if (window.scrollY > threshold - 65) {
			if (!this.state.inverted) {
				this.setState({ inverted: true, isMobile: window.innerWidth < 768 })
			}
		} else {
			if (this.state.inverted) {
				this.setState({ inverted: false, isMobile: window.innerWidth < 768 })
			}
		}
	}

	render() {
		return <Wrapper mobile={this.state.isMobile} inverted={this.state.inverted}>
				<div className="background" />
				<ul>
					<li>
						<a href="#home" title="Lorenzo's Barbershop">
							<img src={homeIcon} alt="Home" />
							Home
						</a>
					</li>

					<li>
						<a href="#hours" title="Barbershop Hours">
							<img src={clockIcon} alt="Hours" />
							Hours
						</a>
					</li>
					<li>
						<a href="#services" title="Barber Services">
						<img src={dollarIcon} alt="Services" />
							Services
						</a>
					</li>

					<li>
					<a href="#book-appointment" title="Book Appointment" onClick={this.props.onAppointmentClick}>
						<img src={calIcon} alt="Book an appointment" />
							Appointments
						</a>
					</li>
				</ul>
			</Wrapper>
	}
}

export default Header
