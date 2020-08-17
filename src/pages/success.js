import React from 'react'
import styled from 'styled-components'

const success = ({ className }) => {
	return (
		<div className={className}>
			Email sent <br />
			See you soon !
		</div>
	)
}

export default styled(success)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80vw;
	height: 80vh;
	margin: auto;
	margin-top: 3rem;
	background-color: white;
	font-family: Montserrat, sans-serif;
	font-weight: 700;
`
