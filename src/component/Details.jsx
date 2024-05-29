import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from '../data/Product.Data'
const Details = () => {
    let {id}=useParams()
    let data=ProductData.find((a)=>a.id==id)
  return (
    <div className='container'>
        <div className='row'>

        </div>
        <h1>Details</h1>
        <div className='col-lg-4'>
    <img src={data.thumbnail} className='w-100'></img>

        </div>
        <div className='col-lg-4'>
            <h2>{data.title}</h2>
            <p>Price: {data.price}</p>
    </div>
    </div>
  )
}

export default Details