import React from 'react'
import{styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link,useNavigate} from 'react-router-dom'

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '8px', // Use the desired padding value
});

const StyledPaper = styled(Paper)({
  padding: '16px', // Use the desired padding value
  maxWidth: '400px',
  textAlign: 'center',
});

const Heading = styled(Typography)({
  marginBottom: '8px', // Use the desired margin value
});

const SearchBox = styled(TextField)({
  margin: '16px 0', // Use the desired margin value
});

const ActionButtonsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '16px', // Use the desired margin value
});

const ActionButton = styled(Button)({
  flex: '1',
  padding: '16px', // Use the desired padding value
  textAlign: 'center',
  backgroundColor: (props) => props.theme.palette.primary.main,
  color: (props) => props.theme.palette.primary.contrastText,
  cursor: 'pointer',
  marginRight: '8px', // Use the desired margin value
});
// used to search for older workouts create a new workout and view your progress
//should be able to output a graph of your progress
export const Dashboard = () => {
  
  
  return (
    <RootContainer>
    <StyledPaper elevation={3}>
      <Heading variant="h5">Welcome Back</Heading>
      <Typography variant="subtitle1">
        What do you want to do today?
      </Typography>
      
      <ActionButtonsContainer>
        <ActionButton
          variant="contained"
          onClick={() => {
            // Handle click for "Exercise Recommender"
          }}
        >
          <Link to='/exercise-recommender'>Exercise Recommender</Link>
          
        </ActionButton>
        <ActionButton
          variant="contained"
         
        >
         
          <Link to='/exercise-log'>Exercise Log</Link>
        </ActionButton>
        <ActionButton
          variant="contained"
          onClick={() => {
            // Handle click for "Previous Workouts"
          }}
        >
         <Link to='/previous-workouts'>Previous Workouts</Link> 
        </ActionButton>
      </ActionButtonsContainer>
    </StyledPaper>
  </RootContainer>
  )
}
