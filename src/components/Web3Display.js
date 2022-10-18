import React from "react";
import SearchBar from "./SearchBar.js";
import Grid from "@mui/material/Grid";
import "./Web3Display.css"
function Web3Display() {
  return  (
    <>
   <div class="container" >
    <Grid container alignItems="center" justifyContent="center" >
        <h1 class="search-bar-title" > Ethereum Name Finding Service</h1>
        <Grid item xs={12} >
          <SearchBar />
        </Grid>
      </Grid>
      </div>
      </>
  )
}

export default Web3Display;
