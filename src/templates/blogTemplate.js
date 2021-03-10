import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const post = data.mdx; // data.mdx holds your post data
  const { frontmatter } = post;
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <h4>Last updated: {frontmatter.date}</h4>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
