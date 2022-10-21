import React from "react";
import Grid from "@mui/material/Grid";
export default function ButtonBoard() {
    const debug = () => {
        console.log("Clicked")
    }
    return (
        <>
            <Grid container direction="column" align = "center" justify = "center" alignItems = "center" spacing={2}>
                <Grid item xs={12}>
                    <button style={{}} onClick={debug}>Click me</button>
                </Grid>
                <Grid item xs={12}>
                    <button style={{}} onClick={debug}>Click me</button>
                </Grid>
                <Grid item xs={12}>
                    <button style={{}} onClick={debug}>Click me</button>
                </Grid>
            </Grid>
        </>
    )
}