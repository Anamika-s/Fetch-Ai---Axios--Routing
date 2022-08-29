import React , {Component} from 'react'
import { useState } from 'react'

export const FetchApiDemo = () => {
  const[data, setData] = useState([])
  const FetchData = () =>
  {
    fetch("http://localhost:5000/person")
    .then(result => 
      {
        
        result.json()
        .then(data => {setData(data)
        console.log(data)
        
      
      }
        
        )
        .catch(error =>
          {
            console.log("Some error occurred", error)
          })
      
      })
      .catch(error=>
        {
console.log(error)
        })

  }
  return (
<>    <div>FetchApiDemo</div>
  <button onClick={FetchData}> Gete Data </button>
   <h1> List of People </h1>
   {
    data ? data.map((item, i ) =>
    <div>  <span> {i+1} -- </span>  {item.first_name} | {item.last_name} </div> )
    : <h2> There are no people </h2>
   } 
</>

  )
}
