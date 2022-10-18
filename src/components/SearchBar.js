import React, {useState} from "react";
import "./SearchBar.css"
import Grid from '@mui/material/Grid';
import Matches from "./Matches.js";


export default function SearchBar() {
    const [query, setQuery] = useState("");

    return (  
<>

<Grid container align = "center" justify = "center" alignItems = "center" >
    <Grid item xs={12}>
    <input class="search-box" type="text" placeholder="Enter Regex /<expression>/" onChange={event => { 
        //create a timer for two seconds that gets cleared if the user types again
        let timer
        clearTimeout(timer);
        timer = setTimeout(() => {
            setQuery(event.target.value);   
        }, 2000);
    }}/>
          
    </Grid>
    <Grid item xs={12}>
          <Matches string={query} />
    </Grid>
</Grid>
    
</>
    )
}
