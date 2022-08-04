import React, { useState } from "react";
import { connectProvider } from "../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar.js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styled from '@emotion/styled'


function Web3Display() {
  const blockchain = useSelector((state) => state.blockchain);
  const dispatch = useDispatch();

  
  const connectToProvider = () => {
    return (
      <button
        onClick={async (e) => {
          e.preventDefault();
          dispatch(connectProvider());
        }}
      >
        Connect To Provider
      </button>
    );
  };

  
  return blockchain.ethers ? (
    
      <Grid container alignItems="center" justifyContent="center" style={{marginTop: "20%"}} >
        <Typography variant="h3"> Ethereum Name Finding Service</Typography>
        
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Typography>
          {blockchain.ethers.network ? (
            <h5>
              You are connected to the {blockchain.ethers.network.name} network.
            </h5>
          ) : null}
        </Typography>
        
      </Grid>
    
  ) : (
    <div>
      <h3>Ethereum Name Finding Service</h3>
      {connectToProvider()}
    </div>
  );
}

export default Web3Display;
