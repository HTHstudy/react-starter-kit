import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import { Routes } from './pages/Routes';
import colors from '@constants/colors';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            <Routes />
          </QueryClientProvider>
        </RecoilRoot>
      </Layout>
    </>
  );
};

export default App;

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
      `}
    >
      <div
        css={css`
          background: ${colors.background};
        `}
      >
        {children}
      </div>
    </div>
  );
}
