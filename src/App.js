import { HomeBar } from "./components/toolbar";
import ProjectCard from "./components/projectCard";

import { Grid, Typography } from "@mui/material";

import { useRef } from "react";

import face from "./IMG_6722.JPG"
import peter from "./peter.jpeg"
import fsim from "./FootballSim.png"
import fd from "./FIFADraft.png"
import tf_logo from "./tflogo.jpeg"

function App() {
  let projects_scroller = useRef()
  return(
    <>
    <HomeBar projects={projects_scroller} />
    <Grid container  justifyContent="center" columns={12} sx={{my:2, flexGrow: 1, overflowX:"hidden", overflowY: "hidden"}}>
      <Grid item  xs={12} >
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
              I have a particular interest in European football/soccer and the associated video game FIFA. I am also interested in various aspects of Full-Stack software development.
            </Typography>
          </Grid>
          <Grid item xs={4}><img src={face} alt="facePic" style={{width:400, height:400}} /></Grid>
        </Grid>
      </Grid>
      <Grid container ref={projects_scroller} justifyContent="center" >
        <ProjectCard title="ZotScheduler" imageSrc={peter} tags={["Web Scraping", "Machine Learning", "Python", "JavaScript"]} >
          ZotScheduler is a web app created for Hack at UCI, where our team won runner-up. 
          <br/><br/>
          It uses tree-ensemble regression models 
          and search algorithms to find the optimal schedule for a UCI student given a set of potential classes for the upcoming quarter.
        </ProjectCard>
        <ProjectCard title="FIFARank" imageSrc={tf_logo} tags={["Machine Learning", 'Python', "TensorFlow", "Data Scraping"]}>
          FIFARank is a learning project that scraped popularity and player data from FIFA websites and used Deep Learning and Tree models 
          to rank players in terms of their "meta" quality.
          <br/><br/>
          The GitHub repository's link is {<a href="https://github.com/nmonette/FIFARank" >here</a>}.
        </ProjectCard>
        <ProjectCard title="FootballSim" imageSrc={fsim} tags={["Unity", 'C#']}>
          FootballSim is a bare-bones European Football simulator made for a future project exploring the reward tradeoffs surrounding the offside trap in Football.
          <br/><br/>
          Download it {<a href="https://drive.google.com/drive/folders/17hfz6O7l6XMdUyuRH8UXeDWKBeREgf-r?usp=sharing" >here</a>}.
        </ProjectCard>
        <ProjectCard title="FIFADraft" imageSrc={fd} tags={["React", "JavaScript", "Firebase"]}>
          FIFADraft implements a fantasy soccer draft for custom FIFA tournaments (video game) through a "lobby" system that connects users together through a common link. 
          <br/><br/>
          The website's link is {<a href="https://nmonette.github.io/FIFADraft" >here</a>}.
        </ProjectCard>
      </Grid>
    </Grid>
    </>
  )
}

export default App;
