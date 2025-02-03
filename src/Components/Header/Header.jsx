import React from 'react'
import headerCSS from './../Header/Header.module.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import Hero from './../Hero/Hero'
export default function Header() {
  return (
    <div className={headerCSS.header_wrapper}>
        <Swiper 
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
                delay :2500,
            }} 
            modules={[Autoplay]}
            speed={1500}
            className={headerCSS.swiper}>
            <SwiperSlide>
                <div className={`${headerCSS.Header_slide} ${headerCSS.slide1}`}>
                    <div className={headerCSS.content}>
                        <small><span>Luxury</span> Hotel & Resta</small>
                        <h2>Enjoy Your <span>Dream</span> Time With <br />
                            <span>Luxury</span> Experience
                        </h2>
                        <p>Call Now <span>0537654132</span></p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${headerCSS.Header_slide} ${headerCSS.slide2}`}>
                    <div className={headerCSS.content}>
                        <small><span>Luxury</span> Hotel & Resta</small>
                        <h2>Enjoy Your <span>Dream</span> Time With <br />
                            <span>Luxury</span> Experience
                        </h2>
                        {/* <Hero/> */}
                        <p>Call Now <span>0537654132</span></p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`${headerCSS.Header_slide} ${headerCSS.slide3}`}>
                    <div className={headerCSS.content}>
                        <small><span>Luxury</span> Hotel & Resta</small>
                        <h2>Enjoy Your <span>Dream</span> Time With <br />
                            <span>Luxury</span> Experience
                        </h2>
                        <p>Call Now <span>0537654132</span></p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
