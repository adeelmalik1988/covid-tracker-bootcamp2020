import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Countup from 'react-countup';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        maxWidth: 1000,
        marginTop: 50

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#3f51b5',
        textTransform: 'capitalize',
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();


    const [globalData, setglobalData] = useState({})



    useEffect(() => {
        async function getData() {
            const {data:{confirmed,recovered , deaths, lastUpdate}}  = await axios.get('https://covid19.mathdro.id/api')
            //console.log(data)
            setglobalData( {confirmed, recovered , deaths, lastUpdate})
            //delete data.results[0].source;
            //setglobalData(modifiedData);
            //console.log(globalData);
            
        }

        getData()
    }, [])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {Object.keys(globalData).map(
                    (key, ind) => {
                        return (
                            <Grid item xs={12} sm={4} key={ind}>
                                <Paper className={classes.paper}
                                    elevation={3}>
                                    <h3 className={classes.title}>
                                        {key.replace(/_/g,' ')}
                                        </h3>
                                
                                    <Countup 
                                    start={0}
                                    end={globalData[key].value}
                                    duration={2.5}
                                    separator=','
                                    />
                                </Paper>
                            </Grid>
                        )
                    }
                )
                }

            </Grid>
        </div >
    );
}
