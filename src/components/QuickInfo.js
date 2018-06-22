import React from "react"
import styled, { keyframes } from "styled-components"

import timeIcon from "../icons/_ionicons_svg_ios-time.svg"
import timerIcon from "../icons/_ionicons_svg_ios-timer.svg"
import locationIcon from "../icons/_ionicons_svg_md-pin.svg"

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-40px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`

const QuickInfoWrapper = styled("div")`
	position: relative;
	width: 100%;
	margin-top: -100px;

	${props => props.fixed && `
  		.fixed-item {
			  position: fixed;
			  top: 0;
			  left: 0;
			  z-index: 99;
			  transition: transform .2s ease;
			  transform: scale(0.9) translateX(10px);
			  padding: 7px !important;
			  align-items: center;
			  
			  img {
				  width: 35px !important;
				  height: 35px !important;
			  }
		  }
	`}

	.container {
		position: relative;
		width: 100%;
		background: black;
		color: white;
		font-size: 18px;
		animation: ${fadeInLeft} 1s ease forwards;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;

		align-items: center;
		padding: 15px;
		min-height: 150px;

		.column {
			flex: 1;
			width: 100%;
			display: flex;
			color: #999999;
			font-size: 15px;
			padding: 20px 0;

			.icon {
				height: 100%;
			}

			.info {
				height: 100%;
			}

			img {
				width: 50px;
				height: 50px;
				margin-right: 15px;
			}

			ul {
				list-style-type: none;

				li {
					padding-bottom: 5px;
				}
			}
		}

		h5 {
			font-weight: 400;
			font-size: 16px;
			color: #fff;
			margin-bottom: 10px;
			padding: 0;
		}
	}

	@media (min-width: 768px) {
		.column {
			&.col-3 {
				max-width: 25%;
			}

			&-col-4 {
				max-width: 33%;
			}
		}

		.container {
			flex-direction: row;
			max-width: 720px;
		}
	}
`

class QuickInfo extends React.Component {
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

		if (window.innerWidth < 768) {
			return
		}

		if (window.scrollY > window.innerHeight - 60) {
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
			<QuickInfoWrapper fixed={this.state.inverted}>
				<div className="container">
					<div className="column col-3 fixed-item">
						<div className="icon">
							<img src={timerIcon} alt="Wait Time" />
						</div>
						<div className="info">
							<h5>Current Wait</h5>
							<p>1h 25m</p>
						</div>
					</div>

					{this.state.inverted && <div className="column col-3"></div>}

					<div className="column col-4">
						<div className="icon">
							<img src={locationIcon} alt="Wait Time" />
						</div>
						<div className="info">
							<h5>514 McKean Avenue</h5>
							<p>514 McKean Avenue, Charleroi, PA 15022</p>
						</div>
					</div>

					<div className="column col-5">
						<div className="icon">
							<img src={timeIcon} alt="Wait Time" />
						</div>
						<div className="info">
							<h5>Hours of Operation</h5>
							<ul>
								<li>Tuesday - Friday 9am - 6pm</li>
								<li>Saturday: 7am - 3pm</li>
							</ul>
						</div>
					</div>
				</div>
			</QuickInfoWrapper>
		)
	}
}

export default QuickInfo
