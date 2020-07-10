import React from 'react';
import styles from './Cards.module.css'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Countup from 'react-countup';
import cx from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';



export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {


    if (!confirmed)
        return (
            <div >
                <CircularProgress disableShrink color="secondary" />
            </div>
        )

    return (
        <div className={styles.container}>
            <Grid container spacing={2} justify='center'>
                <Grid item xs={12} md={3} sm={4} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                        <Typography variant="h5" component="h2">
                            <Countup start={0} end={confirmed.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Infacted People from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} sm={4} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                        <Typography variant="h5" component="h2">
                            <Countup start={0} end={recovered.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Recovered People from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} sm={4} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                        <Typography variant="h5" component="h2">
                            <Countup start={0} end={deaths.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Deaths Caused by Covid19</Typography>
                    </CardContent>
                </Grid >

            </Grid >

        </div>);
}


