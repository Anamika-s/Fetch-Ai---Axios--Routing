// import React from 'react'
// import {Link} from 'react-router-dom'
// export const Links = () => {
//   return (
//     <div> <h1> My Application </h1>
    
// <nav>
//   <ul>
//     <li> <Link to="/aboutus"> About Us </Link> </li>
//     <li> <Link to="/contactus"> Contact Us </Link> </li>
//     <li> <Link to="/getpeople"> Get List of People </Link></li>
//     <li> <Link to="/postpeople"> Insert Record to json file </Link></li>
//   </ul>
// </nav>

//     </div>
 
 
//  )
// }




import React from 'react'
import {Link} from 'react-router-dom'
export const Links = () => {
  return (
    <div>   

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> My Application </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">About Us</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link"  to="/contactus"> Contact Us </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/getpeople"> Get List of People </Link>
          </li> 
          <li className="nav-item">
          <Link className="nav-link" to="/postpeople"> Isnert Record </Link>
        </li>
    
      </ul>
       
    </div>
  </div>
</nav>



{/* 
<nav>
  <ul>
    <li> <Link to="/aboutus"> About Us </Link> </li>
    <li> <Link to="/contactus"> Contact Us </Link> </li>
    <li> <Link to="/getpeople"> Get List of People </Link></li>
    <li> <Link to="/postpeople"> Insert Record to json file </Link></li>
  </ul>
</nav> */}

    </div>
 
 
 )
}
