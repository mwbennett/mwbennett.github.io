import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import Wrapper from './Wrapper';

import { colors } from '../tokens';

import 'prismjs/themes/prism-tomorrow.css';
import { GlobalStyle } from './Commons';

const Template = (props) => {
  const { children } = props;

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Muli:200,200i,400,400i,700,700i"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <div style={{
        padding: '40px 0',
        minHeight: '100vh',
        borderTop: `12px solid ${colors.primary}`,
      }}
      >
        <Wrapper>
          <Header />
          {children}
          <Footer />
        </Wrapper>
      </div>
    </>
  );
};

export default Template;
