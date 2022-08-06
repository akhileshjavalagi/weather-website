// import CalendarExample from "./components/calendar";
// import QuillEditorExample from "./components/quill";
// import DataTableExample from "./components/dataTables";
// import KanbanExample from "./components/kanban";
// import ReactGlobeExample from "./components/GlobeExample";
// import WizardExample from "./components/wizard";
// import BarChart from "./components/charts/barChart";
// import BubbleChart from "./components/charts/bubbleChart";
// import DonutChart from "./components/charts/donutChart";
// import LineBarChart from "./components/charts/lineBarChart";
// import LineChart from "./components/charts/lineChart";
// import PieChart from "./components/charts/pieChart";
// import PolarChart from "./components/charts/polarChart";
// import RadarChart from "./components/charts/radarChart";
// import MapComponent from "./components/map";
// import {
//   lineChartDataOverallRevenue,
//   lineChartOptionsOverallRevenue,
//   barChartDataDailyTraffic,
//   barChartOptionsDailyTraffic,
//   barChartOptionsCharts1,
//   barChartOptionsCharts2,
//   pieChartOptions,
//   pieChartData,
//   barChartDataCharts1,
//   barChartDataCharts2,
//   bubbleChartData,
//   bubbleChartOptions,
//   donutChartDataCharts1,
//   donutChartOptionsCharts1,
//   lineBarChartData,
//   lineBarChartOptions,
//   lineChartDataCharts1,
//   lineChartDataCharts2,
//   lineChartOptionsCharts1,
//   lineChartOptionsCharts2,
//   pieChartDataCharts1,
//   pieChartOptionsCharts1,
//   polarChartDataCharts,
//   polarChartOptionsCharts,
//   radarChartDataCharts,
//   radarChartOptionsCharts
// } from "./components/charts/chartData.js";
// import tableData1 from "./components/tableData.json";
// import { Box } from "@chakra-ui/react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "react-quill/dist/quill.snow.css"; // ES6
// import "./styles.css";

// export default function Test() {
//   const columnsData1 = [
//     {
//       Header: "Name",
//       accessor: "name"
//     },
//     {
//       Header: "Artworks",
//       accessor: "artworks"
//     },
//     {
//       Header: "Rating",
//       accessor: "rating"
//     }
//   ];
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <Switch>
//             <Route exact path="/calendar">
//               <CalendarExample />
//             </Route>
//             <Route path="/data-tables">
//               <Box maxWidth="700px" mx="auto" mt="30px">
//                 <DataTableExample
//                   tableData={tableData1}
//                   columnsData={columnsData1}
//                 />
//               </Box>
//             </Route>
//             <Route path="/kanban">
//               <KanbanExample />
//             </Route>
//             <Route path="/map">
//               <MapComponent />
//             </Route>
//             <Route path="/quill-editor">
//               <Box maxWidth="450px" mx="auto" mt="30px">
//                 <QuillEditorExample />
//               </Box>
//             </Route>
//             <Route path="/react-globe">
//               <ReactGlobeExample />
//             </Route>
//             <Route path="/line-chart-1">
//               <LineChart
//                 chartData={lineChartDataOverallRevenue}
//                 chartOptions={lineChartOptionsOverallRevenue}
//               />
//             </Route>
//             <Route path="/line-chart-2">
//               <LineChart
//                 chartData={lineChartDataCharts2}
//                 chartOptions={lineChartOptionsCharts2}
//               />
//             </Route>
//             <Route path="/bar-chart-1">
//               <BarChart
//                 chartData={barChartDataDailyTraffic}
//                 chartOptions={barChartOptionsDailyTraffic}
//               />
//             </Route>
//             <Route path="/bar-chart-2">
//               <BarChart
//                 chartData={barChartDataCharts2}
//                 chartOptions={barChartOptionsCharts2}
//               />
//             </Route>
//             <Route path="/mixed-chart">
//               <LineBarChart
//                 chartData={lineBarChartData}
//                 chartOptions={lineBarChartOptions}
//               />
//             </Route>
//             <Route path="/bubble-chart">
//               <BubbleChart
//                 chartData={bubbleChartData}
//                 chartOptions={bubbleChartOptions}
//               />
//             </Route>
//             <Route path="/donut-chart">
//               <DonutChart
//                 chartData={donutChartDataCharts1}
//                 chartOptions={donutChartOptionsCharts1}
//               />
//             </Route>
//             <Route path="/pie-chart">
//               <PieChart
//                 chartData={pieChartData}
//                 chartOptions={pieChartOptions}
//               />
//             </Route>
//             <Route path="/radar-chart">
//               <RadarChart
//                 chartData={radarChartDataCharts}
//                 chartOptions={radarChartOptionsCharts}
//               />
//             </Route>
//             <Route path="/polar-chart">
//               <PolarChart
//                 chartData={polarChartDataCharts}
//                 chartOptions={polarChartOptionsCharts}
//               />
//             </Route>
//             <Route path="/wizard">
//               <WizardExample />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }
