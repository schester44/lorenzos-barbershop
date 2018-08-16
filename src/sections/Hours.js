import React from "react"
import styled from "styled-components"

const Wrapper = styled("div")`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 7em 1em 3.5em 1em;
	border-bottom: 2px dashed rgba(32, 32, 32, 0.1);

	h1 {
		font-weight: 700;
		margin-bottom: 0.5em;
		font-size: 60px;
		text-align: center;
		font-family: "Kaushan Script", cursive;
	}

	.section {
		margin-bottom: 2em;
	}

	h3 {
		margin-bottom: 0.5em;
		text-transform: uppercase;
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}

	h5 {
		font-weight: 400;
		color: #999;
		font-size: 22px;
	}

	@media (min-width: 768px) {
	}
`

const Hours = () => {
	return (
		<Wrapper>
			<h1>Hours</h1>

			<h3>Walk-ins</h3>

			<div className="section">
				<h5>Tuesday thru Friday: 9am to 6pm</h5>
				<h5>Saturday: 7am to 3pm</h5>
			</div>
			<div className="section">
				<h3>Appointments</h3>
				<h5>Tuesday thru Friday: 7am to 9am</h5>
			</div>
		</Wrapper>
	)
}

export default Hours
