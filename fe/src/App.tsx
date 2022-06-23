import Routers from 'Router';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
