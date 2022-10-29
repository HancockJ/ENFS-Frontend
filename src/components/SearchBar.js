import React, {useEffect, useState} from "react";
import "./SearchBar.css"
import Grid from '@mui/material/Grid';
import Matches from "./Matches.js";
import "./Web3Display.css"
import ButtonBoard from "./ButtonBoard"


export default function SearchBar() {
    const [partialQuery, setPartialQuery] = useState("");
    const [query, setQuery] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function resetQuery(current) {
        setPartialQuery(current.toLowerCase())
        setSeconds(2);
        setIsActive(true);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            if (seconds > 0) {
                interval = setInterval(() => {
                    setSeconds(seconds => seconds - 1);
                }, 1000);
            } else {
                setIsActive(false);
                setQuery(partialQuery);
            }
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
    <Grid container align = "center" justify = "center" alignItems = "center" spacing={2}>
        <Grid item xs={12}>
                <input id="search-box-1" value={partialQuery} className="search-box" type="text" placeholder="Enter Regex /<expression>/" onChange={event => {
                resetQuery(event.target.value)
                }}
            />
        </Grid>
        <ButtonBoard query={partialQuery} resetQuery={resetQuery}/>
        {
            isActive ?
                <Grid container alignItems="center" alignContent="center" flexDirection="row" spacing={2}>
                    <Grid item xs={12}>
                        <div class="loader"></div>
                    </Grid>
                </Grid>
            :
            null
        }
        <Grid item xs={12}>
            <Matches string={query} />
        </Grid>
    </Grid>
    )
}
