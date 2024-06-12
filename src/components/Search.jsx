import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
    const [data,changeData]=useState(
        {
            "Coursename":""
            
           
           } 
    )
   const [result,setResult]=useState([])

   
   const inputhandler=(event)=>{
       changeData({...data,[event.target.name]:event.target.value})
   }
   
   const readValue=()=>{
       console.log(data)
       axios.post("http://localhost:8080/search",data).then( 
         (response)=>{
        setResult(response.data)  
         }
     
    )
         
       .catch(
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
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">coursename</label>
                        <input type="text" className="form-control" name='Coursename' value={data.Coursename} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">Search</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">coursename</th>
      <th scope="col">trainername</th>
      
    </tr>
  </thead>
  <tbody>
   {result.map(
    (value,index)=>{
        return <tr>
      
        <td>{value.Coursename}</td>
        <td>{value.Trainername}</td>
       
      </tr>
    }
   )}
    
  </tbody>
</table>
                    </div>

                </div>
            </div>
        </div>
       </div>
        </div>
      
                    )
}

                    export default Search