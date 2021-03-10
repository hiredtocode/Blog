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
    position: 'sticky',
    maxHeight: `calc(100vh - 148px)`,
    paddingTop: `23px`,
    marginLeft: `50px`,
    overflow: `auto`,
    top: `70px`,
    minWidth: `230px`,
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      marginLeft: `10px`,
      minWidth: `200px`,
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: `10px`,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      marginLeft: `50px`,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  article: {
    display: `block`,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: `686px`,
    maxWidth: `686px`,
    [theme.breakpoints.down('md')]: {
      maxWidth: `650px`,
    },
  },
  container: {
    display: `flex`,
    zIndex: 1,
    paddingTop: `48px`,
    justifyContent: `center`,
    maxWidth: `1100px`,
    alignItems: `flex-start`,
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
      <main className={classes.container}>
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
      </main>
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
