import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
export const Home = () => {

  const [excersises, setExcersises] = useState([])

  

  useEffect(() => { //useEffect is used to fetch the data from the api
    //create a fecthcData function
    const fetchData = async () => { //async function to fetch data
      const options = {
        method: 'GET',
        url: 'https://exerciseapi3.p.rapidapi.com/exercise/primary_muscle/quads',
        headers: {
          'X-RapidAPI-Key': '961680eb58msh98f84a5663475e9p131d20jsncdef16fc47a6',
          'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
        }
      };
      //try catch block to catch any errors
      try {
        const response = await axios.request(options);
        setExcersises(response.data.exercises); //sets the data to the excersises variable  
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []);

  return (
    
    <div>
      <h1>Excersises</h1>
      {excersises.map(excersise => ( //maps through the excersises variable and displays the data
        <div key={excersise.id}>
          <h1>{excersise.name}</h1>
          <p>{excersise.difficulty}</p>
          
    
    </div>
      ))}
    </div>

  
  )
}
