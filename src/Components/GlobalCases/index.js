// import React, { useEffect, useState } from "react";
// import Paper from "@material-ui/core/Paper";
// import ApiData from "../../Api";

// const GlobalCases = () => {
//   const [globalData, setGlobalData] = useState([]);
//   const [dataLoading, setDataLoading] = useState(true);
//   useEffect(() => {
//     async function fetchGlobalData() {
//       const responseGlobalApi = await fetch("https://covid19.mathdro.id/api");
//       console.log(responseGlobalApi);
//       const globalApiJson = await responseGlobalApi.json();
//       console.log(globalApiJson);
//       setGlobalData(globalApiJson);
//       setDataLoading(false);
//       console.log(setGlobalData);
//     }
//     fetchGlobalData();
//   }, []);

//   if (dataLoading === true) return <h2>Loading...</h2>;
//   return (
//     <>
//       <div className="container-globalState">
//         <Paper className="paper" elevation={3}>
//           {setGlobalData.confirmed}
//           <br />
//           confirmed
//         </Paper>
//         <Paper className="paper" elevation={3}>
//           Hadi Haider
//         </Paper>
//         <Paper className="paper" elevation={3}>
//           Hadi Haider
//         </Paper>
//         <ApiData />
//       </div>
//     </>
//   );
// };

// export default GlobalCases;
