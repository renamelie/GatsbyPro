import React from 'react'
import styled from 'styled-components'
import { pxToRem, media } from '../utils/helpers'

const MailchimpForm = ({ className }) => {
	return (
		<div className={className}>
			<p>
				<strong>Subscribe</strong> to get
			</p>
			<p>my latest updates</p>

			<form
				name="mailchimp"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				// action="/success"
			>
				<input type="hidden" name="form-name" value="mailchimp" />
				<input type="hidden" name="bot-field" />
				<p>
					<label>
						<input
							type="email"
							name="email"
							placeholder="Enter your email :)"
						/>
					</label>
				</p>
				<p>
					<button type="submit">SEND</button>
				</p>
			</form>
		</div>
	)
}

export default styled(MailchimpForm)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	color: #3f3f3f;

	form {
		display: flex;
	}

	& p {
		font-family: 'Montserrat';
		font-weight: 400;
		font-size: 1.8vw;
		margin: 0;
	}

	& input,
	& button {
		height: 60px;
		padding: 0 45px;
		border-radius: 100px;
		outline: none;
		transition: 0.3s all ease-in-out;
		margin: ${pxToRem(10)};
	}

	& input {
		background-color: #f2f2f2;
		border: 2px solid #ededed;
	}

	& button {
		color: white;
		background-color: #41484c;
		border: 2px solid #41484c;
	}

	& form {
		display: flex;
		justify-content: center;
		margin: ${pxToRem(20)};
	}

	& form {
			flex-flow: row wrap;
		}

	/* ${media.small`
		& form {
			flex-flow: row wrap;
		}
	`} */
`
