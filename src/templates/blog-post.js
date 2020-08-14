import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import RehypeReact from 'rehype-react'

import Bio from '../components/bio'
import Layout from '../components/layout'
import MailchimpForm from '../components/MailchimpForm'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const renderAst = new RehypeReact({
	createElement: React.createElement,
	components: { bio: Bio },
}).Compiler

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<article>
				<header>
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
					<Img
						fluid={post.frontmatter.image.childImageSharp.fluid}
						alt={post.frontmatter.title}
					/>
				</header>
				{/* <section dangerouslySetInnerHTML={{ __html: post.html }} /> */}
				<div>{renderAst(post.htmlAst)}</div>
				<hr
					style={{
						marginBottom: rhythm(1),
					}}
				/>
				<MailchimpForm />
				<footer>
					<Bio />
				</footer>
			</article>

			<nav>
				<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0,
					}}
				>
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
		</Layout>
	)
}

export default BlogPostTemplate

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
						fluid(maxWidth: 630) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		}
	}
`
