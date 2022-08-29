import axios from 'axios'
import { useFormik } from 'formik'

import React from 'react'

export const AxiosPostApiDemo_AsyncAwait = () => {
  
const formik = useFormik({
  initialValues:{
    first_name:'',
    last_name:'',
    email:''
  },
  onSubmit: async(values)=>
  {
    console.log(values)
    let response = await axios.post("http://localhost:5000/person" , values);
    console.log(response.status)

    console.log(values)
    let resp = await axios.delete("http://localhost:5000/person/4");
    console.log(resp.status)
     
  }
})


return (
  <div> 
  <form onSubmit={formik.handleSubmit}>
<div>
    <label htmlFor="first_name"> First Name </label>
    <input type="text" name="first_name" onChange={formik.handleChange} value={formik.values.first_name} id="first_name"/>

    </div>

    <div>
    <label htmlFor="last_name"> Last Name </label>
    <input type="text" name="last_name" id="last_name" onChange={formik.handleChange} value={formik.values.last_name}/>

    </div>

    <div>
    <label htmlFor="email"> email </label>
    <input type="text" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}/>

    </div>
    <button> Post </button>
    </form>
  </div>
)
}

