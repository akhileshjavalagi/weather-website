import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import useGeoLocation from './UseLocation';
import { Box, Heading, Image, Input } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import { Cities } from './Citeis';
import Chart from './Chart';

const Weather = () => {

    const [search, setSearch] = useState(null); //I taken the search state as null at the beggining

    const [data, setData] = useState([]); //I taken the data as an empty array.

    let days = ["sunday", "monday", "tuesday", "wednseday", "thursday",
    "friday", "saturday"]; // I taken days array to show the days in the UI

    const location = useGeoLocation() // I imported the geolocation file and assigned to the variable.

    // This useEffect is for get the city name 
    useEffect(()=>{
       if(location.loaded == true){ // Here I put condition, if the location is true then only getCity() function should be run.
         getCity();
       }
    },[location.loaded ])

    // This useEffect is for get the week data of the fetched city.
    useEffect(()=>{
        if(location.loaded==true){
            getWeekData(); // This is the function to get the data of the city.
        }
    },[search, location.loaded])

    const [currentCity, setCurrentCity] = useState("") // I taken this state to fetch the current city data.

    //This function will fetch the data of the city from the below API
    const getCity = async() =>{
        const res = await axios.get("https://ipinfo.io/city?token=d0f79999ea0e4d");
        setCurrentCity(res.data) // Fetched city will set to the currentcity.
        getTemp(res.data); 
    }

    // This funciton is to get the week data of the currentcity
    const getTemp = async(dataDefault) =>{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${dataDefault}&cnt=7&units=metric&appid=2336a30362a5724075c5b135b02ce940`);
        setData(res.data.list)

    }

    //console.log("default data is",data)

    //This function is to get the week data for the searched city.
    const getWeekData = async () =>{
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=7&units=metric&appid=2336a30362a5724075c5b135b02ce940`);
            setData(res.data.list);
    }
       
    //console.log("week data is",data)

    const [suggestion, setSuggestion] = useState([]); // This is the suggestion to the users to select the city.

    // This useEffect is for debouncing funciton and filtering the cities.
    useEffect(()=>{
        if(search == ""){
            setSuggestion([])
        }else{
            // Below is the timout is there, it show the result after 1 second
            setTimeout(()=>{
                let newSuggestions = Cities.filter(item => item.toLowerCase().indexOf(search) !== -1 ? true : false)
                .map(item => item)
                setSuggestion(newSuggestions);
            },2000)
        }
    },[search])
    
    // This funciton is to fetch the city which is coming from the suggestions.
    const fetchParticlarCity = async(e,id) =>{
        setSearch(e)
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=7&units=metric&appid=2336a30362a5724075c5b135b02ce940`)
        setData(res.data.list)
    }
    return (
        <Box>
        {/* This is the heading of the application */}
        <Heading color="tomato" ml="420px">WELCOME TO WEATHER APPLICATION</Heading> 
        <Box ml="250px" justifyContent="space-between" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' display="flex">
            <Box>
                <Image w="40px" src="https://media.istockphoto.com/vectors/map-pin-vector-glyph-icon-vector-id1193451471?k=20&m=1193451471&s=612x612&w=0&h=ve7JRaMvw6L1HBiDOTVwfbhHALPPH-nCMCgG0Z_z5NY="></Image>
            </Box>

            {/* This is the inputBox is to search the cities. */}
            <Box w="900px">
                <Input type="text" onChange={(e)=>{
                   setSearch(e.target.value) 
                }} 
                value =  {search}
                _hover={{ bg: "green.200", color: " white" }}/>
                <Box w="900px" m="auto">
                    {/* Here suggestions are mapping and displaying in the UI */}
                    {
                        suggestion.map((e, index)=>(
                            // In the Below box, It has onclick funciton which is called fetchParticlarCity. 
                            // It acts as a button. 
                            <Box _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' onClick={()=>fetchParticlarCity(e,index)}>
                                <Heading textAlign="center">{e}</Heading>   
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Box>
                <Image onClick={getTemp} w="40px" src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"></Image>
            </Box>
        </Box>
            <Box  w="1000px" h="700px" ml="250px">
            {
                // Below is the name of the particular city.
                !search ? <Heading>{currentCity}</Heading> : <Heading>{search}</Heading>  
            }
              <Box gap="10px"  mt="50px" display="flex" justifyContent="space-between">
                {
                  // In the below map function, days are mapping which are in the top of the array.
                   days.map((e)=>(
                    <Box borderRadius="10px" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' w="150px" padding="1">
                        <Heading size="sm" fontFamily="cursive">{e}</Heading>
                    </Box>
                   ))
                }
             </Box> 
            
            <Box display="flex" justifyContent="space-between">
            {
                // This below code shows all the temparature
                data.length > 0 ? 
                data.map((e)=>(
                    <Box  _hover={{ bg: "green.500", color: " white" }} mt="10px" borderRadius="10px" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' w="130px" padding="1">
                    <Heading fontFamily="monospace" size="sm">{e.main.temp}°C</Heading>
                    <Image src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"></Image>
                    <Heading size="md">Clouds</Heading>
                    </Box>
                ))
                : 
                console.log(null)
            }
            </Box>

            <Box  mt="20px"  gap="5" display="flex" ml="15px" padding="5" w="200px">
                {
                    data.length > 0 ? 
                    <>
                    <Heading padding="5" m="auto" textAlign="left" fontFamily="monospace" size="lg">{data[1].main.temp}°C</Heading>
                    <Image m="auto" w="70px" src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"></Image>
                    </>
                    :
                    console.log("null")   
                } 
            </Box>


            {
                data.length > 0 ? <Chart value={data}/> : console.log(null)
            }
            
            {
                // This below code shows the Pressure of the city.
                data.length > 0 ? 
                <Grid templateColumns='repeat(2, 1fr)' gap={12} >
                <GridItem w='100%' h='50px' bg='#CBD5E0' >
                    <Heading textAlign="left"  size="md">Pressure</Heading>
                    <Heading   textAlign="left" fontFamily="monospace" size="md">{data[6].main.pressure}</Heading>
                </GridItem>
                
                {/* this below code shows the humidity */}
                <GridItem w='100%' h='50px' bg='#CBD5E0'>
                    <Heading textAlign="right"  size="md">Humidity</Heading>
                    <Heading   textAlign="right" fontFamily="monospace" size="md">{data[6].main.humidity}</Heading>
                </GridItem>

                <GridItem w='100%' h='50px' bg='#CBD5E0'>
                    <Heading textAlign="left"  size="md">Sunrise</Heading>
                    <Heading textAlign="left"  size="md">6:12am</Heading>
                </GridItem>

                <GridItem w='100%' h='50px' bg='#CBD5E0'>
                <Heading textAlign="right"  size="md">Sunset</Heading>
                    <Heading textAlign="right"  size="md">6:56pm</Heading>
                </GridItem>
            </Grid>
            :
            console.log("null")
            }
            </Box>
        </Box>
    )
}

export default Weather;
