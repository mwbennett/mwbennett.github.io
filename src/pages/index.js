import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Content from '../components/Content';
import SEO from '../components/SEO';


const Homepage = (props) => {
  const page = props.data.markdownRemark;

  return (
    <Layout location={props.location} noCover>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />
      <article>
        <Content content={page.html} date={page.frontmatter.date} />
      </article>
    </Layout>
  );
};

export default Homepage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { regex: "/index/" } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        disqus
        cover {
          publicURL
        }
      }
    }
  }
`;
