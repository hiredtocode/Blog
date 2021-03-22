/** @format */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import NamaSushi from '../components/namasushi';
import WebDevMadness from '../components/webdev';

export default function Portfolio() {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item>
          <NamaSushi />
        </Grid>
        <Grid item>
          <WebDevMadness />
        </Grid>
        <Grid item>
          <StaticImage
            src="../../static/images/jsalgoandds.jpg"
            alt="Javascript algorithm and data structure"
            width={400}
            loading="eager"
          />
          <StaticImage
            src="../../static\images\responsiveweb.jpg"
            alt="Javascript algorithm and data structure"
            width={400}
            loading="eager"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}
