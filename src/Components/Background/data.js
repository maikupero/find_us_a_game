import React, {useEffect} from 'react';
import axios from 'axios';

// Incomplete to get game art from external API and convert into dynamic visual background.

const SAMPLE = 'https://reqres.in/api/users?page=2'
useEffect(()=>{
    axios.get(SAMPLE)
      .then(res=>{
        console.log(res.data.data);
        setUserData(res.data.data)
      })
      .catch(err=>{
        console.log(err);
      })
 },[])

// function Data() => {
//     return (
//       <div></div>
//     )
// }

export default Data