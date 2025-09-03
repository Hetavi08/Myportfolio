import React from 'react'
import Header from '../Common Pages/Header'
import Footer from '../Common Pages/Footer'
import {services} from '../Data/Service'

const Service = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
            <p className='text-uppercase text-muted fw-semibold' style={{ letterSpacing: '2px' }}>Services</p>
            <p className='fs-2 fw-medium'>
              A Website That Does More Than Look Good — It Works Hard for Your Business.
            </p>
          </div>

          <div className="col-md-6 p-5 ">
            {/* <div className="row"> */}
              {services.map((v, i) => (
                // <div key={i} className="col-md-6 mb-4">
                  <div className="card p-4 h-auto shadow-sm mt-4">
                    <h5 className="fw-bold">{v.title}</h5>
                    <p className="text-muted">{v.description}</p>
                  </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
      <Footer />
    </>
  )
}

export default Service
