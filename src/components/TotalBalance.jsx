import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import useStyles from '../css/styles';
import {Typography } from '@material-ui/core';



const TotalBalance = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value); 
    };

    return (
        <>
            <Grid container spacing={3} className={classes.balance_container}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper className={fixedHeightPaper}>
                            <div className={classes.containerBal}>
                                    <div className="total_bal">
                                        <Typography variant='body' id='tot_text'>Total account balance</Typography>
                                        <div class="dropdown">
                                            <button class="dropbtn">USD</button>
                                            <div class="dropdown-content">
                                                <a href="#">NGN</a>
                                                <a href="#">GHC </a>
                                                <a href="#">EURO </a>
                                            </div>
                                        </div>
                                    </div>
                                    <Typography variant='h2' className={classes.balnce}>$5,332.18</Typography>
                                    <small className={classes.small_bal}>1 USD = 381.97 NGN</small>
                            </div>
                        </Paper>
                    </Grid>
                    {/* funds on  hold */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Paper className={fixedHeightPaper}  className={classes.funds_hold}>
                                <div className={classes.containerBal} >
                                    <Typography variant='body2' className={classes.fund}>Funds on hold</Typography>
                                    <div className={classes.line}></div>
                                    <div>
                                        <Typography className={classes.fundValue} variant='h2'>$5,332.18</Typography>
                                    </div>
                                </div>                            
                            
                        </Paper>
                    </Grid>
            </Grid> 
        </>
    )
}

export default TotalBalance
