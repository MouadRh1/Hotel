import React from 'react'
import roomCSS from './../Rooms/Room.module.css'
export default function Room() {
  return (
    <div className={`${roomCSS.Rooms_container} section`}>
        <small className='section__Heading'>Luxury Suites</small>
        <h2 className="section__Title">Our Best <span>Rooms</span></h2>
        <div className={roomCSS.cards}>
            <div className={roomCSS.card_container}>
                <div className={roomCSS.card}>
                    <div className={`${roomCSS.card_front} ${roomCSS.card_front1}`}>
                        <button>Junior Suite</button>
                    </div>
                    <div className={roomCSS.card_back}>
                        <div className={roomCSS.price}>
                            <p>$120/N</p>
                        </div>
                        <div className={roomCSS.card_content}>
                            <h3>Junior Suite</h3>
                            <p>- Daily Cleaning</p>
                            <p>- Home Service</p>
                            <p>- House Keeping</p>
                            <p>- Wifi & Parking</p>
                        </div>
                        <div className={roomCSS.BookNow}>
                            <button>Book Now</button>
                            <i className='ri-arrow-right-line'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={roomCSS.card_container}>
                <div className={roomCSS.card}>
                    <div className={`${roomCSS.card_front} ${roomCSS.card_front2}`}>
                        <button>Twin Room</button>
                    </div>
                <div className={`${roomCSS.card_back} ${roomCSS.card_back2}`}>
                        <div className={roomCSS.price}>
                            <p>$160/N</p>
                        </div>
                        <div className={roomCSS.card_content}>
                            <h3>Twin Room</h3>
                            <p>- Daily Cleaning</p>
                            <p>- Home Service</p>
                            <p>- House Keeping</p>
                            <p>- Wifi & Parking</p>
                        </div>
                        <div className={roomCSS.BookNow}>
                            <button>Book Now</button>
                            <i className='ri-arrow-right-line'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={roomCSS.card_container}>
                <div className={roomCSS.card}>
                    <div className={`${roomCSS.card_front} ${roomCSS.card_front3}`}>
                        <button>Quad Room</button>
                    </div>
                    <div className={`${roomCSS.card_back} ${roomCSS.card_back3}`}>
                        <div className={roomCSS.price}>
                            <p>$180/N</p>
                        </div>
                        <div className={roomCSS.card_content}>
                            <h3>Quad Room</h3>
                            <p>- Daily Cleaning</p>
                            <p>- Home Service</p>
                            <p>- House Keeping</p>
                            <p>- Wifi & Parking</p>
                        </div>
                        <div className={roomCSS.BookNow}>
                            <button>Book Now</button>
                            <i className='ri-arrow-right-line'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={roomCSS.card_container}>
                <div className={roomCSS.card}>
                    <div className={`${roomCSS.card_front} ${roomCSS.card_front4}`}>
                        <button>Deulex Room</button>
                    </div>
                    <div className={`${roomCSS.card_back} ${roomCSS.card_back4}`}>
                        <div className={roomCSS.price}>
                            <p>$120/N</p>
                        </div>
                        <div className={roomCSS.card_content}>
                            <h3>Deulex Room</h3>
                            <p>- Daily Cleaning</p>
                            <p>- Home Service</p>
                            <p>- House Keeping</p>
                            <p>- Wifi & Parking</p>
                        </div>
                        <div className={roomCSS.BookNow}>
                            <button>Book Now</button>
                            <i className='ri-arrow-right-line'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={roomCSS.card_container}>
                <div className={roomCSS.card}>
                    <div className={`${roomCSS.card_front} ${roomCSS.card_front5}`}>
                        <button>Exclusive Room</button>
                    </div>
                    <div className={`${roomCSS.card_back} ${roomCSS.card_back5}`}>
                        <div className={roomCSS.price}>
                            <p>$200/N</p>
                        </div>
                        <div className={roomCSS.card_content}>
                            <h3>Exclusive Room</h3>
                            <p>- Daily Cleaning</p>
                            <p>- Home Service</p>
                            <p>- House Keeping</p>
                            <p>- Wifi & Parking</p>
                        </div>
                        <div className={roomCSS.BookNow}>
                            <button>Book Now</button>
                            <i className='ri-arrow-right-line'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className={roomCSS.card_container}>
                <div className={roomCSS.card}>
                    <div className={`${roomCSS.card_front} ${roomCSS.card_front6}`}>
                        <button>Personal Room</button>
                    </div>
                    <div className={`${roomCSS.card_back} ${roomCSS.card_back6}`}>
                        <div className={roomCSS.price}>
                            <p>$210/N</p>
                        </div>
                        <div className={roomCSS.card_content}>
                            <h3>Personal Room</h3>
                            <p>- Daily Cleaning</p>
                            <p>- Home Service</p>
                            <p>- House Keeping</p>
                            <p>- Wifi & Parking</p>
                        </div>
                        <div className={roomCSS.BookNow}>
                            <button>Book Now</button>
                            <i className='ri-arrow-right-line'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
