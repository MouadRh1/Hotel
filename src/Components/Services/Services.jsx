import React from 'react'
import serviceCSS from './../Services/Services.module.css'
export default function Services() {
  return (
    <div className={`${serviceCSS.service_wrapper} section`}>
       <small className='section__Heading'>Facilites</small>
       <h2 className="section__Title">Our Best <span>Services</span></h2>
       <div className={serviceCSS.Services_cards}>
         <div className={serviceCSS.Services_card}>
            <i className='ri-hotel-line'></i>
            <h3>Basic Facilities</h3>
            <p>- Reception /Front Desk </p>
            <p>- Room Services</p>
            <p>- House Keeping</p>
            <p>- Wifi & Parking</p>
         </div>
         <div className={serviceCSS.Services_card}>
            <i className='ri-hotel-bed-line'></i>
            <h3>Room Aminities</h3>
            <p>- Confortable Bedding</p>
            <p>- Bed Room and Pool</p>
            <p>- TV and AC</p>
            <p>- Bar</p>
         </div>
         <div className={serviceCSS.Services_card}>
            <i className='ri-goblet-line'></i>
            <h3>Dining Option</h3>
            <p>- Restaurant Cafe</p>
            <p>- Bar & Lounge</p>
            <p>- Cafe & Canteen</p>
            <p>- Room Service</p>
         </div>
         <div className={serviceCSS.Services_card}>
            <i className='ri-restaurant-line'></i>
            <h3>Special Features</h3>
            <p>- Custom Rooms</p>
            <p>- Cricket Ground</p>
            <p>- Gym</p>
         </div>
       </div>
    </div>
  )
}
