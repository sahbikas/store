import React from 'react'
import CatData from '../data/CatData'
import Home from "../component/Home"
import { Routes, Route, Link } from 'react-router-dom'
import Category from './Category'
import Details from './Details'
const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cat">Home</Link>
        </li>
        {CatData.slice(0,8).map((a) => (
          <li className="nav-item" key={a}>
          <Link className="nav-link" to={`/cat/${a}`}>{a}</Link>
        </li> 
        ))}
            
      </ul>
      
    </div>
  </div>
</nav>
    <Routes>
      <Route path='/:cid' element={<Home/>}></Route>
      <Route path='/cat/:cid' element={<Category/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
    </Routes>
    </>
  )
}

export default Navbar