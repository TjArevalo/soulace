import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'

export default function LyricCollapse(song) {
    console.log(song)
    const lyrics = song.song.lyrics
    const newText = lyrics.split('\n').map((str, index) => 
      <Box key={index}>
        <Typography component={'span'} style={{margin: 0}}>{str}</Typography>
        <br />
      </Box>
    )

  return (
    <Accordion sx={{backgroundColor:'transparent', width: '100vw', border:'transparent', display: 'flex', flexDirection:'column', alignItems:'center'}}>
        <AccordionSummary id={song.song.id}>
            <Typography variant='h2' sx={{color: 'white'}}>{song.song.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box variant='subtitle1' sx={{color:'white'}}>{newText}</Box>
        </AccordionDetails>
    </Accordion>

  )
}
