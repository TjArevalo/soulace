import React from 'react'
import Navbar from "../Navbar/Navbar"
import { Box, Grid, Link } from '@mui/material';
import ContactlessIcon from '@mui/icons-material/Contactless';
import AlbumArt from "../../assets/imgs/Four.JPEG"
import AppleIcon from '@mui/icons-material/Apple';
import CloudIcon from '@mui/icons-material/Cloud';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {

  return (
      <Box sx={{p:0}}>
        <Navbar />
        <Grid container direction="row" sx={{height:"100vh"}}>
          <Grid item xs={3} display="flex" alignItems="center">
            <Box sx={{ml:2}} display="flex" flexDirection="column">
              <Link 
                href="https://open.spotify.com/artist/7LRj8lba8QupxeFoO0CXLS?si=lzReqhqIRn211SGs2hMzWw" 
                variant="link"
              >
                <ContactlessIcon 
                  sx={{color: "#1DB954", width:"25px", height: "25px"}} 
                />
              </Link>
              <Link 
                href="https://music.apple.com/us/artist/soulace/1234818670"
                variant="link"
              >
                <AppleIcon 
                  sx={{color:"#A2AAAD", width:"25px", height: "25px"}} 
                />
              </Link>
              <Link 
                href="https://soundcloud.com/sxulace" 
                variant="link"
              >
                <CloudIcon 
                  sx={{color: "#F26F23", width:"25px", height: "25px"}} 
                />
              </Link>
              <Link 
                href="https://twitter.com/Iamsoulace"
                variant="link"
              >
                <TwitterIcon
                  sx={{color: "#1DA1F2", width:"25px", height: "25px"}} 
                />
              </Link>
              <Link 
                href="https://www.facebook.com/Iamsoulace"
                variant="link"
              >
                <FacebookIcon 
                  sx={{color: "#3b5998", width:"25px", height: "25px"}} 
                />
              </Link>
              <Link 
                href="https://www.instagram.com/sxulace/"
                variant="link"
              >
                <InstagramIcon 
                  sx={{color:"#8a3ab9", width:"25px", height: "25px"}} 
                />
              </Link>
              <Link 
                href="mailto:sxulace@gmail.com"
                variant="link"
              >
                <EmailIcon 
                  sx={{color:"#FFFFFF", width:"25px", height: "25px"}} 
                />
              </Link>
            </Box>
          </Grid>
          <Grid item container xs={6} display="flex" justifyContent="center" alignItems="center">
            <Box sx={{maxHeight: "400px", maxWidth:"400px"}} component="img" src={AlbumArt}></Box>
          </Grid>
          <Grid item xs={3} display="flex" flexDirection="row-reverse" alignItems="center">
          <Box sx={{mr:2}} display="flex" flexDirection="column" textAlign="right">
            <Link variant="h2" underline="none" color="h2">{`About`}</Link>  
            <Link variant="h2" underline="none" color="h2">{`Releases`}</Link>  
            <Link variant="h2" underline="none" color="h2">{`Merch (TBA)`}</Link>  
            <Link variant="h2" underline="none" color="h2">{`Contact`}</Link>  
          </Box>
          </Grid>
        </Grid>
      </Box>
    
  )
}
