// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import 'prismjs/themes/prism.css'

import React from 'react'
import Background from './src/components/background'

export const wrapPageElement = ({ element }) => {
	return (
		<>
			{element}
			<Background />
		</>
	)
}
