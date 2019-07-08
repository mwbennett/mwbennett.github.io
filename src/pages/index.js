import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';
import RelatedPosts from '../components/RelatedPosts';
import { Text } from '../components/Commons';

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`;

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

  const textContent = "I'm a full stack developer, drummer, basketball nerd, Oakland native. This is where I.";
  return (
    <Layout location={props.location} noCover>
      <SEO title="Mark Bennett" />
      <Wrapper>
        <MainTitle>Hey it&apos;s Mark, welcome to my site.</MainTitle>
        <Text>
          {textContent}
        </Text>

        <SubTitle>My recent posts</SubTitle>

        <RelatedPosts posts={posts.edges} />

        <SubTitle>Some projects I&apos;m working on</SubTitle>

        {/* TODO: Add a data type and components for projects... */}
        <RelatedPosts posts={projects.edges} />
      </Wrapper>
    </Layout>
  );
};

export default LandingPage;
