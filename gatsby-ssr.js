// custom typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import 'prismjs/themes/prism.css'

import React from 'react'
import Background from './src/components/background'
import GlobalStyle from './src/utils/GlobalStyle'

export const wrapPageElement = ({ element }) => {
	return (
		<>
			{element}
			<GlobalStyle />
			<Background />
		</>
	)
}
