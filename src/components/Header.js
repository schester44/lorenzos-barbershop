import ReactGA from 'react-ga'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled('div')`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	transition: background 0.2s ease;

	.main-cta:hover {
		color: rgba(100, 100, 100, 1);
	}

	${({ mobile }) =>
		mobile
			? `
		.main-cta {
			position: fixed;
			top: 10px;
			right: 10px;
			background: rgba(237, 209, 129, 1);
			padding: 10px 20px;
			border-radius: 10px;
			color: black;
			box-shadow: 0px 3px 10px rgba(32,32,32,0.2);
		}	
		`
			: `
	
		.main-cta {
			background: rgba(237, 209, 129, 1);
			padding: 10px 20px;
			border-radius: 4px;
			color: black;
			box-shadow: 0px 3px 5px rgba(32,32,32,0.1);
		}
	`}

	${props =>
		props.mobile &&
		`
		top: auto;
		bottom: 0;
		z-index: 9999;

		.background {
			background: rgba(0,0,0,1);
		}
	`} .background {
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
			}
		`} li {
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
		this.state = {
			isMobile: false,
			inverted: false
		}

		this.update = this.update.bind(this)
	}

	componentDidMount() {
		this.setState({ isMobile: window.innerWidth < 768 })
		window.addEventListener('scroll', this.update)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.update)
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
		return (
			<Wrapper mobile={this.state.isMobile} inverted={this.state.inverted}>
				<div className="background" />
				<ul>
					<li>
						<a
							href="#home"
							title="Lorenzo's Barbershop"
							onClick={() => {
								ReactGA.pageview('/home')
							}}
						>
							Home
						</a>
					</li>

					<li>
						<a
							href="#hours"
							title="Barbershop Hours"
							onClick={() => {
								ReactGA.pageview('/hours')
							}}
						>
							Hours
						</a>
					</li>

					<li>
						<a
							href="#services"
							title="Barber Services"
							onClick={() => {
								ReactGA.pageview('/services')
							}}
						>
							Services
						</a>
					</li>

					<li>
						<a
							href="https://laeffects.myshopify.com/"
							target="new"
							title="LA Effects Store"
							onClick={() => {
								ReactGA.pageview('/shop')
							}}
						>
							Shop
						</a>
					</li>

					<li>
						<a
							href="https://neverwait.app/waitlist/l/lorenzo"
							target="new"
							title="Online Check-in"
							className="main-cta"
						>
							Online Check-in
						</a>
					</li>
				</ul>
			</Wrapper>
		)
	}
}

export default Header
