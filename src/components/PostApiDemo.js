import {useFormik} from "formik"

import React from 'react'

export const PostApiDemo = () => {

const formik = useFormik({
    initialValues:{
      first_name:'',
      last_name:'',
      email:''
    },
    onSubmit:(values)=>
    {
      console.log(values)
      fetch("http://localhost:5000/person" ,
      {
        method:'POST',
        headers :
        {
          'Accept' :'application/json',
          'Content-Type' :'application/json'
        },
        body:JSON.stringify(values)
      }).then((res)=>
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
