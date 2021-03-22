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
    marginTop: `20px`,
  },
  fieldset: {
    border: {
      color: '#fefefe',
      width: 2,
      style: 'solid',
      opacity: 0.2,
    },
    borderRadius: `8px`,
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Layout>
      <fieldset className={classes.fieldset}>
        <legend>
          <h2>Finished Projects</h2>
        </legend>
        <Grid container spacing={3}>
          <Grid item>
            <NamaSushi />
          </Grid>
        </Grid>
      </fieldset>
      <Divider className={classes.divider} />
      <fieldset className={classes.fieldset}>
        <legend>
          <h2>Currently working on Projects</h2>
        </legend>
        <Grid container spacing={3}>
          <Grid item>
            <WebDevMadness />
          </Grid>
        </Grid>
      </fieldset>
      <Divider className={classes.divider} />
      <fieldset className={classes.fieldset}>
        <legend>
          <h2>Certificates</h2>
        </legend>
        <Grid container spacing={3}>
          <Grid item>
            <JsAlgoAndData />
          </Grid>
          <Grid item>
            <ResponsiveWebCertif />
          </Grid>
        </Grid>
      </fieldset>
    </Layout>
  );
}
