import React, {useState, useEffect} from "react";
import "./Matches.css"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {  useSelector } from "react-redux";

export default function Matches({matches}) {
    const genex = require("genex");
    const blockchain = useSelector((state) => state.blockchain);
    const [names,setNames] = useState({})
    const [output,setOutput] = useState({})
    const checkName = async (name) => {
        return blockchain.ethers.resolveName(name + ".eth").then((address) => {
          return address
        });
      };
      useEffect(() => {
        if (matches.length>0){
            console.log("CHECKING",matches)
            try {
                const pattern = genex(matches);
                if (pattern.count() < 1000) {
                  let matches = pattern.generate();
                  let _legalMatches = matches.filter((word) => /^[A-Za-z\d]*$/.test(word));
                  let temp_dict = {}
                  _legalMatches.map(async  match=>{
                      let availability = await checkName(match)
                      temp_dict[match] = availability
                      console.log("setting names",temp_dict)
                      const temp_names = {...temp_dict}
                      setNames(temp_names)
                  })
                }
              } catch (error) {
                setNames({});
              }
        }
      }, [matches]);
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
                    return (<><tr><td key={match}>{match}.eth</td><td>{output[match]?output[match]:<a class= "purchase-link" href={"https://app.ens.domains/search/"+match}>Buy Now</a>}</td></tr></>)
                })}</table>
    </Grid>
</Grid>

    
</>
    )
}
