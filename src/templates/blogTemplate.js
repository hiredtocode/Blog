import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import TableOfContents from '../components/tableofcontents';

const useStyles = makeStyles((theme) => ({
  aside: {
    flexGrow: 0,
    flexShrink: 100000,
    flexBasis: `250px`,
    position: `sticky`,
    paddingTop: `23px`,
    maxHeight: `calc(100vh - 148px)`,
    marginLeft: `auto`,
    overflow: `auto`,
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  article: {
    display: `block`,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: `686px`,
    maxWidth: `686px`,
  },
  container: {
    display: `flex`,
    maxWidth: `1100px`,
    paddingTop: `48px`,
  },
}));

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const post = data.mdx; // data.mdx holds your post data
  const { frontmatter } = post;
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.container}>
        <article className={classes.article}>
          <h1>{frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <h4>Last updated: {frontmatter.date}</h4>
        </article>
        <aside className={classes.aside}>
          <nav>
            {post?.tableOfContents?.items && (
              <TableOfContents items={post.tableOfContents.items} />
            )}
          </nav>
        </aside>
      </div>
    </Layout>
  );
}

export const templateQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
      tableOfContents
    }
  }
`;
