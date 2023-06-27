import { Toolbar, AppBar, Button } from "@mui/material";

export function HomeBar({ about, projects }) {

    return (
        <AppBar position="sticky" sx={{backgroundColor:"#a9a9a9"}}>
            <Toolbar>
                <Button color="inherit" onClick={() => window.scrollTo(0,0)} sx={{fontFamily:"Helvetica", fontSize:16}} >about</Button>
                <Button color="inherit"onClick={() => projects.current.scrollIntoView()} sx={{fontFamily:"Helvetica", fontSize:16}} >projects</Button>
            </Toolbar>
        </AppBar>
    ) 
}