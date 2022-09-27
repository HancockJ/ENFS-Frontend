import React, {useState, useEffect} from "react";
import "./TableRow.css"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Matches from "./Matches.js";

export default function TableRow({row_data}) {


    const [rowItems, setRowItems] = useState({});

    // useEffect( () => {
    //     row_data.map(())
        
    //   }, [row_data]);

    return (  
<>

<Grid container align = "center" justify = "center" alignItems = "center" >
    <Grid item xs={12}>
    <input class="search-box" type="text" placeholder="Enter Regex /<expression>/" onChange={event => {
        setQuery(event.target.value)
}
    }/>
          
    </Grid>
    <Grid item xs={12}>
          <Matches string={query} />
        </Grid>


</Grid>
    
</>
    )
}
