import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import SoulaceIMG from "../../assets/imgs/Artist_Portrait-min.jpg"

export default function About() {
  return (
    <Box sx={{paddingTop:'15vh'}}>
        <Grid container sx={{height:"85vh"}}>
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Box sx={{width: "350px", height: "400px", borderRadius:"100px"}} component="img" src={SoulaceIMG} />
          </Grid>
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center", padding: "50px"}}>
            <Typography variant='subtitle2'>
              Soulace is an art project born out of a need to express something 
              vehemently honest. Born in Manila, Philippines and raised in Vancouver, BC, 
              Soulace lived in a Catholic household and spent the entirety of 
              his life consumed by questions about himself and morality. 
              Surrounded by music from a young age, Soulace found himself in a 
              church choir during his teenage years, where he would eventually 
              meet the members of his first band - It Ends With Us. 
              After a number of years with his band, he would eventually 
              embark on a personal journey of self discovery, departing 
              from It Ends With Us and starting his own solo project in 2018 
              with the release of his single - "Disrespectful". A poet initially, Soulace 
              crafts his lyrical theme around the subject of his own journey 
              to understand the most redeeming, as well as the most damning parts 
              of himself. Taking melodic inspiration from artists like Gallant, 
              Bruno Mars, and Saint JHN, Soulace blends his songs around the genre’s 
              of Soul, RnB, and Rap. His art is a form of self-destruction. 
              Soulace creates music to be understood.
            </Typography>
          </Grid>
        </Grid>
    </Box>
  )
}
