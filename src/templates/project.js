import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/Hero';
import Article from '../components/Article';
import PrevNextPost from '../components/PrevNextPost';
import SEO from '../components/SEO';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const { previous, next } = props.pageContext;

  return (
    <Layout location={props.location}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
        lang={post.frontmatter.language}
        path={post.frontmatter.slug}
        isBlogPost
      />

      <Hero
        heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
        title={post.frontmatter.title}
      />

      <Article post={post} />

      <PrevNextPost previous={previous} next={next} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        language
        tags
        cover {
          publicURL
        }
      }
    }
  }
`;
