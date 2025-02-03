import React from 'react'
import amenitiesCSS from './../../Components/Amenities/Amenities.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import img1 from './../../assets/pool.jpg'
import img2 from './../../assets/gym.jpg'
import img3 from './../../assets/rest.jpg'
export default function Amenities() {
  return (
    <div className={`${amenitiesCSS.amenities_wrapper} section`}>
        <small className='section__Heading'>Luxury Amenities</small>
        <h2 className="section__Title">Our Best <span>Amenities</span></h2>
        <Swiper 
            className={amenitiesCSS.swiper}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay:1000,
            }}
            modules={[Autoplay]}
            speed={2000}
        >
            <SwiperSlide>
                <div className={amenitiesCSS.amenities__item}>
                    <img src={img1} alt="amenities-img" />
                    <div className={amenitiesCSS.content}>
                        <h2>Swimming Pool</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam officiis distinctio pariatur, explicabo quaerat voluptas dignissimos quidem, omnis at iste reprehenderit voluptates ratione sint dolore ut adipisci possimus error.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={amenitiesCSS.amenities__item}>
                    <img src={img2} alt="amenities-img" />
                    <div className={amenitiesCSS.content}>
                        <h2>GYM & Sports</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam officiis distinctio pariatur, explicabo quaerat voluptas dignissimos quidem, omnis at iste reprehenderit voluptates ratione sint dolore ut adipisci possimus error.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={amenitiesCSS.amenities__item}>
                    <img src={img3} alt="amenities-img" />
                    <div className={amenitiesCSS.content}>
                        <h2>Restaurant & cafe</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veniam officiis distinctio pariatur, explicabo quaerat voluptas dignissimos quidem, omnis at iste reprehenderit voluptates ratione sint dolore ut adipisci possimus error.</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
