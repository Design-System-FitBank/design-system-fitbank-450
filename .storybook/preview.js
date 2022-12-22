import { ThemeDSProvider, GlobalStyles } from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <ThemeDSProvider>
      <GlobalStyles />
      <Story />
    </ThemeDSProvider>
  ),
];