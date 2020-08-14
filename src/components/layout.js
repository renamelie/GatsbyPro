import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

import Background from './background'

const Layout = ({ location, title, children, className }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	let header

	if (location.pathname === rootPath) {
		header = (
			<h1
				style={{
					...scale(1.5),
					marginBottom: rhythm(1.5),
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
	max-width: ${rhythm(24)};
	padding: ${rhythm(1.5)} ${rhythm(5 / 4)};
	background: white;
`
