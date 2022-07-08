import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded'

export default function LyricCollapse(song) {
    console.log(song)
  return (
    <Accordion>
        <AccordionSummary id={song.song.id} expandIcon={<ExpandMoreRounded />}>
            <Typography>{song.song.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>{song.song.lyrics}</Typography>
        </AccordionDetails>
    </Accordion>

  )
}
