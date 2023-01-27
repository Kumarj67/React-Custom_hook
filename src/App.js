import "./App.css";
// import { useState, useEffect } from "react";
import Header from "./Components/Header";
import useFectch from "./Components/useFectch";

function App() {
  const [data] = useFectch(
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  );
  // here we use "useEffect hook to get data from API"now we use "React Custom Hook to get data from API"
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  //     );
  //     const responseJson = await response.json();
  //     console.log(responseJson);
  //     setData(responseJson);
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <Header />
      {data.map((element, index) => {
        return <h1 key={index}>{element.firstName}</h1>;
      })}
    </>
  );
}

export default App;
