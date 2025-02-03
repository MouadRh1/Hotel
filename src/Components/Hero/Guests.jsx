import React from 'react'
import {GoPeople} from 'react-icons/go'
export default function Guests() {
  return (
    <div className="guests">
      <GoPeople className='guests-icons'/>
      <div className="guests-content">
        <label>Guests</label>
        <span>2 adult, 2 children, 1 room</span>
      </div>
    </div>
  )
}
