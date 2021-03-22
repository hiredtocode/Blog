/** @format */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout';
import NamaSushi from '../components/namasushi';
import WebDevMadness from '../components/webdev';
import JsAlgoAndData from '../components/jsalgocert';
import ResponsiveWebCertif from '../components/responsivewebcertif';

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
          <JsAlgoAndData />
        </Grid>
        <Grid item>
          <ResponsiveWebCertif />
        </Grid>
      </Grid>
    </Layout>
  );
}
