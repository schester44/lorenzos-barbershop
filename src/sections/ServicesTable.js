import React from "react"
import styled from "styled-components"
import Section from "../components/Section"

const Table = styled("div")`
	width: 100%;
	padding: 0 20px;

	.service {
		width: 100%;
		border-bottom: 1px solid rgba(32, 32, 32, 0.1);
		padding: 1em 0;

		.name {
			text-transform: uppercase;
			font-size: 22px;
			padding-right: 1em;
			line-height: 1.5;
		}

		.description {
			font-size: 18px;
			color: #666;
			padding-bottom: 10px;
			font-weight: 400;
		}

		.additional-info {
			color: #666;
			font-size: 14px;
		}

		.prices {
			display: flex;
			color: #999;
			font-size: 20px;
			line-height: 1.5;

			.price {
				&:not(:first-child) {
					margin-left: 1em;
				}
			}
		}
	}

	@media (min-width: 768px) {
		width: 60vw;
		padding: 0;
	}
`

// TODO - Integrate this with the API
const ServicesTable = props => {
	return <Section {...props} title="Services & Pricing">
			<Table>
				<div className="service">
					<div className="top">
						<div className="name">Regular Cuts</div>
						<div className="prices">
							<div className="price">Walk-In: $20</div>
							<div className="price">Appointment: $35</div>
						</div>
					</div>
					<div className="description">
						Your standard haircut complete with hot lather and straight razor for a crisp, clean, cut that lasts.
					</div>
				</div>

				<div className="service">
					<div className="top">
						<div className="name">Cut w/ Beard</div>
						<div className="prices">
							<div className="price">Walk-In: $25</div>
							<div className="price">Appointment: $40</div>
						</div>
					</div>
					<div className="description">All the enjoyment of a regular cut with attention to your beard as well.</div>
				</div>

				<div className="service">
					<div className="top">
						<div className="name">Kids Cut (12-)</div>

						<div className="prices">
							<div className="price">Walk-In: $15</div>
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
						</div>
					</div>

					<div className="description">
						For those that stay with a fresh cut and are only looking for a quick line up.
					</div>
				</div>

				<div className="service">
					<div className="top">
						<div className="name">Designs</div>
						<div className="prices">
							<div className="price">Starting at $10 additional</div>
						</div>
					</div>
					<div className="description">
						Take your cut to the next level with an innovative design from one of our award winning barbers.
					</div>
				</div>
			</Table>
		</Section>
}

export default ServicesTable
