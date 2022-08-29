import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'

import { AboutUs } from './components/AboutUs'
import { AxiosFetchApiDemo } from './components/AxiosFetchApiDemo'
import { ContactUs } from './components/ContactUs'
import { Links } from './components/Links'

import { AxiosPostApiDemo_AsyncAwait}  from './components/AxiosPostApiDemo_AsyncAwait'

export const App1 = () => {
  return (
    <div> 

      <BrowserRouter>
      <Links/>
      <Routes>
      <Route path=""  element ={<ContactUs/>}/>
        <Route path="/aboutus"  element ={<AboutUs/>}/>
        <Route path="/contactus"  element ={<ContactUs/>}/>
        <Route path="/getpeople"  element ={<AxiosFetchApiDemo/>}/>
        <Route path="/postpeople"  element ={<AxiosPostApiDemo_AsyncAwait/>}/>
        <Route path="*"  element ={<h1> No such file </h1>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
