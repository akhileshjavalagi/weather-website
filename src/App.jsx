import React, {useState, useEffect} from "react"
import Weather from './components/Weather' // Imported Weather function
import {ScaleLoader} from "react-spinners"; // Imported ScaleLoader from react spinner
import useGeoLocation from './components/UseLocation';

function App(){

  const location = useGeoLocation() 
  // Delcared a state as loading and set it false by default
  const [loading, setLoading] = useState(false);
  
  // This useEffect is for showing loading indicator 
    useEffect(()=>{
      setLoading(true) // After entering the application loading should be true
      setTimeout(()=>{ 
        setLoading(false) // After 4 seconds loading should be false
      },4000) // Loading indicator will be appeared in UI for 4 seconds.
    },[])
  
  return( 
    <div className="App">
      {/* Below line calling the Weather component  */}
      
      {
        loading == true ? // Here doing conditional rendering if loading if true scalloader should be display
        <ScaleLoader
        color="tomato"
        width="300px" height="200px"
        />
         : <Weather/> // loading is false weather component should display
      }
   </div>
  )
  }

export default App
