import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import RehypeReact from 'rehype-react'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const renderAst = new RehypeReact({
	createElement: React.createElement,
	components: { bio: Bio },
}).Compiler

const BlogPostTemplate = ({ data, pageContext, location, className }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<div className={className}>
				<div>
					<article>
						<header>
							<Img
								fluid={post.frontmatter.image.childImageSharp.fluid}
								alt={post.frontmatter.title}
							/>
						</header>
						<main>
							<h1
								style={{
									marginTop: rhythm(1),
									marginBottom: 0,
								}}
							>
								{post.frontmatter.title}
							</h1>
							<p
								style={{
									...scale(-1 / 5),
									display: `block`,
									marginBottom: rhythm(1),
								}}
							>
								{post.frontmatter.date}
							</p>
							{/* <section dangerouslySetInnerHTML={{ __html: post.html }} /> */}
							<div>{renderAst(post.htmlAst)}</div>
							<hr
								style={{
									marginBottom: rhythm(1),
								}}
							/>
						</main>
						<footer>
							<nav>
								<ul>
									<li>
										{previous && (
											<Link to={previous.fields.slug} rel="prev">
												← {previous.frontmatter.title}
											</Link>
										)}
									</li>
									<li>
										{next && (
											<Link to={next.fields.slug} rel="next">
												{next.frontmatter.title} →
											</Link>
										)}
									</li>
								</ul>
							</nav>
						</footer>
					</article>
				</div>

				<Bio />
			</div>
		</Layout>
	)
}

export default styled(BlogPostTemplate)`
	display: flex;
	flex-direction: column;

	& > div {
		background-color: white;
		box-shadow: 0px 15px 45px -9px rgba(0, 0, 0, 0.2);
	}

	& header {
		display: flex;
		flex-direction: column;
	}

	article h1 {
		color: black;
	}

	article > main,
	article > footer {
		margin: 0 2rem;
	}

	& nav ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	& nav ul li {
		margin-bottom: 1.75rem;
	}

	& a {
		box-shadow: none;
	}
`

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			htmlAst
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
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
`
