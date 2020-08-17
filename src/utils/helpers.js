import { css } from 'styled-components'

export const colors = {
	primary: '#eee8aa', // yellow
	primaryPlus: 'rgb(245, 245, 151)',
	accent: '#b5adde',
	accentPlus: '#6C63FF',
	white: '#f3ebe8',
	black: '#1f1f1f',
	lightGrey: '#f7f5f6',
	grey: '#41484c',
	lightPink: '#c8aab3',
	darkPink: '#887486',
	darkIcon: 'rgba(87, 87, 87, 0.2)',
	lightIcon: 'rgba(87, 87, 87, 0.4)',
}

export const pxToRem = (px = 16) => {
	return `${px / 16}rem`
}

export const layout = (px = 1170) => {
	return `
    max-width: ${pxToRem(px)};
    margin: 0 auto;
    padding: 0 ${pxToRem(8)};`
}

const sizes = {
	large: 1200,
	bigMedium: 1000,
	medium: 800,
	small: 600,
	smaller: 321,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}rem) {
			${css(...args)}
		}
	`
	return acc
}, {})
