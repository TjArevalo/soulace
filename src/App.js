import React from 'react'
import { Home } from "./Components"
import { Box } from "@mui/system"
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
});

// https://drive.google.com/file/d/1M-o09kF2kPVsjJcXCMnnZqX4yc_jKxpy/view?usp=sharing

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Home />
      </Box>
    </ThemeProvider>
  )
}
