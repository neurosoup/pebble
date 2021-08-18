import { ThemeProvider } from 'next-themes';
import Header from '../src/components/Header';

import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';

import { AppContextProvider } from '../src/components/AppContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='data-theme'>
      <ApolloProvider client={client}>
        <AppContextProvider>
          <div className='flex flex-col h-screen'>
            <Header />
            <Component {...pageProps} />
          </div>
        </AppContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
