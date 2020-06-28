import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Content from '../components/Content';
import SEO from '../components/SEO';

const Page = (props) => {
  const page = props.data.markdownRemark;

  return (
    <Layout location={props.location}>
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

export default Page;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
