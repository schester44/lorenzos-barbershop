import React from "react"
import styled from "styled-components"

const Wrapper = styled("div")`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 7em 0;
	background: rgba(242,242,242,.8);

	h1 {
		font-weight: 400;
		margin-bottom: 0.5em;
	}

	.table {
        width: 100%;
        padding: 0 20px;

		.service {
			width: 100%;
			border-bottom: 1px solid rgba(32, 32, 32, 0.1);
			padding: 1em 0;

			.top {
				display: flex;
				align-items: center;
			}

			.name {
				font-size: 20px;
				text-transform: uppercase;
				font-size: 16px;
				padding-right: 1em;
			}

			.description {
				font-size: 16px;
				color: #666;
				padding-top: 10px;
                padding-bottom: 10px;
                font-weight: 100;
			}

			.additional-info {
				color: #999;
				font-size: 14px;
			}

			.prices {
				display: flex;
				color: #666;
				font-size: 14px;

				.price {
					&:not(:first-child) {
						margin-left: 1em;
					}
				}
			}
		}
	}

	@media (min-width: 768px) {
		.table {
            width: 60vw;
            padding: 0;
		}
	}
`

// TODO - Integrate this with the API
const ServicesTable = () => {
	return (
		<Wrapper>
			<h1>SERVICES & PRICING</h1>

			<div className="table">
				<div className="service">
					<div className="top">
						<div className="name">Regular Cuts</div>
						<div className="prices">
							<div className="price">Walk-In: $20</div>
							<div className="price">Appointment: $30</div>
						</div>
					</div>
					<div className="description">
						Your standard haircut, complete with hot lather and straight razor for a crisp, clean, cut that lasts.
					</div>
				</div>

				<div className="service">
					<div className="top">
						<div className="name">Cut w/ Beard</div>
						<div className="prices">
							<div className="price">Walk-In: $25</div>
							<div className="price">Appointment: $35</div>
						</div>
					</div>
					<div className="description">All the enjoyment of a regular cut with a attention to your beard as well.</div>
				</div>

				<div className="service">
					<div className="top">
						<div className="name">Kids Cut (12-)</div>

						<div className="prices">
							<div className="price">Walk-In: $15</div>
							<div className="price">Appointment: $25</div>
						</div>
					</div>
					<div className="description">
						Give the little guy a brand new look. Come in together and leave looking and feeling great!
					</div>
				</div>

				<div className="service">
					<div className="top">
						<div className="name">Seniors (55+)</div>
						<div className="prices">
							<div className="price">Walk-In: $15</div>
							<div className="price">Appointment: $25</div>
						</div>
					</div>
					<div className="description">
						Men over 55 come in and enjoy the nicest cut in the valley, at an affordable price. You deserve it!
					</div>
				</div>

				<div className="service">
					<div className="top">
						<div className="name">Line Up</div>
						<div className="prices">
							<div className="price">Walk-In: $10</div>
							<div className="price">Appointment: $20</div>
						</div>
					</div>

					<div className="description">
						For those that stay with a fresh cut and are only looking for a quick line up.
					</div>

					<div className="additional-info">
						<div className="price">Color enhanced line ups w/ cut via appointment: $45</div>
					</div>
				</div>

				<div className="service">
					<div className="top">
						<div className="name">Designs</div>
						<div className="prices">
							<div className="price">Walk-In: Starting at $10 additional</div>
							<div className="price">Appointment: Starting at $40</div>
						</div>
					</div>
					<div className="description">
						Take your cut to the next level with an innovative design from one of our award winning barbers.
					</div>

					<div className="additional-info">
						<div className="price">Color enhanced designs via appointment start at $50</div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default ServicesTable
