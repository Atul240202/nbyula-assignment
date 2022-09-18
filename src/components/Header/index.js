import React from 'react'
import { Box, Grid, Typography, Button } from '@material-ui/core'


export default (props) =>
    <Box py={8} style={{backgroundImage: 'linear-gradient(to right, #6aeef7, #010336 )'}} color="white">
        <Grid container justify="center">
            <Grid item xs={10}>

                <Box display="flex"justifyContent="space-between" >
                    <Typography variant="h3"><center><strong>Website for Job Seeker & Recruiters</strong></center></Typography>

                    {props.disable===false?<Button onClick={props.openNewJobModal} variant='contained' color="primary" disableElevation><h5><strong>Post Job</strong></h5></Button>:" "}
                </Box>

            </Grid>
        </Grid>

    </Box>

