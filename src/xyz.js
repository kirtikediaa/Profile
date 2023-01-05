import React from "react";
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import "./App.css";
import Data from "./peopleData"

const Xyz = () => {
    // const { id } = useParams()
    // const [user, setUser] = useState(null)
   
    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const response = await fetch(Data)
    //       const data = await response.json()
    //       const user = data.find(item => item.id === id)
    //       setUser(user)
    //       console.log(user)
    //     } catch (error) {
    //       console.log("error")
    //     }
    //   }
    //   fetchData()
    // }, [id])

  
    return (
      <div>
       <h1>fe</h1>
      </div>
    )
  }
  
  
  
export default Xyz;
