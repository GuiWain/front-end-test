import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

import * as nextImage from 'next/image'

export const parameters = {
  backgrounds: {
    default: 'zerometer-light',
    values: [
      {
        name: 'zerometer-light',
        value: theme.colors.white
      },
      {
        name: 'zerometer-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});
