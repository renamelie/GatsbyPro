import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Image = () => (
	<StaticQuery
		query={graphql`
			query {
				placeholderImage: file(relativePath: { eq: "background.png" }) {
					childImageSharp {
						fluid(maxWidth: 1920, quality: 100) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={data => (
			<Img
				// style={{ minHeight: '100vh' }}
				fluid={data.placeholderImage.childImageSharp.fluid}
			/>
		)}
	/>
)

const background = ({ className }) => {
	return (
		<div className={className}>
			<Image />
		</div>
	)
}

export default styled(background)`
	left: 0;
	top: 0;
	/* overflow: hidden; */
	margin: 0;
	padding: 0;
	/* height: 100%; */
	width: 100%;
	z-index: -99;
	position: absolute;

	img {
		filter: grayscale(60%);
	}
`
