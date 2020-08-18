import React from 'react'
import { Link } from 'gatsby'

import { Fade } from 'react-reveal'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { BsHeartHalf } from 'react-icons/bs'

const Title = () => {
	return (
		<Fade top duration={1000}>
			<span className="titleClass">
				<p>M</p>
				<p>y</p>
				<p>&nbsp;</p>
				<p>p</p>
				<p>e</p>
				<p>r</p>
				<p>s</p>
				<p>o</p>
				<p>n</p>
				<p>a</p>
				<p>l</p>
				<p>&nbsp;</p>
				<p>i</p>
				<p>n</p>
				<p>s</p>
				<p>p</p>
				<p>i</p>
				<p>r</p>
				<p>a</p>
				<p>t</p>
				<p>i</p>
				<p>o</p>
				<p>n</p>
			</span>
		</Fade>
	)
}

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
					{/* {title} */}
					<Title />
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
					{/* {title} */}
					<Title />
				</Link>
			</h3>
		)
	}
	return (
		<div className={className}>
			<header>{header}</header>
			<main>{children}</main>
			<footer>
				Made with love <BsHeartHalf /> by
				<a
					href="https://renamelie.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					renamelie
				</a>
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

	& > header > h1 a,
	& > header > h3 a {
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

	& > main {
		width: 90%;
		min-width: 250px;
		margin: auto;
	}

	.titleClass {
		display: flex;
		justify-content: center;
	}

	.titleClass > * {
		animation-duration: 1s;
		animation-fill-mode: both;
		animation-iteration-count: 1;
	}

	.titleClass > *:hover {
		animation-name: rubberBand;
		color: pink;
	}

	& footer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& svg {
		color: darkred;
	}
`
