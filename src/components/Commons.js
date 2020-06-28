import styled, { createGlobalStyle } from 'styled-components';

import { Link } from 'gatsby';
import { colors } from '../tokens';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: "Muli", arial, sans-serif;
  color: ${colors.text};
  background-color: ${colors.background};
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: ${colors.primary};
}

ul,
ol {
  margin: 1em 0 0 0;
}
`;
export const StyledLink = styled(Link)`
  font-weight: 700;
  &:hover {
    border-bottom: 1px solid ${colors.primary};
  }
`;

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`;

export const PageLede = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
  font-size: 1.25rem;
`;
