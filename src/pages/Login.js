import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(5)
  },
  h4: {
    marginTop: theme.spacing(2)
  },
  h2: {
    fontWeight: '500'
  }
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Container component="main">
      <Typography variant="h2" className={classes.h2}>
        SPOTIFOOD
      </Typography>
      <Typography variant="h4" className={classes.h4}>
        Best playlists to enjoy your food
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
      >
        Login com Spotify
      </Button>
    </Container>
  );
}