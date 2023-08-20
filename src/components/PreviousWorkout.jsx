import React from 'react'
import { useState,useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useLocation } from 'react-router-dom';
import { auth } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
export const PreviousWorkout = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [workoutData, setWorkoutData] = useState(null);
    const location = useLocation();
    const {displayName, email, uid} =  location.state || {};
    const [user, setUser] = useState(null);
    console.log('Exercise Log component rendering...');
     console.log('User info:', displayName, email, uid);

     useEffect(() => {
      const auth = getAuth();
  
      // Use onAuthStateChanged to listen for changes in authentication state
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user); // Update the user state when authentication state changes
      });
  
      return () => {
        unsubscribe(); // Clean up the listener when the component unmounts
      };
    }, []);

    const handleDateChange = newDate => {
        formatDate(newDate);
        setSelectedDate(newDate);
        fetchWorkoutData(newDate);
      };
      const fetchWorkoutData = async (date) => {
        const formattedDate = formatDate(date);
        if (user && uid) {
        try {
          
          const idToken = await user.getIdToken();
          const response = await fetch(`http://127.0.0.1:5000/get-workout?date=${formattedDate}`, {
            headers: {
              Authorization: `${idToken}`,
            },
          });
          const data = await response.json();
          setWorkoutData(data);
        } catch (error) {
          console.error('Error fetching workout data:', error);
        }
      }
    };
      
  const formatDate = date => {
    // Implement your date formatting logic to match MongoDB custom_id
    // For example: YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    const id = `${year}${month}${day}`;
    console.log(id);
    return `${year}${month}${day}`;
    
  };

  return (
    <div className='container-calendar' > {}
         <h1>Workout Calendar</h1>{ /* Calendar */}
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
        {workoutData && (
          <div className="workout-details">
            <h2>Workout Details for {selectedDate.toDateString()}</h2> { /* Workout Details  */} 
            <pre>{JSON.stringify(workoutData, null, 2)}</pre>
          </div>
        )}
      </div>

    </div>
  )
}
