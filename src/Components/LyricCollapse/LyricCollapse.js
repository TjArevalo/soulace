import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';

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
    <Accordion sx={{backgroundColor:'transparent', margin:0}}>
        <AccordionSummary id={song.song.id} expandIcon={<VisibilityIcon sx={{color:'white'}} />}>
            <Typography sx={{color: 'white'}}>{song.song.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{color:'white'}}>{newText}</Box>
        </AccordionDetails>
    </Accordion>

  )
}
