import React from "react"
import styled from "styled-components"

const Container = styled("h1")`
	font-weight: 700;
	padding: 1em 0;
	font-size: 60px;
	text-align: center;
	font-family: "Merriweather", cursive;
`

const SectionHeader = ({ title }) => {
	return <Container>{title}</Container>
}

export default SectionHeader
