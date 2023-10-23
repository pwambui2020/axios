// import { useState } from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [data, setData]= useState([]);

  useEffect(() => {
    axios.delete('https://reqres.in/api/users/2',{
      //axios.get('https://reqres.in/api/users/2',{
      //axios.put('https://reqres.in/api/users/2',{

      "name": "wambui",
      "job": "Developer"

    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, [])
  return (
    <>
      <h1>Hello, this is Axios</h1>
      {
        data.map((d, i) => {
          return <p key={i}>{ d.avatar},{d.email}</p>
        })
      }
    </>
  )
}

export default App


