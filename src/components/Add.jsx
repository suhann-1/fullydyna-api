import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
    const [data,changeData]=useState(
        {
         "Coursename":"",
         "Trainername":"",
         "Venue":"",
         "Duration":"",
         "Date":""
        
        } 
    )
    const inputhandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                 alert("added")   
                }
            }
        ).catch(
            (error)=>(
                alert(error.message)
            )
        )
    }
    
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <labrl className="form-label">CourseTitle</labrl>
                            <input type="text" className="form-control" name='Coursename' value={data.Coursename} onChange={inputhandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <labrl className="form-label">Description</labrl>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <labrl className="form-label">TrainerName</labrl>
                        <input type="text" className="form-control" name='Trainername' value={data.Trainername} onChange={inputhandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <labrl className="form-label">Duration</labrl>
                        <input type="text" className="form-control" name='Duration' value={data.Duration} onChange={inputhandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <labrl className="form-label">Venue</labrl>
                        <input type="text" className="form-control" name='Venue' value={data.Venue} onChange={inputhandler}/></div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <labrl className="form-label">Date</labrl>
                        <input type="date" name="Date" id="" className="form-control" value={data.Date} onChange={inputhandler}/>
                        </div>
    
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add