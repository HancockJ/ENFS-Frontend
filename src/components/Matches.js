import React, { useState, useEffect } from "react";
import "./Matches.css"
import Grid from '@mui/material/Grid';
import axios from 'axios';
import config from '../config.json';
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
// import {createStyles, makeStyles} from "@mui/material";


export default function Matches({ string }) {

    const [names, setNames] = useState({})
    // const [output, setOutput] = useState({})
    const [rows,setRows] = useState([])
    const columns = [
        // {field: 'id', headerName: 'Id', width: 130},
    {field: 'name', headerName: 'Domain',
        renderCell: (params) => {
            let _url = `https://app.ens.domains/search/`+params.row.name
            console.log("params",params)
            return (<>
                {<a href={_url}>{params.value}</a>}
            </>)
        }
    },
    {field: 'owner', headerName: 'Owner',flex: 1,
        renderCell: (params) => { return (
            params.value ?
                <p>{params.value}</p>
                :
                <p>Available</p>
        )}
    },
    
    ];

    // const useStyles = makeStyles(() =>
    // createStyles({
    //     root: {
    //     "& .MuiDataGrid-renderingZone" : {
    //
    //     }
    //     },
    //
    // }))


    const checkName = async (name) => {
        return axios.post(config.BACKEND_URL, { regex: name })
            .then(response => {

                return response.data
            })
            .catch(error => {

                return null
            })

    };
    useEffect(() => {
        async function _proxyNameCheck() {
            if (string.length > 2) {
                try {
                    const availability = await checkName(string)
                    let temp_dict = {}
                    temp_dict = availability
                    const temp_names = { ...temp_dict }
                    setNames(temp_names)
                    
                } catch (error) {
                    setNames({});
                }
            }


        }
        _proxyNameCheck();
    }, [string]);
    useEffect(() => {
        // setOutput({})
        if (Object.keys(names).length > 0) {
            // setOutput(names)
            setRows([])
            
            // add an id to each name in the names object
            let temp_rows = []
            for (let name in names) {
                let temp_row = {}
                temp_row["id"] = name
                temp_row["name"] = name+".eth"
                temp_row["owner"] = names[name].owner
                temp_rows.push(temp_row)
            }
            setRows(temp_rows)
        }
    }, [names])



    return (
    rows.length > 0 ?
    <Grid container align="center" justify="center" alignItems="center">
        <Grid item xs={12}>
            <Box id="datagrid-table" sx={{
                '& .available': {
                    bgcolor: "rgb(204,255,204)",
                },
                '& .owned': {
                    bgcolor: "rgb(255,204,204)",
                }
                }}
            >
                <DataGrid
                rows={rows}
                columns={columns}
                autoHeight={true}
                getRowClassName={(params) => params.row.owner ? 'owned' : 'available'}
                />
            </Box>
        </Grid>
    </Grid>
    :
    null
    )
}

// Keeping this if we need later
/* <Grid item xs={12}>

                    {output[0] !== '' && output.length > 0 ? <p>This string yields {output.length} combinations.</p> : null}
                    <table class="matches-table"><tr><th>ENS Domain</th><th>Availability</th></tr>
                        {Object.keys(output).map(match => {
                            return (<><tr><td key={match}>{match}.eth</td><td>{output[match].owner ? output[match].owner : <a class="purchase-link" href={"https://app.ens.domains/search/" + match}>Buy Now</a>}</td></tr></>)
                        })}</table>
                </Grid> */