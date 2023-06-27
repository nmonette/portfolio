import { HomeBar } from "./components/toolbar";

import { Grid, Typography, Paper, Box } from "@mui/material";

import { useRef } from "react";

import face from "./IMG_6722.JPG"

function App() {
  let about_scroller = useRef()
  let projects_scroller = useRef()
  // <Typography sx={{fontFamily:"Helvetica", mt:2, mx:2}} variant="body">about</Typography>
  return(
    <>
    <HomeBar about={about_scroller} projects={projects_scroller} />
    <Grid container columns={12} sx={{my:2}}>
      <Grid item ref={about_scroller} xs={12} >
        <Grid container columns={12} justifyContent="center" spacing={4} sx={{my:2}}>
          <Grid item xs={4}>
            <Typography sx={{fontFamily:"Helvetica"}} variant="h4" component="h4">Nathan Monette</Typography>
            <Typography sx={{fontFamily:"Helvetica"}} variant="body" component="em">[firstname] [lastname]1 at gmail dot com</Typography>
            <Typography sx={{fontFamily:"Helvetica", fontSize:18, mt:2}} variant="body" component="div">
              I'm currently an undergraduate at the University of California Irvine, pursuing a B.S. in Computer Science with a minor in Mathematics.
              <br/><br/>
              I specialize in Intelligent Systems, which is UCI's AI/ML emphasis. I support that emphasis with research in Algorithmic Game Theory and
              Multi-Agent Reinforcment Learning under Dr. Ioannis Panageas.
              <br/><br/>
              Broadly, my research interests lie in games and deep learning, particularly deep reinforcement learning. As is observable by my projects,
              I have a particular interest in European football/soccer.
            </Typography>
          </Grid>
          <Grid item xs={4}><img src={face} alt="facePic" style={{width:400, height:400}} /></Grid>
        </Grid>
      </Grid>
      <Grid item ref={projects_scroller} xs={12}>
        <Grid container>
          <Box sx={{mx:4, my:2}}>
            <Paper elevation={3}>
              <Typography sx={{fontFamily:"Helvetica", mt:2, mx:2}} variant="body">projects</Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default App;
