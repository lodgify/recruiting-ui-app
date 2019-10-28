import Head from 'next/head';
import { node } from 'prop-types';

import { Main } from './styled';
import { GlobalStyles } from 'components/GlobalStyles';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Main>{children}</Main>
    </>
  );
};

MainLayout.propTypes = {
  children: node.isRequired,
};
