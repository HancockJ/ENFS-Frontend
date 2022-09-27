import React, { useState } from "react";
import "./AppBar.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Matches from "./Matches.js";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function AppBar() {
  return (
    <>
      <div class="AppBar">
        <Grid container justifyContent="flex-end">
          <Grid item xs={1}>
            <Box
              m={1}
              //margin
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button variant="contained">API</Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
