import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyle from '../src/styles/globalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ThemeProvider>
  ),
];
