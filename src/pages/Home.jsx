import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";


const Home = () => {
  // To able to see the data in UI we need to useState and store them there
//! either use blank array since the data in array, or use ? when you do mapping
const [tutorials, setTutorials] = useState([])
  //?Collect all data here and share with the list
  const getTutorials= async()=> {
    try {
       const {data}= await axios.get(import.meta.env.VITE_APP_URL)
       setTutorials(data) // set the data
    } catch (error) {
      console.log(error)
    }
 
  }
 
 //function invoked
  //! to avoid from the loop we have to use useEffect and render only once
  useEffect(() => {
   getTutorials(); 
  }, [])
  
  return (
    <div>
      <AddTutorial />
      <TutorialList tutorials={tutorials} />
    </div>
  );
};

export default Home;
