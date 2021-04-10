/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Paper } from '@material-ui/core';

import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps, theme } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import Theme from './src/components/theme';
import Layout from './src/components/layout';
/* eslint-disable */
const component = {
  pre: (props) => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
        theme={github}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};
export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={component}>
      <CssBaseline /> <Paper>{element}</Paper>
    </MDXProvider>
  );
};

// PageElement re-renders every time page changes
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

//export function wrapRootElement({ element }) {
//  return (
//    <ThemeProvider theme={Theme}>
//{element}
//    </ThemeProvider>
//  );
//}
