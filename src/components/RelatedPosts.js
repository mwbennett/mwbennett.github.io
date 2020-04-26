import React from 'react';
import styled from 'styled-components';

import { StyledLink } from './Commons';
import Flag from './Flag/Flag';
import useSiteMetadata from '../hooks/use-site-config';

const PostPreviewShort = styled.li`
  margin: 18px 0 6px;
`;

const PostDate = styled.div`
 font-size: .875rem;
 font-style: italic;
`;

const RelatedPosts = (props) => {
  const { posts } = props;
  const { multilangPosts } = useSiteMetadata();

  return (
    <ul>
      {posts.map((post) => {
        const { title, slug, date } = post.node.frontmatter;
        const language = post.node.frontmatter.language || 'en';

        return (
          <PostPreviewShort key={slug}>
            <PostDate>{date && <time>{date}</time>}</PostDate>
            <StyledLink to={`/${slug}`}>
              {multilangPosts && <Flag language={language} />}
              {title}
            </StyledLink>
          </PostPreviewShort>
        );
      })}
    </ul>
  );
};
export default RelatedPosts;
