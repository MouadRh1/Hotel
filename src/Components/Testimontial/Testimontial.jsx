import React from 'react'
import testimontialCSS from './../../Components/Testimontial/Testimontial.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import img1 from './../../assets/testi-01.jpg'
import img2 from './../../assets/testi-02.jpg'
import img3 from './../../assets/testi-03.jpg'
import img4 from './../../assets/testi-04.jpg'
import mouadImg from './../../assets/testi-mouad[1].jpg'
export default function Testimontial() {
  return (
    <div className={`${testimontialCSS.testimontial_wrapper} section`}>
        <small className='section__Heading'>Testimontials</small>
        <h2 className="section__Title">What Our Clients <span>Says</span></h2>
    <Swiper 
        className={testimontialCSS.swiper}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay:1000,
        }}
        breakpoints={{
          0:{
            slidesPerView:1
          },
          1200:{
            slidesPerView:2
          }
        }}
        modules={[Autoplay]}
        speed={1500}
    >
      <SwiperSlide>
        <div className={testimontialCSS.testimontial}>
          <img src={img3} alt="" />
          <div className={testimontialCSS.content}>
            <h3>Amine Zarrik <span>Director</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt veniam ullam repudiandae, aliquid quia porro impedit velit facere nulla consequatur obcaecati quisquam.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={testimontialCSS.testimontial}>
          <img src={img2} alt="" />
          <div className={testimontialCSS.content}>
            <h3>Zakaria Rahmouni <span>Designer</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt veniam ullam repudiandae, aliquid quia porro impedit velit facere nulla consequatur obcaecati quisquam.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={testimontialCSS.testimontial}>
          <img src={mouadImg} alt="" />
          <div className={testimontialCSS.content}>
            <h3>Mouad Belhucen <span>Enginer</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. deserunt veniam ullam repudiandae, aliquid quia porro impedit velit facere nulla consequatur obcaecati quisquam.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
