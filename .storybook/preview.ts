import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import '../src/styles/global.css'

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.light,
		},
		controls: {
			sort: 'requiredFirst',
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
