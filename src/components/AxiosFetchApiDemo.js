import React from 'react'
import axios from 'axios'
import { useState ,Component} from 'react'
export const AxiosFetchApiDemo = () => {
  const [data, setData]  = useState([])
  const FetchData = () =>
  {
    axios.get("http://localhost:5000/person")
    .then(response =>
      { 
        setData(response.data)  
    })
      .catch(error=>
        console.log(error))
  }
  return (

    <>    <div> Axios FetchApiDemo</div>
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
