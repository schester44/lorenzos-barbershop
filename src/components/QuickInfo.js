import React from 'react'
import styled, { keyframes } from 'styled-components'
import Icon from './Icon'
import { setHours, setMinutes } from 'date-fns'

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

export function dateFromTimeString(time, date) {
	const [hours, minutes] = time.split(':')

	return setHours(setMinutes(date || new Date(), parseInt(minutes, 10)), parseInt(hours, 10))
}

const useScroll = (cb, updateOn = []) => {
	React.useEffect(() => {
		window.addEventListener('scroll', cb)
		return () => window.removeEventListener('scroll', cb)
	}, updateOn)
}

const QuickInfo = () => {
	const [state, setState] = React.useState({
		inverted: false
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

	return (
		<QuickInfoWrapper mobile={window.innerWidth < 768} fixed={state.inverted}>
			<div className="container">
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
