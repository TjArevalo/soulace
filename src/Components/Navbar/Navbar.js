import React from 'react'
import { Grid, Typography } from '@mui/material';

export default function Navbar() {

  return (
    <Grid
      maxWidth="xl"
      sx={{height:"15vh", bgcolor: "secondary.main", p:0}}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography varient="h1" sx={{color:'primary.light', fontsize:"12rem"}}>
        Soul/Ace
      </Typography>
    </Grid>
  )
}
