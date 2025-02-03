import React from 'react'
import {IoCalendarOutline} from 'react-icons/io5'
import {BsArrowRight} from 'react-icons/bs'
export default function Date() {
  return (
    <div className="date">
        <div className="check-in">
            <IoCalendarOutline className='date-icon'/>
            <div className="date-content">
                <label>Check-In</label>
                <span>Add Date</span>
            </div>
        </div>
        <span>
          <BsArrowRight />
        </span>
        <div className="check-out">
        <IoCalendarOutline className='date-icon'/>
            <div className="date-content">
                <label>Check-Out</label>
                <span>Add Date</span>
            </div>
        </div>
    </div>
  )
}
