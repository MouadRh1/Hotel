import React from 'react'
import heroCSS from './../Hero/Hero.module.css'
import Guests from './Guests'
import Date from './Date'
export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-container">
            <h1>Start Your Journey With Us</h1>
            <p>Find What Makes You Anytime m Anywhere</p>
            <div className="hero-search-container">
                <div className="hero-search">
                    <div className="hero-wrapper">
                        <Date/>
                        <Guests/>
                        <div className="search-button">
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
