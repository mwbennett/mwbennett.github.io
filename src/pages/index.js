import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import RelatedPosts from '../components/RelatedPosts';
import { PageLede } from '../components/Commons';
import useSiteMetadata from '../hooks/use-site-config';

const SubTitle = styled.h2`
  padding-top: 40px;
  line-height: 1.2;
  border-top: 1px solid #ececec;
  margin-top: 44px;
`;

const LandingPage = (props) => {
  const { posts, projects } = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { in: ["post", null] } } }
        limit: 5
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
              tags
              language
              slug
            }
          }
        }
      }
      projects: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "project" } } }
        limit: 5
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
              language
              slug
            }
          }
        }
      },
    }
  `);

  const { authorDescriptionShort } = useSiteMetadata()
  return (
    <Layout location={props.location} noCover>
      <SEO title="Mark Bennett" />
      <PageLede>
        {authorDescriptionShort}
      </PageLede>

      <SubTitle>Latest</SubTitle>

      <RelatedPosts posts={posts.edges} />

      <SubTitle>Projects</SubTitle>

      {/* TODO: Add a data type and components for projects... */}
      <RelatedPosts posts={projects.edges} />
    </Layout>
  );
};

export default LandingPage;
