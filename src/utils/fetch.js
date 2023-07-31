import axios from 'axios';
const BaseUrl = 'https://exercisedb.p.rapidapi.com/exercises/name/%7Bname%7D'; // Base URL for the API
// export const exerciseData = {

//     method: 'GET',
//     url: '873f799052mshcc0d8555425d6afp17f4fcjsnc6e6924e3f6e',
//     headers: {
//       'X-RapidAPI-Key': '873f799052mshcc0d8555425d6afp17f4fcjsnc6e6924e3f6e',
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   };


// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/name/%7Bname%7D',
//   headers: {
//     'X-RapidAPI-Key': '873f799052mshcc0d8555425d6afp17f4fcjsnc6e6924e3f6e',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
export const fetchData = async (excersise) => {
  const apiurl = `https://exercisedb.p.rapidapi.com/exercises/name/${excersise}`
  const options = {
    method: 'GET',
    url: apiurl,
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }

  // const response = await fetch(`${BaseUrl}${options}`);
  // const data = await response.json();
  // return data;

}