import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// This component returns the title of the website from gatsby-config.js file

export default function Header() {
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
  return <>{data.site.siteMetadata.title}</>;
}
