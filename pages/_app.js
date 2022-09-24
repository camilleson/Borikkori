import { ThemeProvider } from 'styled-components';
import Nav from '../components/Navbar';
import GlobalStyle from '../styles/global-styles';
import theme from '../styles/theme';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Nav/>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
