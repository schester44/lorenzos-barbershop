import React from "react"
import styled, { keyframes } from "styled-components"
import axios from "axios"
import format from "date-fns/format"
import Icon from "./Icon"
import { addMinutes, setHours, setMinutes, isAfter, isWithinRange } from "date-fns"

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

	${props =>
		props.mobile &&
		`
  		margin-top: -190px;
	`} ${props =>
		props.fixed &&
		`
  		.fixed-item {
			  position: fixed;
			  top: 0;
			  left: 0;
			  z-index: 99;
			  transition: transform .2s ease;
			  transform: scale(0.9) translateX(10px);
			  padding: 7px !important;
			  align-items: center;
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
				margin-right: 15px;
			}

			.info {
				height: 100%;
			}

			ul {
				list-style-type: none;

				li {
					padding-bottom: 5px;
				}
			}
		}

		p {
			line-height: 1.5;
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

const days = {
	tuesday: {
		appointments: [7, 9],
		closed: 19
	},
	wednesday: {
		appointments: [7, 19],
		closed: 19
	},
	thursday: {
		appointments: [7, 9],
		closed: 19
	},
	friday: {
		appointments: [7, 9],
		closed: 19
	},
	saturday: {
		closed: 16
	}
}

class QuickInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			waitTime: "Calculating"
		}

		this.today = days[format(new Date(), "dddd").toLowerCase()]

		this.update = this.update.bind(this)
	}

	componentDidMount() {
		window.addEventListener("scroll", this.update)

		axios
			.get(
				process.env.NODE_ENV === "production"
					? `https://api.freshcut.xyz/wait?key=effectstempkey&employeeId=4`
					: `http://localhost:3443/wait?key=1ee93cda1d69cd54b25ce2bc6be1de2ce&employeeId=1`
			)
			.then(res => res.data)
			.then(this.setWaitTime)
	}

	setWaitTime = ({ time, error }) => {
		if (error) {
			this.setState({ waitTime: "Error" })
			return
		}

		const now = new Date()

		const currentDay = format(now, "dddd").toLowerCase()
		const currentHour = format(now, "H")

		if (!this.today || (this.today.closed && +this.today.closed <= +currentHour)) {
			return this.setState({ waitTime: "Closed" })
		}

		const hours = Math.floor(time / 60)
		const minutes = Math.floor(60 * ((time / 60) % 1))

		const closeTime = setMinutes(setHours(now, this.today.closed), 0)
		const endTime = addMinutes(now, minutes + hours * 60)

		// Show Appointment message if within that time range.
		if (this.today.appointments && this.today.appointments.length >= 2) {
			const apptStart = setMinutes(setHours(now, this.today.appointments[0]), 0)
			const apptEnd = setMinutes(setHours(now, this.today.appointments[1]), 0)

			if (isWithinRange(now, apptStart, apptEnd)) {
				return this.setState({ waitTime: `Appointments only, until ${format(apptEnd, "h:mm a")}` })
			}
		}

		if (isAfter(endTime, closeTime)) {
			return this.setState({ waitTime: "Fully Booked" })
		}

		if (time < 15) {
			return this.setState({ waitTime: "No Wait" })
		}

		this.setState({
			waitTime: hours > 0 ? `${hours}hr ${minutes}mins` : `${minutes} mins`
		})
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
			<QuickInfoWrapper mobile={window.innerWidth < 768} fixed={this.state.inverted}>
				<div className="container">
					<div className="column col-3 fixed-item">
						<div className="icon">
							<Icon type="timer" />
						</div>
						<div className="info">
							<h5>Current Wait</h5>
							<p>{this.state.waitTime}</p>
						</div>
					</div>

					{this.state.inverted && <div className="column col-3" />}

					<div className="column col-4">
						<div className="icon">
							<Icon type="pin" />
						</div>
						<div className="info">
							<h5>514 McKean Avenue</h5>
							<p>514 McKean Avenue, Charleroi, PA 15022</p>
							<p>724-565-5344</p>
						</div>
					</div>

					<div className="column col-5">
						<div className="icon">
							<Icon type="time" />
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
