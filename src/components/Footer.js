import React from "react";
import "./Footer.css"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Footer() {
    

    return (  
<>

    
    <div class="footer">
        <hr></hr>
        
    <Grid container align = "center" justify = "center" alignItems = "center">
    <Grid item xs={12}>
        <Typography variant="subtile2">Enjoy the site? Consider tipping to keep the project alive!</Typography>
    </Grid>
    <Grid item xs={12}>
        <Typography variant="subtile2">Send tips to: 0x80239dc724294AFba2F5EF8B894A4daDf509aD45</Typography>
    </Grid>
    </Grid>
    </div>
    
    
</>
    )
}
