import React, { useEffect, useRef, useState } from 'react'
import { Home, LyricCollapse } from "./Components"
import { Box } from "@mui/system"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BackgroundVideo from "./assets/video/SoulaceBackgroundCompressed.mov"
import lyricAPI from "./Components/API-calls/get"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(53, 54, 59)',
      light: "#EBEBEB"
    },
    secondary:{
      main: 'rgba(53, 54, 59, 0.5)'
    }
  },
  typography:{
    h1:{
      fontSize: "2rem",
      fontStyle: "italic"
    },
    h2:{
      color: "#FFFFFF",
      fontSize: "1.5rem",
      fontStyle: "italic",
      marginTop: "5px",
      marginBottom: "5px",
      '&:hover': {
        color: "purple",
        cursor: "cell"
     },
    },
    link:{
      marginBottom: "5px",
      cursor: "cell"
    }
  }
});

export default function App() {
  const [lyrics, setLyrics] = useState([]);

  const vidRef = useRef();

  // useEffect(() => { vidRef.current.play(); },[]);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await lyricAPI.get('/lyrics')
        // Axios automatically catches responses outside the 200 range.
        setLyrics(response.data);
        console.log(response.data);
      } catch(err) {
          if (err.response){
            console.log(err.response.data)
            console.log(err.response.status)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchLyrics()
  },[])

  if(lyrics === []){
    return <div />
  } else { 
      return (
        <ThemeProvider theme={theme}>
          <Box>
            <Home />
            {lyrics.map((song) => {
              // console.log(typeof song)
              return(
                <LyricCollapse song={song} key={song.id} sx={{display:'flex', alignItems:'center' }} />
              )
            })}
          </Box>
          <video 
              ref = {vidRef}
              loop 
              autoPlay 
              muted 
              style={{
                position:"fixed",
                width:"100vw", 
                height:"100vh", 
                top: 0,
                objectFit:"fill", 
                zIndex:"-1"}}>
              <source src={BackgroundVideo} type="video/mp4"/>
            </video>
        </ThemeProvider>
      )
  }
}
