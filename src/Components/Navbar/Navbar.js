import React from 'react'
import { Grid, Typography } from '@mui/material';

export default function Navbar() {

  return (
    <Grid
      maxWidth="xl"
      sx={{position:"fixed", height:"15vh", p:0, zIndex:-0.5}}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1" sx={{color:'primary.light'}}>
        Soul/Ace
      </Typography>
    </Grid>
  )
}
