import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    wrapper: {
        borderBottom: "5px solid #e8e8e8",
        borderTop: "5px solid #e8e8e8",
        cursor: "pointer",
        transition: "0.5s",
        margin: "20px",


        "&:hover": {
            boxShadow: "0px 5px 25px",
        },
    },
    companyName: {
        fontSize: "15.5px",
        color: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: 600,

    },
    skillchip: {
        margin: theme.spacing(1),
        padding: theme.spacing(1.25),
        fontSize: "14.5px",
        borderRadius: "30px",
        transition: "3s",
        cursor: "pointer",
        fontWeight: 600,
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    },

}));

export default (props) => {

    const classes = useStyle();
    let endDate = parseInt(props.deadline);
    return (
        <Box p={4} borderRadius={15} borderRight={endDate <= 14 && endDate > 3 ? "10px solid yellow" : (endDate > 21 ? "10px solid green" : "10px solid red")} borderLeft={endDate <= 14 && endDate > 3 ? "10px solid yellow" : (endDate > 21 ? "10px solid green" : "10px solid red")} className={classes.wrapper}>
            <Grid container alignItems="center" >
                <Grid item xs>
                    <Typography className={classes.companyName} variant="subtitle1"><h4><strong>{props.companyName}</strong></h4></Typography>
                    <Typography variant="subtitle1"><h2><strong>{props.title}</strong></h2></Typography>
                    <Typography ><strong><u>Closing in {props.deadline} days</u></strong> </Typography>

                </Grid>
                <Grid item container xs>
                    {props.skills.map((skill) => (
                        <Grid className={classes.skillchip} key={skill} item>{skill}</Grid>
                    ))}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item>
                    <Typography ><strong><u>Job Location: </u>{props.location} || </strong>  <strong><u>Mobile No: </u> {props.phone}</strong></Typography>
                    <Typography ><strong><u>Email id:</u> {props.email}</strong> </Typography>
                    <br></br>

                    </Grid>
                    <Grid item>
                        <Box >
                            <Button className="mx-2" onClick={props.open} variant="outlined">Click Me For Description</Button>
                            <Button variant="outlined">I am interested</Button>
                        </Box>
                        <Box mt={2}>

                        </Box>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}