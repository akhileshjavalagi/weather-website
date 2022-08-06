import React, {useState, useEffect} from 'react';
import axios from "axios";
import useGeoLocation from './UseLocation';
const Weather = () => {

    // const [search, setSearch] = useState("");
    // const [data, setData] = useState(null);
    const location = useGeoLocation()
    //console.log(location)


    

    const lattitude = JSON.stringify(location.coordinates.lat);
    const lng = JSON.stringify(location.coordinates.lng);
    console.log(lattitude, lng)
    
    const getCity = async() =>{
        const res = await axios.get("https://ipinfo.io/json?token=d0f79999ea0e4d")
        console.log(res.data)
    }


    // useEffect(()=>{
    //     getData();
    // },[search]);

    // const getData = async () =>{
    //     const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=7&units=metric&appid=2336a30362a5724075c5b135b02ce940`);
    //     setData(res.data); 
    // }
    
    return (
        <div>
            {/* {
                location.loaded ? JSON.stringify(location) : "location error"
            } */}
            {/* <h1>{lattitude}</h1>
            <h1>{lng}</h1> */}
            hello
            <button onClick={getCity}>click</button>
        </div>
    );
}

export default Weather;
