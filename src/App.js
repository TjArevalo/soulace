import React, {useRef} from 'react';
import { Home, Navbar, About } from "./Components";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundVideo from "./assets/video/SoulaceBackgroundCompressed.mov";

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
    fontFamily:["El Messiri",].join(','),
    h1:{
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
    h2:{
      fontSize: "1.7rem",
      color: "#F5CC00"
    },
    subtitle1:{
      fontSize:"1.5rem",
      color: '#3D0066'
    },
    subtitle2:{
      fontSize:"0.9rem",
      color: 'white'
    },
    link:{
      marginBottom: "5px",
      cursor: "cell"
    }
  },
});

export default function App() {

  const vidRef = useRef();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>

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
    </BrowserRouter>
  )
}

