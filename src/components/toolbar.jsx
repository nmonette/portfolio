import { Toolbar, AppBar, Button } from "@mui/material";
import { useNavigate } from "react-router";

export function HomeBar() {
    const navigate = useNavigate()
    return (
        <AppBar position="sticky" sx={{backgroundColor:"#a9a9a9"}}>
            <Toolbar>
                <Button color="inherit" onClick={() => navigate("/")} sx={{fontFamily:"Helvetica", fontSize:16}} >about</Button>
                <Button color="inherit"onClick={() => navigate("/projects")} sx={{fontFamily:"Helvetica", fontSize:16}} >projects</Button>
            </Toolbar>
        </AppBar>
    ) 
}