import React from "react"
import SectionHeader from "./SectionHeader"
import styled from "styled-components"

const Container = styled("div")`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3.5em 1em 3.5em 1em;
	background: white;

	${props =>
		props.odd &&
		`
		background: rgba(248,248,248,1.0);
	`}
	
	border-bottom: 2px dashed rgba(222, 222, 222, 1);
`

export default ({ title, children, odd = false }) => {
	return (
		<Container odd={odd}>
			{title && <SectionHeader title={title} />}
			<div className="section-content">{children}</div>
		</Container>
	)
}
