import React from 'react'
import Navbar from "../Navbar/Navbar"
import { Box, Grid, Typography } from '@mui/material';
import ContactlessIcon from '@mui/icons-material/Contactless';
import AlbumArt from "../../assets/imgs/Four.JPEG"
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
      <Box sx={{p:0}}>
        <Navbar />
        <Grid container direction="row">
          <Grid item xs={3} sx={{height:"85vh"}} display="flex" alignItems="center">
            <Box sx={{ml:2}} display="flex" flexDirection="column">
              <ContactlessIcon />
              <AppleIcon />
              <FacebookIcon />
              <InstagramIcon />
              <EmailIcon />
            </Box>
          </Grid>
          <Grid item container xs={6} sx={{height:"85vh"}} display="flex" justifyContent="center" alignItems="center">
            <Box sx={{maxHeight: "300px", maxWidth:"300px"}} component="img" src={AlbumArt}></Box>
          </Grid>
          <Grid item xs={3} sx={{height:"85vh"}} display="flex" flexDirection="row-reverse" alignItems="center">
          <Box sx={{mr:2}} display="flex" flexDirection="column" textAlign="right">
            <Typography>About</Typography>  
            <Typography>Releases</Typography>  
            <Typography>Merch (TBA)</Typography>  
            <Typography>Contact</Typography>  
          </Box>
          </Grid>
        </Grid>
      </Box>
    
  )
}
