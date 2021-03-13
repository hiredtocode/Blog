import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import TableOfContents from '../components/tableofcontents';

const tocWidth = 240;
const useStyles = makeStyles((theme) => ({
  aside: {
    flexGrow: 0,
    flexShrink: 100000,
    flexBasis: `250px`,
    position: 'sticky',
    maxHeight: `calc(100vh - 148px)`,
    marginLeft: `50px`,
    overflow: `auto`,
    top: `100px`,
    minWidth: tocWidth,
    [theme.breakpoints.up('xl')]: {
      display: 'block',
      marginLeft: `50px`,
      minWidth: tocWidth,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      marginLeft: `50px`,
      minWidth: tocWidth,
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      marginLeft: `50px`,
      minWidth: tocWidth,
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: `10px`,
      minWidth: tocWidth,
    },
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      marginLeft: `10px`,
      minWidth: `200px`,
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

}));

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const post = data.mdx; // data.mdx holds your post data
  const { frontmatter } = post;
  const classes = useStyles();
  return (
    <Layout>
        <article className={classes.article}>
          <h1>{frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <h4>Last updated: {frontmatter.date}</h4>
        </article>
        {/*<aside className={classes.aside}>
          {post?.tableOfContents?.items && (
            <TableOfContents items={post.tableOfContents.items} />
          )}
        </aside>*/}
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
