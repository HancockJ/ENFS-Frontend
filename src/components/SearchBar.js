import React, {useState} from "react";
import "./SearchBar.css"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Matches from "./Matches.js";


export default function SearchBar() {
    const [query, setQuery] = useState("");

    return (  
<>
<Grid container align = "center" justify = "center" alignItems = "center" >
    <Grid item xs={12}>
    <input class="search-box" type="text" onChange={event => {
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
