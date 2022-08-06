import React, {useState, useEffect} from 'react';
import axios from "axios";
import useGeoLocation from './UseLocation';
import { useRef } from 'react';
import { Box, Heading, Image, Input } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'

const Weather = () => {

    const [search, setSearch] = useState(null);

    const [data, setData] = useState([]);

    let days = ["sunday", "monday", "tuesday", "wednseday", "thursday",
   "friday", "saturday"]; 
    
    
    const location = useGeoLocation()

    // const lattitude = JSON.stringify(location.coordinates.lat);
    // const lng = JSON.stringify(location.coordinates.lng);

    useEffect(()=>{
        getCity()
    },[])

    useEffect(()=>{
        getWeekData()
    },[search])

    const [currentCity, setCurrentCity] = useState("")
    const getCity = async() =>{
        const res = await axios.get("https://ipinfo.io/city?token=d0f79999ea0e4d");
        setCurrentCity(res.data)
        getTemp(res.data);
    }

    const getTemp = async(dataDefault) =>{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${dataDefault}&cnt=7&units=metric&appid=2336a30362a5724075c5b135b02ce940`);
        setData(res.data.list)

    }

    console.log("default data is",data)

    const getWeekData = async () =>{
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=7&units=metric&appid=2336a30362a5724075c5b135b02ce940`);
            setData(res.data.list);
            
        }
        console.log("week data is",data)

     
    
    return (
        <Box>
        <Box justifyContent="space-between" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' display="flex" border="1px solid red">
            <Box>
                <Image w="40px" src="https://media.istockphoto.com/vectors/map-pin-vector-glyph-icon-vector-id1193451471?k=20&m=1193451471&s=612x612&w=0&h=ve7JRaMvw6L1HBiDOTVwfbhHALPPH-nCMCgG0Z_z5NY="></Image>
            </Box>

            <Box w="900px">
                <Input type="text" onChange={(e)=>{
                   setSearch(e.target.value) 
                }} defaultValue={currentCity} _hover={{ bg: "green.200", color: " white" }}/>
            </Box>

            <Box>
                <Image onClick={getTemp} w="40px" src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"></Image>
            </Box>
        </Box>
            
            <Box  border="1px solid red" w="1000px" h="700px" margin="auto">
              <Box gap="10px"  mt="50px" display="flex" justifyContent="space-between">
                {
                   days.map((e)=>(
                    <Box borderRadius="10px" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' w="150px" padding="1">
                        <Heading size="sm" fontFamily="cursive">{e}</Heading>
                    </Box>
                   ))
                }
             </Box> 
            
            <Box display="flex" justifyContent="space-between">
            {
                data.length > 0 ? 
                data.map((e)=>(
                    <Box _hover={{ bg: "green.500", color: " white" }} mt="10px" borderRadius="10px" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg' w="130px" padding="1">
                    <Heading fontFamily="monospace" size="sm">{e.main.temp}°C</Heading>
                    <Image src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"></Image>
                    <Heading size="md">Clouds</Heading>
                    </Box>
                ))
                : 
                data.map((ele)=>(
                    <Box w="100px" padding="1" >
                    <Heading fontFamily="monospace" size="sm">{ele.main.temp}°C</Heading>
                    <Image src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"></Image>
                    <Heading size="md">Clouds</Heading>
                    </Box>
                ))
            }
             </Box>

            <Box  mt="20px"  gap="5" display="flex" ml="15px" padding="5" w="200px">
                {
                    data.length > 0 ? 
                    <>
                    <Heading padding="5" m="auto" textAlign="left" fontFamily="monospace" size="lg">{data[6].main.temp}°C</Heading>
                    <Image m="auto" w="70px" src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg"></Image>
                    </>
                    :
                    console.log("null")
                } 
            </Box>


            <Grid templateColumns='repeat(2, 1fr)' gap={12} >
                <GridItem w='100%' h='50px' bg='#CBD5E0' >
                    <Heading textAlign="left"  size="md">Pressure</Heading>
                    <Heading   textAlign="left" fontFamily="monospace" size="md">{data[6].main.pressure}</Heading>
                </GridItem>
                
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

            </Box>


        </Box>
    );
}

export default Weather;
