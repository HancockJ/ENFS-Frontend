import React from "react";
import "./AppBar.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function AppBar() {
  return (
    <>
      <div class="AppBar">
       
        <Grid container align="center" justify="center" alignItems="center">  
          <Grid item xs={6}>
           <Box
           m={1}
           //margin
           display="flex"
           justifyContent="flex-start"
           alignItems="flex-start">
           <a id="logo" href="/">
                    {" "}
                  </a>
           </Box>
         
              
           
            </Grid>
            <Grid item xs={6}>
            <Box
              m={1}
              //margin
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button variant="contained"    
              href='https://rapidapi.com/enfs-enfs-default/api/enfs/'>API</Button>
            </Box>
          </Grid>
        </Grid>
        {/* <Grid container justifyContent="flex-end">
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
        </Grid> */}
      </div>
    </>
  );
}
