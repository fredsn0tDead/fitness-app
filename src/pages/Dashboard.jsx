import React from 'react'
import{styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link,useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { ExcersieLog } from '../components/ExcersieLog';
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
  // const location = useLocation();
  // const { displayName, email, uid } = location.state || {};
  const location = useLocation();
  const navigate = useNavigate();
  const  {displayName, email, uid} =  location.state || {};
  console.log('Dashboard component rendering...');
  console.log('User info:', displayName, email, uid);
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
            navigate('/previous-workouts', { state: { displayName, email, uid } });
          }}
        >
          Exercise Recommender
          
        </ActionButton>
        <ActionButton
          variant="contained"
          onClick={() => {
            navigate('/exercise-log', { state: { displayName, email, uid } });
          }}
        >Exercise Log
        </ActionButton>
        <ActionButton
         variant="contained"
         onClick={() => {
          navigate('/previous-workouts', { state: { displayName, email, uid } });
        }}

        >
         Previous Workouts
        </ActionButton>
     
      </ActionButtonsContainer>
    </StyledPaper>
  </RootContainer>
  )
}
