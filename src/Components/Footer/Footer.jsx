import React from 'react'
import footerCSS from './../Footer/Footer.module.css'
export default function Footer() {
  return (
    <div className={`${footerCSS.footer_wrapper} section`}>
        <div className={footerCSS.footerLinks}>
            <div className={footerCSS.logo}>
                <h2>EvoMarket</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum quaerat autem distinctio dolore vel expedita aliquid. Adipisci quos dolorum voluptas. Beatae, molestias reiciendis. Aperiam unde omnis nemo a sit ad.</p>
            </div>
        </div>
        <div className={footerCSS.footerLinks}>
            <h3>Quik Links</h3>
            <p>About</p>
            <p>Contact</p>
            <p>Rooms</p>
            <p>Blogs</p>
            <p>Services</p>
        </div>
        <div className={footerCSS.footerLinks}>
            <h3>City Branches</h3>
            <p>Mexico</p>
            <p>Germany</p>
            <p>France</p>
            <p>California</p>
            <p>Morocco</p>
        </div>
        <div className={footerCSS.footerLinks}>
            <h3>Contact</h3>
            <p>Adress : <span>10 Rue Ghandi, Rabat, Morocco</span></p>
            <p>Email : <span>evomarketagency@gmail.com</span></p>
            <p>Phone : <span>06-66-76-42-88</span></p>
        </div>
    </div>
  )
}
