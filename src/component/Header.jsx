import React from 'react'

const Header = () => {
  return (
    <>
    <div className='container py-3'>
        <div className='row'>
            <div className='col-lg-2'>
                <img className='w-100' src='https://www.socheko.com/9073c22fb5c6c910fb5bf16d76fc29a1.png' alt=''></img>
            </div>
            <div className='col-lg-4'>
            <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>
            </div>
   <div className='col-lg-4'>
   
   </div>
        </div>
    </div>
    </>
  )
}

export default Header