import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import navCSS from './../Nav/Nav.module.css'
export default function Nav() {
    const menu = useRef()
    const navBar = useRef()
    window.addEventListener('scroll',function(){
        if(this.window.scrollY > 100){
            navBar.current.classList.add(navCSS.navBarScroll)
        }
        else{
            navBar.current.classList.remove(navCSS.navBarScroll)
        }
    })

    const menuHander = ()=>{
        menu.current.classList.toggle(navCSS.showNav)
    }
  return (
    <div className={navCSS.nav_wrapper} ref={navBar}>
        <div className={navCSS.logo}>
            <Link to='/'><span>Evo</span>Market</Link>
        </div>
        <ul ref={menu}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Category'>Category</Link>
            </li>
            <li>
                <Link to='/About'>About Us</Link>
            </li>
            <li>
                <Link to='/Rooms'>Rooms</Link>
            </li>
            <li>
                <Link to='/Testimontials'>Testimontials</Link>
            </li>
            <li>
                <Link to='/Blogs'>Blogs</Link>
            </li>
        </ul>
        <div className={navCSS.nav_btns}>
            <button className={navCSS.btn}>Book Now</button>
            <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHander}></i>
        </div>
    </div>
    
  )
}
