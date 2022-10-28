import React from "react";
import SearchBar from "./SearchBar.js";
import Grid from "@mui/material/Grid";
import "./Web3Display.css"

function Web3Display() {
  return (
      <div className="container">
        <Grid container>
          <Grid item xs={12} display={{ xs: "none", md: "block" }}>
            <h1 className="search-bar-title" > Ethereum Name Finding Service</h1>
          </Grid>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
        </Grid>
      </div>
  )
}

export default Web3Display;
