import React from "react";
import Grid from "@mui/material/Grid";
import SearchBar from "./components/SearchBar";

function App() {
  return (
      <Grid container alignItems="center" justifyContent="center" style={{marginTop: "20%"}} >
          <h1 class="search-bar-title" > Ethereum Name Finding Service</h1>
          <Grid item xs={12}>
              <SearchBar />
          </Grid>
      </Grid>
  );
}

export default App;
