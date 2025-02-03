import React from 'react'
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../assets/about-one.png'
export default function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`}>
        <div className={aboutCSS.about_img}>
            <img src={aboutImg}  alt="about-img" />
        </div>
        <div className={aboutCSS.about_content}>    
            <small className='section_Heading'>The Royal Hotel</small>
            <h2 className="section__Title">Where Elegance Meets <span>Excellence</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores voluptatem eius cum obcaecati, aspernatur fuga, nam animi ut inventore ipsam architecto vero minima pariatur quaerat, enim facilis placeat facere.</p>
            <div className={aboutCSS.Cards}>
                <p>260+ <span>Award Wins</span></p>
                <p>250k+ <span>Visitors Visits</span></p>
                <p>150k+ <span>Events</span></p>
            </div>
        </div>
    </div>
  )
}
