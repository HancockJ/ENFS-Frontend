import React, {useState, useEffect} from "react";
import "./Matches.css"
import Grid from '@mui/material/Grid';
import axios from 'axios';
import config from '../config.json';

export default function Matches({string}) {
    
    const [names,setNames] = useState({})
    const [output,setOutput] = useState({})
    const checkName = async (name) => {
        return axios.post(config.BACKEND_URL, {regex: name})
    .then(response => {
        console.log(response.data);
        console.log("SUCCESS")
        return response.data
    })
    .catch(error => {
        console.log(error)
        console.log("ERROR")
        return null
    })
        
      };
      useEffect( () => {
        async function _proxyNameCheck(){
            if (string.length>2){
                console.log("CHECKING",string)
                try {
                    const availability = await checkName(string)
                    console.log("availability",availability)
                    let temp_dict = {}
                    temp_dict = availability
                    console.log("setting names",temp_dict)
                    const temp_names = {...temp_dict}
                    setNames(temp_names)
                  } catch (error) {
                    console.log(error)
                    setNames({});
                  }
        }
        
        
        }
        _proxyNameCheck();
      }, [string]);
      useEffect(()=>{
        console.log("running output",names)
        setOutput({})
        if (Object.keys(names).length>0){
            setOutput(names)
        }
      },[names])
      
    return (
<>
<Grid container align = "center" justify = "center" alignItems = "center">
    <Grid item xs={12}>
        
                {output[0] !== '' && output.length > 0 ? <p>This string yields {output.length} combinations.</p> : null}
                <table class = "matches-table"><tr><th>ENS Domain</th><th>Availability</th></tr>
                {Object.keys(output).map(match =>{
                    return (<><tr><td key={match}>{match}.eth</td><td>{output[match]?output[match].owner:<a class= "purchase-link" href={"https://app.ens.domains/search/"+match}>Buy Now</a>}</td></tr></>)
                })}</table>
    </Grid>
</Grid>

    
</>
    )
}
