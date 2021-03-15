import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Grid } from '@material-ui/core';
import Layout from '../components/layout';
import TableOfContents from '../components/tableofcontents';

const tocWidth = 200;
const useStyles = makeStyles((theme) => ({
  aside: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: tocWidth,
    position: 'sticky',
    maxHeight: `calc(100vh - 148px)`,
    overflow: `auto`,
    top: `100px`,
    minWidth: tocWidth,
    // [theme.breakpoints.up('xl')]: {
    //  display: 'block',
    //  minWidth: tocWidth,
    // },
    // [theme.breakpoints.up('lg')]: {
    //  display: 'block',
    //  minWidth: tocWidth,
    // },
    // [theme.breakpoints.up('md')]: {
    //  display: 'block',
    //  minWidth: tocWidth,
    // },
    // [theme.breakpoints.up('sm')]: {
    //  display: 'block',
    //  minWidth: tocWidth,
    // },
    // [theme.breakpoints.up('xs')]: {
    //  display: 'block',
    //  minWidth: `200px`,
    // },
    [theme.breakpoints.down('sm')]: {
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
    width: `100%`,
    // background: `yellow`,
    // border: [[1, 'solid', 'blue']],
    // direction: 'row',
  },
  item: {
    // background: `white`,
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
      <MDXProvider>
        <Grid container justify="center" className={classes.container}>
          <Grid item xs={12} md={8} className={classes.item}>
            <Container className={classes.article}>
              <h1>{frontmatter.title}</h1>
              <MDXRenderer>{post.body}</MDXRenderer>
              <h4>Last updated: {frontmatter.date}</h4>
            </Container>
          </Grid>
          <Grid item>
            <aside className={classes.aside}>
              {post?.tableOfContents?.items && <TableOfContents items={post.tableOfContents.items} />}
            </aside>
          </Grid>
        </Grid>
      </MDXProvider>
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
