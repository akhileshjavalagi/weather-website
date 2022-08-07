
// Line graph imported from library
import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

// In the below line, imported all the properties of the graph
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

// All data of the city is coming as value using props
function Chart({value}){
  
  return( 
    // Here I am displaying all the data into UI
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
