import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { rhythm } from '../utils/typography'

const Layout = ({ location, title, children, className }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	let header

	if (location.pathname === rootPath) {
		header = (
			<h1>
				<Link
					style={{
						boxShadow: `none`,
						color: `inherit`,
					}}
					to={`/`}
				>
					{title}
				</Link>
			</h1>
		)
	} else {
		header = (
			<h3
				style={{
					fontFamily: `Montserrat, sans-serif`,
					marginTop: 0,
				}}
			>
				<Link
					style={{
						boxShadow: `none`,
						color: `inherit`,
					}}
					to={`/`}
				>
					{title}
				</Link>
			</h3>
		)
	}
	return (
		<div className={className}>
			<header>{header}</header>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</div>
	)
}

export default styled(Layout)`
	margin: 0 auto;
	padding: ${rhythm(1.5)} ${rhythm(5 / 4)};
	transition: 2s;

	/* max-width: 90%; */
	max-width: 1200px;

	& > header > h1,
	& > header > h3 {
		color: rgb(255, 255, 255);
		font-family: 'Montserrat';
		font-weight: 300;
	}

	h1 {
		font-size: 6vw;
	}

	h3 {
		font-size: 4vw;
	}

	& > header {
		margin: 5% 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
