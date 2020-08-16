import React from 'react';
import styled from 'styled-components';
import useSiteMetadata from '../hooks/use-site-config';

const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
`;


const Header = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <HeaderWrapper>
      <h1>{siteTitle}</h1>
    </HeaderWrapper>
  );
};

export default Header;
