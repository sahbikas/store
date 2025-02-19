import React from 'react'
import Block1 from './Block1'

const Home = () => {
  return (
   <>
   <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://new.socheko.com/public/files/F4A3F6213A1B9CB-whole-sale-slider-final.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://new.socheko.com/public/files/46FF1B70D66586C-mixer-slider-2.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://new.socheko.com/public/files/DAA5F925B3AE59D-melange-kurthi-final.webp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <Block1 tt="smartphones"/>
  <Block1 tt="laptops"/>
  <Block1 tt="fragrances"/>
  <Block1 tt="skincare"/>
  <Block1 tt="groceries"/>
  <Block1 tt="home-decoration"/>
  <Block1 tt="furniture"/>
  <Block1 tt="tops"/>
   </>
  )
}

export default Home