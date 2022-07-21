import React from 'react'
import { Box, Grid } from '@mui/material';
import Logo from "../../assets/imgs/logo/SoulACE_White-Logo.png"

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
      <Box sx={{width: '110px', height: '70px'}} component="img" src={Logo} />
    </Grid>
  )
}
