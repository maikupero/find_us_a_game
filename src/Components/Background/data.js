import React, {useEffect} from 'react';
import Axios from 'axios';

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

function Data() => {

    return (

    )
}

export default Data