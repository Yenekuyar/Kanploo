import { Outlet } from 'react-router-dom'
import { GlobalStyles } from './theme/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <div className="App">
          <Outlet />
        </div>
    </ThemeProvider>
  );
}
