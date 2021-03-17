/** @format */

import React from 'react';
import Layout from '../components/layout';
import NamaSushi from '../components/namasushi';

export default function Portfolio() {
  return (
    <Layout>
      <NamaSushi />
      <p>This website itself is an on-going project.</p>
      <p>
        I could probably use a template and start a blog but I decided to make my own from scratch using Gatsby and
        Material UI.
      </p>
      <p>
        Currently I'm using Material UI's components such as the drawer and the Appbar but I've learned a lot by
        implementing these components and tweaking them to my needs.
      </p>
      <p>This site is my first website that is built by using Gatsby, Material UI and React/JavaScript.</p>
    </Layout>
  );
}
