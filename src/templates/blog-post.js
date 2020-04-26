import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Wrapper from '../components/Wrapper';
import Hero from '../components/Hero';
import Article from '../components/Article';
import PrevNextPost from '../components/PrevNextPost';
import SEO from '../components/SEO';
import Disqus from '../components/Disqus';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const { previous, next } = props.pageContext;

  return (
    <Layout location={props.location}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
        imageFb={
          post.frontmatter.imageFb && post.frontmatter.imageFb.publicURL
        }
        imageTw={
          post.frontmatter.imageTw && post.frontmatter.imageTw.publicURL
        }
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
  query ProjectBySlug($slug: String!) {
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
        imageTw {
          publicURL
        }
        imageFb {
          publicURL
        }
      }
    }
  }
`;
