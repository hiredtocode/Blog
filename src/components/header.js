import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../material-ui-top-layout/theme';

export default function Header({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <ThemeProvider theme={theme}>
      <Link to="/" style={{ color: 'black' }}>
        {data.site.siteMetadata.title}
      </Link>
      {children}
    </ThemeProvider>
  );
}
