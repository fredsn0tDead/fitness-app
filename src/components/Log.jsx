/* eslint-disable */
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const Log = () => {
  const[formData, setFormData] = useState({
    
    Excersize:"",
    Repitions:"",
    Sets:"",
    Weight:"",
    RPE:"",
    

  });

  const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  try {
    // Make a POST request with form data using Axios
    const response = await axios.post('http://127.0.0.1:5000/submit-form', formData);

    // Handle the response
    console.log("Form submitted successfully");
    // You can update the state or perform any other actions with the response data
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("Form submission failed:", error);
  }
};

    
    return (



        <form onSubmit={handleSubmit}>
        {/* Render form fields here */}
        <label>
        Excersie:
        <input
          type="text"
          value={formData.Excersize}
          onChange={(e) => setFormData({ ...formData, Excersize: e.target.value })}
          placeholder="Excersize"
        />
        </label>
        <label>
        Repitions:
        <input
          type="text"
          value={formData.Repitions}
          onChange={(e) => setFormData({ ...formData, Repitions: e.target.value })}
          placeholder="Repitions"
        />
        </label>
        <label>
        Sets:
        <input
          type="text"
          value={formData.Sets}
          onChange={(e) => setFormData({ ...formData, Sets: e.target.value })}
          placeholder="Sets"
        />
        </label>
        <label>
        Weight:
        <input
          type="text"
          value={formData.Weight}
          onChange={(e) => setFormData({ ...formData, Weight: e.target.value })}
          placeholder="Weight"
        />

        </label>
        <label>
        RPE:
        <input
          type="text"
          value={formData.RPE}
          onChange={(e) => setFormData({ ...formData, RPE: e.target.value })}
          placeholder="RPE"
        />  
        </label> 
        
        {/* ... */}
        <button type="submit">Submit</button>
      </form>
  )
}

export default Log