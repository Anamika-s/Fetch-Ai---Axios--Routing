import axios from 'axios'
import { useFormik } from 'formik'

import React from 'react'

export const AxiosPostApiDemo = () => {
  
const formik = useFormik({
  initialValues:{
    first_name:'',
    last_name:'',
    email:''
  },
  onSubmit:(values)=>
  {
    console.log(values)
    axios.post("http://localhost:5000/person" , values)
     .then((res)=>
    {
      res.text((resp)=>
      {
        console.log(resp)
      })
    })
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

