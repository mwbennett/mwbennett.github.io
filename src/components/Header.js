import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import useSiteMetadata from '../hooks/use-site-config';
import { colors } from '../tokens';

const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
`;

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 1260px;
  z-index: 1000;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
`;

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  border: 0;
  margin: 0;
  z-index: 10;

  :not(:last-child) {
    padding-right: 12px;
    
    :after {
      content: "|";
      padding-left: 12px;
      color: ${colors.accentPrimary}
    }
  }
`;


const Header = () => {
  const { headerLinks, siteTitle } = useSiteMetadata();

  return (
    <HeaderWrapper>
      <h1>{`// ${siteTitle}`}</h1>
      {/* <HeaderNav>
        {headerLinks.map((headerLink) => (
          <HeaderLink to={headerLink.url} key={headerLink.url}>
            {headerLink.label}
          </HeaderLink>
        ))}
      </HeaderNav> */}
    </HeaderWrapper>
  );
};

export default Header;
