import { HomeBar } from "./components/toolbar";
import ProjectCard from "./components/projectCard";

import { Grid, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import face from "./IMG_6722.JPG"
import peter from "./peter.jpeg"
import fd from "./FIFADraft.png"
import tf_logo from "./tflogo.jpeg"

import { createHashRouter, RouterProvider } from "react-router-dom";

function About() {
  return(
    <>
    <HomeBar />
    <Grid container  justifyContent="center" alignContent="center" columns={12} sx={{my:2, flexGrow: 1, overflowX:"hidden", overflowY: "hidden"}}>
      <Grid item  xs={12} >
        <Grid container columns={12} justifyContent="center" spacing={4} sx={{my:2}}>
          <Grid item xs={4}>
            <Typography sx={{fontFamily:"Helvetica"}} variant="h4" component="h4">Nathan Monette</Typography>
            <Typography sx={{fontFamily:"Helvetica"}} variant="body" component="em">[firstname] [lastname]1 at gmail dot com</Typography>
            <Typography sx={{fontFamily:"Helvetica", fontSize:18, mt:2}} variant="body" component="div">
              I'm currently an undergraduate at the University of California Irvine, pursuing a B.S. in computer science with a minor in mathematics. 
              I specialize in intelligent systems, which is UCI's AI/ML emphasis.
            </Typography>
            <Typography sx={{fontFamily:"Helvetica", mt:"10pt"}} variant="h5" component="div">Research</Typography>
            <Typography sx={{fontFamily:"Helvetica", fontSize:18, mt:1}} variant="body" component="div">
            At UC Irvine, I do research in algorithmic game theory and multi-agent reinforcment learning under prof. 
            <Link href="https://panageas.github.io/" underline="hover"> Ioannis Panageas</Link>.
            </Typography>
            <Typography sx={{fontFamily:"Helvetica", fontSize:18, mt:1}} variant="body" component="div">
              <Typography sx={{color:"red"}} variant="body">As of 6/2024</Typography> I have joined  
              <Link href="https://foersterlab.com/" underline="hover"> FLAIR</Link> as a research intern!
              I am working on meta-reinforcement learning and its intersection with game theory and curriculum design. I am lucky to be working under 
              the supervision of <Link href="https://www.jakobfoerster.com/" underline="hover">Jakob Foerster</Link> and 
              <Link href="https://www.jakobfoerster.com/" underline="hover"> Matthew Jackson</Link>.
            </Typography>
            <center>
                <IconButton size="large" href="https://github.com/nmonette">
                  <GitHubIcon fontSize="inherit" />
                </IconButton>
                <IconButton size="large" href="https://linkedin.com/in/nathan-monette/">
                  <LinkedInIcon fontSize="inherit" />
                </IconButton>
            </center>
          </Grid>
          <Grid item xs={4}>
            <img src={face} alt="facePic" style={{width:400, height:400}} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

function Projects() {
  return (
    <>
      <HomeBar/>
      <Typography variant="h3" component="center" sx={{mt:10, fontFamily:"Helvetica"}}>Projects</Typography>
      <Grid container justifyContent="center" alignItems="center" columns={12} sx={{mb:40, mt:"10%"}} style={{ minHeight: '100vh', transform: 'scale(1.2)'}}>
        <ProjectCard title="ZotScheduler" imageSrc={peter} tags={["Web Scraping", "Machine Learning", "Python", "JavaScript"]} >
          ZotScheduler uses tree-ensemble regression models 
          and search algorithms to find the optimal schedule for a UCI student given a set of potential classes for the upcoming quarter.
          <br/><br/>
          I led the AI part of our project, culminating in a "Best AI Hack" award, as well as overall runner-up out of 60+ teams at HackUCI.
          <br/><br/>
          The devpost link is {<a href="https://devpost.com/software/zotscheduler" >here</a>}.
        </ProjectCard>
        <ProjectCard title="FIFARank" imageSrc={tf_logo} tags={["Machine Learning", 'Python', "TensorFlow", "Data Scraping"]}>
          FIFARank is a learning project using scraped popularity and player data from FIFA websites. By utilizing tree and deep learning methods 
          I was able to rank players in the most recent FIFA video game (FIFA 23) in terms of their competitive desirability. 
          <br/><br/>
          The GitHub repository's link is {<a href="https://github.com/nmonette/FIFARank" >here</a>}.
        </ProjectCard>
        <ProjectCard title="FIFADraft" imageSrc={fd} tags={["React", "JavaScript", "Firebase"]}>
          FIFADraft is a fantasy soccer draft app that I made for FIFA tournaments that assists with the creation of custom teams not already 
          preset by the game. I incorporated database structuring that allows users in the same lobby to draft synchronously.
          <br/><br/>
          The website's link is {<a href="https://nmonette.github.io/FIFADraft" >here</a>}.
        </ProjectCard>
      </Grid>
    </>
  )
}

function App() {
  const router = createHashRouter([
    {
        path: "/",
        element: <About />,
    },
    {
        path: "projects", 
        element: <Projects />,
    }
], {shimErrors: true}) 

   return (
        <RouterProvider router={router}  /> // basename={"/portfolio"}
   )
}


export default App;
