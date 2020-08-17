import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(-45deg, #ddd6f3, #faaca8, #2c3e50, #bdc3c7);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

`

export default Global
