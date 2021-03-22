/** @format */

import React from 'react';
import { Grid, Divider, makeStyles } from '@material-ui/core';
import Layout from '../components/layout';
import NamaSushi from '../components/namasushi';
import WebDevMadness from '../components/webdev';
import JsAlgoAndData from '../components/jsalgocert';
import ResponsiveWebCertif from '../components/responsivewebcertif';

const useStyles = makeStyles(() => ({
  divider: {
    marginTop: `50px`,
    marginBottom: `50px`,
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item>
          <NamaSushi />
        </Grid>
        <Grid item>
          <WebDevMadness />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container xs={12} spacing={3}>
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
