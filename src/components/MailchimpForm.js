import React from 'react'

const MailchimpForm = () => {
	return (
		<form
			name="mailchimp"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input type="hidden" name="form-name" value="mailchimp" />
			<input type="hidden" name="bot-field" />
			<p>
				<label>
					Your Email: <input type="email" name="email" />
				</label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
	)
}

export default MailchimpForm
