import { Button, ThemeProvider, makeStyles, Grid } from '@material-ui/core';
import React from 'react'
import { useHistory } from "react-router-dom";
import theme from './theme/theme';


const useStyle = makeStyles((theme) => ({


  skillchip: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    fontSize: "5vh",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: 1000,
    backgroundColor: "cyan",
    color: "black",
  },

}));



export default function LandingPage() {
  const classes = useStyle();
  const history = useHistory()

  const handleOnApplicants = () => {
    history.push("/Userlogin");

  }
  const handleOnTeraformer = () => {
    history.push("/login");
  }


  return (
    <ThemeProvider theme={theme} className="d-flex align-item-center justify-content-center" >
        <Box py={8} style={{backgroundImage: 'linear-gradient(to right, #6aeef7, #010336 )'}} color="white">
          <Grid container justify="center">
            <Grid item xs={10}>
                <Box>
                  <Typography variant="h3"><center><strong>Website for Job Seeker & Recruiters</strong></center></Typography>
                  <br></br>
                  <Typography variant="p"><center>In this Job searching website you can Sign up, Login, Post the job Vacancies, Drag & Drop the post as per priority, Boundry Color as per the days left & Apply for any openings </center></Typography>
                  <br></br>
                  <br></br>
                  <Typography variant="h4"><center><strong>Are your Recruiter/Terraformer or Applicant?</strong></center></Typography>                  
                </Box>
            </Grid>
          </Grid>
        </Box>

      <div className="container my-4" >
      <ButtonGroup style={{ marginLeft:'10%', marginTop:'4%'}} variant="contained" aria-label="outlined primary button group">
          <Button style={{ minWidth: "30vw", minHeight: "20vh" }} className={classes.skillchip} onClick={handleOnTeraformer} bgcolor="green">
            <strong>Terraformer</strong>
          </Button>



          <Button style={{ minWidth: "30vw", minHeight: "20vh" }} className={classes.skillchip} onClick={handleOnApplicants}>
            <strong>Applicant</strong>
          </Button>
        </ButtonGroup>

      </div>



    </ThemeProvider>
  )
}
