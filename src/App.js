import React from "react";

import Web3Display from "./components/Web3Display";
import AppBar from "./components/AppBar"
import Footer from "./components/Footer"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css"

const theme = createTheme({
  palette: {
    primary:{
      main:'#EE6C4D',
      light: '#EE6C4D',
      dark: '#EE6C4D',
    },
    
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <AppBar />
        <Web3Display />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
