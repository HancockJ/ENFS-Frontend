import React from "react";
import Grid from "@mui/material/Grid";
export default function ButtonBoard({query, resetQuery}) {
    const appendRegex = (regex) => {
        resetQuery(query + regex)
    }

    return (
            <Grid container alignItems="center" alignContent="center" flexDirection="row" spacing={2}>
                <Grid item xs={12}>
                    <button onClick={function() {appendRegex('.')}}>Any Character</button>
                    <button onClick={function() {appendRegex('[a-z]')}}>Any Letter </button>
                    <button onClick={function() {appendRegex('\\d')}}>Any Number</button>
                </Grid>
            </Grid>
    )
}