import React from 'react'
import { useState,useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export const PreviousWorkout = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [workoutData, setWorkoutData] = useState(null);
    const handleDateChange = newDate => {
        formatDate(newDate);
        setSelectedDate(newDate);
        fetchWorkoutData(newDate);
      };
      const fetchWorkoutData = async (date) => {
        const formattedDate = formatDate(date);
        try {
          const response = await fetch(`http://127.0.0.1:5000/get-workout?date=${formattedDate}`);
          const data = await response.json();
          setWorkoutData(data);
        } catch (error) {
          console.error('Error fetching workout data:', error);
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
    <div className='container-calendar' >
         <h1>Workout Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
        {workoutData && (
          <div className="workout-details">
            <h2>Workout Details for {selectedDate.toDateString()}</h2>
            <pre>{JSON.stringify(workoutData, null, 2)}</pre>
          </div>
        )}
      </div>

    </div>
  )
}
