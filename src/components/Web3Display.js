import React from "react";
import SearchBar from "./SearchBar.js";
import Grid from "@mui/material/Grid";
import "./Web3Display.css"
import ButtonBoard from "./ButtonBoard.js";

function Web3Display() {
  return (
    <>
      <div class="container">
        <Grid container alignItems="center" justifyContent="center" >
          <Grid item xs={12} display={{ xs: "none", md: "block" }}>
            <h1 class="search-bar-title" > Ethereum Name Finding Service</h1>
          </Grid>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
            <ButtonBoard />
        </Grid>
      </div>
    </>
  )
}

export default Web3Display;
