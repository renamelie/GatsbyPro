import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { media, pxToRem } from '../utils/helpers'
import { Zoom } from 'react-reveal'

import Img from 'gatsby-image'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MailchimpForm from '../components/MailchimpForm'

const BlogIndex = ({ data, location, className }) => {
	const siteTitle = data.site.siteMetadata.title
	const posts = data.allMarkdownRemark.edges

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="All posts" />
			<Zoom right duration={2000}>
				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					return (
						<article className={className} key={node.fields.slug}>
							<div className="sectionImg">
								<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
									<Img
										fluid={node.frontmatter.image.childImageSharp.fluid}
										alt={title}
									/>
								</Link>
							</div>
							<section>
								<h2>
									<Link to={node.fields.slug}>{title}</Link>
								</h2>
								<small>{node.frontmatter.date}</small>
								<p
									dangerouslySetInnerHTML={{
										__html: node.frontmatter.description || node.excerpt,
									}}
								/>
							</section>
						</article>
					)
				})}
			</Zoom>
			<MailchimpForm />
			<Bio />
		</Layout>
	)
}

export default styled(BlogIndex)`
	display: flex;
	flex-direction: column;
	margin: 2.5rem 0;
	/* border: 1px solid pink; */

	transition: 0.3s all ease-in-out;
	box-shadow: 0px 15px 45px -9px rgba(0, 0, 0, 0.2);

	& > * {
		flex: 1;
	}

	section {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		background-color: white;
		padding: ${pxToRem(20)} ${pxToRem(30)};
	}

	section > * {
		margin: ${pxToRem(10)};
	}

	h2,
	h2 a {
		font-family: 'Montserrat';
		font-weight: 700;
		color: #3f3f3f;
	}

	small,
	p {
		font-family: 'Montserrat';
		font-weight: 500;
		color: #8d8d8d;
	}

	.sectionImg img {
		transition: transform 01s ease !important;
		position: absolute;
	}

	.sectionImg:hover img {
		transform: scale(1.2);
		background-color: black;
		filter: brightness(60%);
	}

	${media.bigMedium`
		flex-direction: row;

		&:nth-child(odd) .sectionImg {
			order: 2;
		}

		section {
			padding: 0;
		}

		section > * {
			margin: ${pxToRem(10)} ${pxToRem(30)};
		}
  `};
`

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						image {
							childImageSharp {
								fluid(maxWidth: 1920, quality: 100) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	}
`
