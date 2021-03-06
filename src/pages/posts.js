/** @format */

import React from 'react';
import { Link, graphql } from 'gatsby';

// This page shows the list of posts
export default function Index({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <>
      <div className="blog-posts">
        {posts
          .filter((post) => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <div className="blog-post-preview" key={post.id}>
              <h2>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              </h2>
              <h4>{post.frontmatter.date}</h4>
              <p>{post.excerpt}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { published: { eq: true } } }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;
