import React, {useEffect, useRef} from 'react'
import { Home } from "./Components"
import { Box } from "@mui/system"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BackgroundVideo from "./assets/video/SoulaceBackgroundCompressed.mov"
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
  const vidRef = useRef();
  // useEffect(() => { vidRef.current.play(); },[]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Home />
        <h1>Push</h1>
        <h1>Push</h1>
        <h1>Push</h1>
        <h1>Push</h1>
        <h1>Push</h1>
        <h1>Push</h1>
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
