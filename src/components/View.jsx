import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const [data,changeData]=useState([])
    
    const fetchData=(()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    })
 useEffect(()=>{fetchData()},[])
  return (
    
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">coursename</th>
      <th scope="col">trainername</th>
      <th scope="col">venue</th>
      <th scope="col">duration</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>{
        return<tr>
            <td>{value.Coursename}</td>
            <td>{value.Trainername}</td>
            <td>{value.Venue}</td>
            <td>{value.Duration}</td>
        </tr>
    }
   )}
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View