import React from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import format from 'date-fns/format'
import Icon from './Icon'
import { addMinutes, setHours, setMinutes, isAfter, isWithinRange, isBefore } from 'date-fns'

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

const QuickInfoWrapper = styled('div')`
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

			  h5 {
				  margin-bottom: 0 !important;
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

const durationToHumanReadable = duration => {
	const hours = Math.floor(duration / 60)
	const minutes = Math.floor(60 * ((duration / 60) % 1))

	if (hours === 1 && minutes === 0) return `1 hour`

	if (hours === 0 && minutes > 0) return `${minutes} minutes`

	if (hours > 1 && minutes === 0) return `${hours} hours`

	return `${hours === 1 ? '1 hour' : `${hours} hours`} ${minutes} mins`
}

const days = {
	tuesday: {
		appointments: [7, 9]
	},
	wednesday: {
		appointments: [7, 19]
	},
	thursday: {
		appointments: [7, 9]
	},
	friday: {
		appointments: [7, 9]
	}
}

export function dateFromTimeString(time, date) {
	const [hours, minutes] = time.split(':')

	return setHours(setMinutes(date || new Date(), parseInt(minutes, 10)), parseInt(hours, 10))
}

const detailsEndpoint =
	process.env.NODE_ENV === 'production'
		? `https://api.neverwait.app/details/employee?id=lorenzo`
		: `http://localhost:3443/details/employee?id=user3`

const authCode = process.env.NODE_ENV === 'production' ? 'effectstempkey' : 'lolcode'

const useScroll = (cb, updateOn = []) => {
	React.useEffect(() => {
		window.addEventListener('scroll', cb)
		return () => window.removeEventListener('scroll', cb)
	}, updateOn)
}

const QuickInfo = () => {
	const [state, setState] = React.useState({
		inverted: false,
		currentWaitTime: 'Calculating',
		shifts: []
	})

	useScroll(() => {
		if (window.innerWidth < 768) {
			return
		}

		if (window.scrollY > window.innerHeight - 60) {
			if (!state.inverted) {
				setState(prev => ({ ...prev, inverted: true }))
			}
		} else {
			if (state.inverted) {
				setState(prev => ({ ...prev, inverted: false }))
			}
		}
	}, [state.inverted])

	const setWaitTime = ({ locationClosed, currentWaitTime, shifts }) => {
		// No Shifts = Closed, locationClosed = closed
		if (locationClosed || !shifts || shifts.length === 0) {
			return setState({
				currentWaitTime: 'Closed',
				shifts
			})
		}

		const currentDate = new Date()
		const startTime = dateFromTimeString(shifts[0].start_time, currentDate)
		const endTime = dateFromTimeString(shifts[0].end_time, currentDate)

		const specialRulesForToday = days[format(new Date(), 'dddd').toLowerCase()]
		const timeWhenWaitIsUp = addMinutes(currentDate, currentWaitTime)

		// Appointments are longer than the shift...
		if (isAfter(timeWhenWaitIsUp, endTime)) {
			setState({ currentWaitTime: 'Closed, fully booked', shifts })
		}

		// Outside of shift schedule
		if (isAfter(currentDate, endTime) || isBefore(currentDate, startTime)) {
			return setState({ currentWaitTime: 'Closed', shifts })
		}

		// Show Appointment message if within that time range.
		if (specialRulesForToday && specialRulesForToday.appointments) {
			const apptStart = setMinutes(setHours(currentDate, specialRulesForToday.appointments[0]), 0)
			const apptEnd = setMinutes(setHours(currentDate, specialRulesForToday.appointments[1]), 0)

			if (isWithinRange(currentDate, apptStart, apptEnd)) {
				return setState({ currentWaitTime: `Appointments only, until ${format(apptEnd, 'h:mm a')}`, shifts })
			}
		}

		if (currentWaitTime < 15) {
			return setState({ currentWaitTime: 'No Wait', shifts })
		}

		setState({
			shifts,
			currentWaitTime: durationToHumanReadable(currentWaitTime)
		})
	}

	React.useEffect(() => {
		axios
			.get(detailsEndpoint, {
				headers: {
					Authorization: `Bearer ${authCode}`
				}
			})
			.then(({ data }) => {
				setWaitTime(data)
			})
	}, [])

	return (
		<QuickInfoWrapper mobile={window.innerWidth < 768} fixed={state.inverted}>
			<div className="container">
				<div className="column col-3 fixed-item">
					<div className="icon">
						<Icon type="timer" />
					</div>
					<div className="info">
						<h5>Current Wait</h5>
						<p>{state.currentWaitTime}</p>
					</div>
				</div>

				{state.inverted && <div className="column col-3" />}

				<div className="column col-4">
					<div className="icon">
						<Icon type="pin" />
					</div>
					<div className="info">
						<h5>514 McKean Avenue</h5>
						<p>
							514 McKean Avenue
							<br />
							Charleroi, PA 15022
						</p>
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

export default QuickInfo
