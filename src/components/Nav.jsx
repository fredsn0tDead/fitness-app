// eslint-disable-next-line 

import React from 'react'
import { Link } from 'react-router-dom'
import {AppBar, Toolbar, Typography, Button} from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
export const Nav = () => {
  return (
   
    <AppBar position="static">
        <Toolbar>
            <FitnessCenterIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FORMFIT 
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
     
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            <Button color="inherit" component={Link} to="/login">Log in</Button>
        </Toolbar>
        
    </AppBar>
    

  )
}
