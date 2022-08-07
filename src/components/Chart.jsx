
import {useRef, useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function Chart({value}){
    
    console.log("chart value is",value[0].main.temp)

    // console.log("chart comingData is",comingData.current[0].main.temp)
  
  return( 
    <Box style={{w:'800px', h:'800px'}}>
       <Line style={{w:'1040px', h:'200px'}} 
       data = {{
       labels:["sunday", "monday", "tuesday", "wednseday", "thursday",
       "friday", "saturday"],
       datasets:[
         {
           label:"Temp of the cities",
           data:[value[0].main.temp, value[1].main.temp, value[2].main.temp, 
           value[3].main.temp, value[4].main.temp, value[5].main.temp, value[6].main.temp],
           bg:'yellow',
           borderColor:'green',
           tension:0.4,
           fill:true,
           pointStyle:'rect',
           pointBorderColor:'blue',
           pointbg:'#fff',
           showLine:true
         }
       ]
    }}
       ></Line> 
   </Box>
  )
  }

export default Chart
