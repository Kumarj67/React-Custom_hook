import React from 'react'
import { useEffect,useState } from 'react';

const useFectch = (url) => {
    const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch( url);
       
      const responseJson = await response.json();
      console.log(responseJson);
      setData(responseJson);
    }
    fetchData();
   }, []);
  return ([data]);
  
}

export default useFectch
